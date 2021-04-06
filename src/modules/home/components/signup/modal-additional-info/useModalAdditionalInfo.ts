import { ref, computed, SetupContext, watch, Ref } from "vue";
import { uploadFile } from "@/commons/utils/uploadImage";
import { CLOSE_MODAL } from "@/commons/constant";
import {
  validateEmail,
  validatePhone,
  validateZipCode,
  validateDistrict,
  validateProvince,
  validateAddress
} from "@/commons/utils/validForm";
import districts from "@/commons/constant/thailand-address/district";
import provinces from "@/commons/constant/thailand-address/province";
import { District } from "@/commons/Interfaces";
import { SUBMIT_MODAL } from "../constant";

const USER_LOCATION = {
  DISTRICT_ID: -1,
  DISTRICT_TH_NAME: "",
  DISTRICT_ENG_NAME: "",
  PROVINCE_ID: -1,
  GEO_ID: -1,
  ZIPCODE: ""
};

export default function useModalAdditionalInfo(
  context: SetupContext<("close-modal" | "submit-modal")[]>
) {
  const uploadedImg = ref<string | null>(null);
  const reader = new FileReader();
  const userEmail = ref("");
  const userPhone = ref("");
  const userLocation: Ref<District> = ref(USER_LOCATION);
  const userZipCode = ref("");
  const userDistrict = ref("");
  const userProvince = ref("");
  const userAddress = ref("");

  const districtOptionNames = districts.map(
    district => district.DISTRICT_ENG_NAME
  );
  const districtOptionValues = districts;

  async function previewFile(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    if (target.files?.[0].type.match("image.*")) {
      const uploadedFile = await uploadFile(reader, target);
      uploadedImg.value = uploadedFile;
    }
  }

  function submitForm() {
    context.emit(SUBMIT_MODAL, userZipCode.value);
  }

  function closeModal() {
    console.log("close modal");
    context.emit(CLOSE_MODAL);
  }

  const isValidEmail = computed(() => {
    return validateEmail(userEmail.value);
  });

  const isValidPhone = computed(() => {
    return validatePhone(userPhone.value);
  });

  const isValidLocation = computed(() => {
    return (
      validateDistrict(userDistrict.value) &&
      validateProvince(userProvince.value) &&
      validateZipCode(userZipCode.value)
    );
  });

  const isValidAddress = computed(() => {
    return validateAddress(userAddress.value);
  });

  const fileLoaded = computed(() => {
    return !!uploadedImg.value;
  });

  const isValidForm = computed(() => {
    console.log(fileLoaded, uploadedImg.value);
    return (
      isValidEmail.value &&
      userEmail.value !== "" &&
      isValidPhone.value &&
      userPhone.value !== "" &&
      isValidLocation.value &&
      userDistrict.value !== "" &&
      userProvince.value !== "" &&
      userZipCode.value !== "" &&
      isValidAddress.value &&
      userAddress.value !== "" &&
      fileLoaded.value
    );
  });

  watch(userLocation, () => {
    userDistrict.value = userLocation.value.DISTRICT_ENG_NAME;
    userZipCode.value = userLocation.value.ZIPCODE;
    userProvince.value = provinces.find(province => {
      return province.PROVINCE_ID === userLocation.value.PROVINCE_ID;
    })?.PROVINCE_ENG_NAME as string;
  });

  return {
    uploadedImg,
    previewFile,
    fileLoaded,
    closeModal,
    userEmail,
    userPhone,
    userLocation,
    userZipCode,
    userDistrict,
    userProvince,
    userAddress,
    districtOptionNames,
    districtOptionValues,
    isValidEmail,
    isValidPhone,
    isValidLocation,
    isValidAddress,
    isValidForm,
    submitForm
  };
}
