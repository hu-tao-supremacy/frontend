<template>
  <base-modal @close="closeModal">
    <div class="flex flex-col">
      <section class="mb-2">
        <h1 class="font-heading text-3xl">Additional Information</h1>
        <p class="text-gray-5">
          We would like to know more about you!
        </p>
      </section>
      <form @submit.prevent="submitForm">
        <section class="mb-2">
          <h2 class="mb-1">Profile Picture</h2>
          <div class="flex items-center">
            <div
              class="w-8 h-8 rounded-full border-2 border-primary bg-primary-2 flex items-center justify-center mr-3 overflow-hidden"
            >
              <base-icon
                v-if="!fileLoaded"
                width="24"
                height="24"
                class="text-primary"
                ><ImageGalleryIcon
              /></base-icon>
              <img
                v-else
                :src="uploadedImg"
                alt=""
                class="object-cover w-full h-full"
              />
            </div>
            <div>
              <base-button class="button-height px-1 mb-0.25"
                ><label for="fileLoader">Upload</label></base-button
              >
              <input
                id="fileLoader"
                name="profileImg"
                type="file"
                class="hidden"
                accept="image/*"
                ref="fileInput"
                :onchange="previewFile"
              />
              <p class="text-gray-5 text-xs">(e.g. JPEG, .PNG or .GIF)</p>
            </div>
          </div>
        </section>
        <section class="mb-2">
          <label for="email" class="mb-0.25">Personal Email</label>
          <BaseTextInput
            v-model.trim="userEmail"
            id="email"
            name="email"
            type="email"
            class="w-full h-3.5"
            :isError="!isValidEmail"
          />
          <p v-if="!isValidEmail" class="text-sm text-red-5 mt-0.25 ml-1.5">
            Please input valid email
          </p>
        </section>
        <section class="mb-2">
          <label for="phone" class="mb-0.25">Phone Number</label>
          <BaseTextInput
            v-model.trim="userPhone"
            id="phone"
            name="phone"
            class="w-full h-3.5"
            :isError="!isValidPhone"
          />
          <p v-if="!isValidPhone" class="text-sm text-red-5 mt-0.25 ml-1.5">
            Please input phone number without '-'
          </p>
        </section>
        <section class="flex space-between mb-2">
          <div class="w-21 mr-2 flex-shrink-0">
            <label for="district" class="mb-0.25">District</label>
            <BaseSelect
              id="district"
              name="district"
              v-model="userLocation"
              :isSearchable="true"
              :optionNames="districtOptionNames"
              :optionValues="districtOptionValues"
              class="w-full h-3.5"
              :isError="!isValidLocation"
            />
            <p
              v-if="!isValidLocation"
              class="text-sm text-red-5 mt-0.25 ml-1.5"
            >
              Please select district
            </p>
          </div>
          <div class="w-21 mr-2 flex-shrink-0">
            <label for="province" class="mb-0.25">Province</label>
            <BaseTextInput
              v-model="userProvince"
              id="province"
              name="province"
              class="w-full h-3.5"
              :disabled="true"
              placeholder="autofilled"
            />
          </div>
          <div class="">
            <label for="zipCode" class="mb-0.25">Zip Code</label>
            <BaseTextInput
              v-model="userZipCode"
              id="zipCode"
              name="zipCode"
              class="w-full h-3.5"
              :disabled="true"
              placeholder="auto"
            />
          </div>
        </section>
        <section class="mb-4">
          <label for="address" class="mb-0.25">Address</label>
          <BaseTextArea
            v-model.trim="userAddress"
            id="address"
            name="address"
            :rows="3"
            class="w-full resize-none"
            :isError="!isValidAddress"
          />
          <p v-if="!isValidAddress" class="text-sm text-red-5 mt-0.25 ml-1.5">
            Please input address
          </p>
        </section>
        <base-button
          class="button-height w-20 self-center"
          type="submit"
          value="submit"
          :disabled="!isValidForm"
          >Sign up</base-button
        >
      </form>
    </div>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseModal from "@/commons/UI/BaseModal.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import BaseTextArea from "@/commons/UI/BaseTextArea.vue";
import BaseSelect from "@/commons/UI/select/SingleNameSelect.vue";
import ImageGalleryIcon from "@/assets/ImageGallery.vue";
import useModalAdditionalInfo from "./useModalAdditionalInfo";
import { CLOSE_MODAL } from "@/commons/constant";

export default defineComponent({
  name: "ModalAdditionalInfo",
  components: {
    BaseModal,
    BaseButton,
    BaseTextInput,
    BaseTextArea,
    BaseSelect,
    ImageGalleryIcon
  },
  emits: [CLOSE_MODAL],
  setup(_, context) {
    const {
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
    } = useModalAdditionalInfo(context);

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
});
</script>

<style scoped>
.button-height {
  height: 30px;
}
</style>
