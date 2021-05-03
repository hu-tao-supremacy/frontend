import { ref, computed, SetupContext, watch, Ref } from "vue";
import { CLOSE_MODAL, GENDER } from "@/commons/constant";
import {
  validateEmail,
  validatePhone,
  validateZipCode,
  validateDistrict,
  validateProvince,
  validateYear
} from "@/commons/utils/validForm";
import districts from "@/commons/constant/thailand-address/district";
import provinces from "@/commons/constant/thailand-address/province";
import { District } from "@/commons/Interfaces";
import { SUBMIT_MODAL } from "../constant";
import { UpdateUserInput } from "@/apollo/types";

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
  const uploadedImgFile = ref<Blob | null>(null);
  const userEmail = ref("");
  const userPhone = ref("");
  const userLocation: Ref<District> = ref(USER_LOCATION);
  const userZipCode = ref("");
  const userDistrict = ref("");
  const userProvince = ref("");
  const userAddress = ref("");
  const userYear = ref(null);
  const userGender = ref(null);

  const optionNames = Object.keys(GENDER);
  const optionValues = Object.values(GENDER);

  const districtOptionNames = districts.map(
    district => district.DISTRICT_ENG_NAME
  );
  const districtOptionValues = districts;

  function closeModal() {
    context.emit(CLOSE_MODAL);
  }

  const isValidEmail = computed(() => {
    return validateEmail(userEmail.value);
  });

  const isValidYear = computed(() => {
    return validateYear(userYear.value);
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

  const fileLoaded = computed(() => {
    return !!uploadedImg.value;
  });

  const isValidForm = computed(() => {
    return (
      isValidEmail.value &&
      userEmail.value !== "" &&
      isValidPhone.value &&
      userPhone.value !== "" &&
      isValidLocation.value &&
      userDistrict.value !== "" &&
      userProvince.value !== "" &&
      userZipCode.value !== "" &&
      userAddress.value !== "" &&
      isValidYear.value &&
      userYear.value &&
      userGender.value
    );
  });

  function submitForm() {
    // toadd phone and complete address
    if (isValidForm.value) {
      const userInfo = {
        address: userAddress.value,
        email: userEmail.value,
        profilePicture: uploadedImgFile.value,
        district: userDistrict.value,
        province: userProvince.value,
        zipCode: userZipCode.value,
        phoneNumber: userPhone.value,
        academicYear: Number(userYear.value)
      } as UpdateUserInput;
      context.emit(SUBMIT_MODAL, userInfo);
    }
  }

  watch(userLocation, () => {
    userDistrict.value = userLocation.value.DISTRICT_ENG_NAME;
    userZipCode.value = userLocation.value.ZIPCODE;
    userProvince.value = provinces.find(province => {
      return province.PROVINCE_ID === userLocation.value.PROVINCE_ID;
    })?.PROVINCE_ENG_NAME as string;
  });

  return {
    uploadedImg,
    uploadedImgFile,
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
    isValidForm,
    submitForm,
    isValidYear,
    userYear,
    optionNames,
    optionValues,
    userGender
  };
}
