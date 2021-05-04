import { ref, Ref, computed, SetupContext } from "vue";
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
import { GENDER, SUBMIT_FORM } from "@/commons/constant";
import { District } from "@/commons/Interfaces";
import { useUserProfileApi } from "../api";
import { Gender } from "@/apollo/types";

export default function useUserProfile(context: SetupContext<"submit-form"[]>) {
  const uploadedImg: Ref<string | null> = ref(null);
  const uploadedImgFile: Ref<Blob | null> = ref(null);
  const gender: Ref<Gender | null> = ref(null);
  const year: Ref<string | null> = ref(null);
  const email = ref("");
  const phoneNumber = ref("");
  const location: Ref<District | null> = ref(null);
  const address = ref("");

  const genderNames = Object.keys(GENDER);
  const genderNameInitialValue = ref("Male");
  const genderValues = Object.values(GENDER);

  const districtOptionNames = districts.map(
    district => district.DISTRICT_ENG_NAME
  );
  const districtOptionValues = districts;

  const district = computed(() => {
    if (!location.value) return "";
    return location.value.DISTRICT_ENG_NAME;
  });

  const zipCode = computed(() => {
    if (!location.value) return "";
    return location.value.ZIPCODE;
  });

  const province = computed(() => {
    if (!location.value) return "";
    return provinces.find(
      province => province.PROVINCE_ID === location.value?.PROVINCE_ID
    )?.PROVINCE_ENG_NAME as string;
  });

  const fileLoaded = computed(() => {
    return !!uploadedImg.value;
  });

  const isValidEmail = computed(() => {
    return validateEmail(email.value);
  });

  const isValidYear = computed(() => {
    return validateYear(Number(year.value));
  });

  const isValidPhone = computed(() => {
    return validatePhone(phoneNumber.value);
  });

  const isValidLocation = computed(() => {
    return (
      validateDistrict(district.value) &&
      validateProvince(province.value) &&
      validateZipCode(zipCode.value)
    );
  });

  const isValidForm = computed(() => {
    return (
      isValidEmail.value &&
      email.value !== "" &&
      isValidPhone.value &&
      phoneNumber.value !== "" &&
      isValidLocation.value &&
      district.value !== "" &&
      province.value !== "" &&
      zipCode.value !== "" &&
      address.value !== "" &&
      isValidYear.value &&
      year.value &&
      gender.value
    );
  });

  const { onResult: onUserProfileResult } = useUserProfileApi();
  onUserProfileResult(data => {
    const currentUser = data.data.currentUser;
    uploadedImg.value = currentUser.profilePictureUrl as string;
    gender.value = currentUser.gender;
    genderNameInitialValue.value =
      genderNames[genderValues.indexOf(gender.value)];
    year.value = currentUser.academicYear?.toString() as string;
    email.value = currentUser.email;
    phoneNumber.value = currentUser.phoneNumber as string;
    address.value = currentUser.address as string;
    location.value = districts.find(
      district => district.DISTRICT_ENG_NAME === currentUser.district
    ) as District;
  });

  function submitWithImg() {
    const userProfile = {
      email: email.value,
      address: address.value,
      phoneNumber: phoneNumber.value,
      district: district.value,
      province: province.value,
      zipCode: zipCode.value,
      gender: gender.value,
      academicYear: Number(year.value),
      profilePictureUrl: uploadedImgFile.value
    };
    //Connect to api here
    console.log("Submit", userProfile);
  }

  function submitWithoutImg() {
    const userProfile = {
      email: email.value,
      address: address.value,
      phoneNumber: phoneNumber.value,
      district: district.value,
      province: province.value,
      zipCode: zipCode.value,
      gender: gender.value,
      academicYear: Number(year.value)
    };
    //Connect to api here
    console.log("Submit", userProfile);
  }

  function submitForm() {
    if (!uploadedImgFile.value) submitWithoutImg();
    else submitWithImg();
    context.emit(SUBMIT_FORM);
  }

  return {
    uploadedImg,
    uploadedImgFile,
    year,
    gender,
    email,
    phoneNumber,
    location,
    district,
    province,
    zipCode,
    address,
    genderNames,
    genderNameInitialValue,
    genderValues,
    districtOptionNames,
    districtOptionValues,
    fileLoaded,
    isValidEmail,
    isValidPhone,
    isValidLocation,
    isValidForm,
    submitForm
  };
}
