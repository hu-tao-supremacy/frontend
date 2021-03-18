import { ref, computed, SetupContext } from "vue";
import { uploadFile } from "@/commons/utils/uploadImage";
import { CLOSE_MODAL } from "@/commons/constant";
import {
  validEmail,
  validPhone,
  validZipCode,
  validCity,
  validProvince,
  validAddress
} from "@/commons/utils/validForm";

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

  function validateForm() {
    const errors = [];
    if (!validProfileImage()) errors.push("Invalid profile image");
    if (!validEmail(userEmail.value)) errors.push("Invalid email");
    if (!validPhone(userPhone.value)) errors.push("Invalid phone number");
    if (!validZipCode(userZipCode.value)) errors.push("Invalid zip code");
    if (!validCity(userCity.value)) errors.push("Invalid city");
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
