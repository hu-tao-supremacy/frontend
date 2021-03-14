import { ref, computed, SetupContext } from "vue";
import { uploadFile } from "@/commons/utils/uploadImage";
import { CLOSE_MODAL } from "@/commons/constant";

export default function useModalAdditionalInfo(
  _: object,
  context: SetupContext<"close-modal"[]>
) {
  const uploadedImg = ref<string | null>(null);
  const reader = new FileReader();
  const userEmail = ref("");
  const userPhone = ref("");
  const userZipCode = ref("");
  const userCity = ref("");
  const userProvince = ref("");
  const userAddress = ref("");

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

  function validEmail(): boolean {
    const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(userEmail.value.toLowerCase());
  }

  function validPhone(): boolean {
    const expression = /^0[0-9]{9}$/;
    return expression.test(userPhone.value);
  }

  function validZipCode(): boolean {
    const expression = /^[0-9]+$/;
    return expression.test(userZipCode.value);
  }

  function validCity(): boolean {
    const expression = /[^0-9]/;
    return expression.test(userCity.value);
  }

  function validProvince(): boolean {
    if (userProvince.value === "") return false;
    const expression = /[^0-9]/;
    return expression.test(userProvince.value);
  }

  function validAddress(): boolean {
    return userAddress.value !== "";
  }

  function validateForm() {
    const errors = [];
    if (!validProfileImage()) errors.push("Invalid profile image");
    if (!validEmail()) errors.push("Invalid email");
    if (!validPhone()) errors.push("Invalid phone number");
    if (!validZipCode()) errors.push("Invalid zip code");
    if (!validCity()) errors.push("Invalid city");
    if (!validProvince()) errors.push("Invalid province");
    if (!validAddress()) errors.push("Invalid address");
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

  return {
    uploadedImg,
    previewFile,
    fileLoaded,
    closeModal,
    userEmail,
    userPhone,
    userZipCode,
    userCity,
    userProvince,
    userAddress,
    validateForm
  };
}
