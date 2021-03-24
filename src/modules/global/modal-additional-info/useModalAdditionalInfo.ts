import { ref, computed, SetupContext, watch, Ref } from "vue";
import { uploadFile } from "@/commons/utils/uploadImage";
import { CLOSE_MODAL } from "@/commons/constant";
import {
  validEmail,
  validPhone,
  validZipCode,
  validDistrict,
  validProvince,
  validAddress
} from "@/commons/utils/validForm";
import districts from "@/commons/constant/thailand-address/district";
import provinces from "@/commons/constant/thailand-address/province";
import { District } from "@/commons/Interfaces";

export default function useModalAdditionalInfo(
  _: object,
  context: SetupContext<"close-modal"[]>
) {
  const uploadedImg = ref<string | null>(null);
  const reader = new FileReader();
  const userEmail = ref("");
  const userPhone = ref("");
  const userLocation: Ref<District> = ref({
    DISTRICT_ID: -1,
    DISTRICT_TH_NAME: "",
    DISTRICT_ENG_NAME: "",
    PROVINCE_ID: -1,
    GEO_ID: -1,
    ZIPCODE: ""
  });
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

  function validProfileImage(): boolean {
    if (uploadedImg.value) return true;
    return false;
  }

  function validateForm() {
    const errors = [];
    if (!validProfileImage()) errors.push("Invalid profile image");
    if (!validEmail(userEmail.value)) errors.push("Invalid email");
    if (!validPhone(userPhone.value)) errors.push("Invalid phone number");
    if (!validZipCode(userZipCode.value)) errors.push("Invalid zip code");
    if (!validDistrict(userDistrict.value)) errors.push("Invalid city");
    if (!validProvince(userProvince.value)) errors.push("Invalid province");
    if (!validAddress(userAddress.value)) errors.push("Invalid address");
    if (errors.length !== 0) {
      console.log(errors);
      //do something when error occur
    } else {
      console.log("success");
      //create object and post to api
    }
  }

  function closeModal() {
    context.emit(CLOSE_MODAL);
  }

  const fileLoaded = computed(function() {
    return uploadedImg.value;
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
    validateForm
  };
}
