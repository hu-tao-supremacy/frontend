<template>
  <div class="flex flex-col px-8 pt-3 pb-4 rounded-2xl shadow-sm bg-white">
    <h1 class="font-heading text-4xl mb-2">User Profile</h1>
    <form @submit.prevent="submitForm" class="flex flex-col">
      <section class="flex items-center mb-3">
        <div
          class="w-16 h-16 rounded-full bg-primary-2 flex items-center justify-center overflow-hidden flex-shrink-0 mr-3"
          :class="{ 'border-2 border-primary': !fileLoaded }"
        >
          <base-icon
            v-if="!fileLoaded"
            width="48"
            height="48"
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
        <div class="flex flex-col space-y-1">
          <div>
            <BaseUploadImgButton
              v-model="uploadedImgFile"
              v-model:uploadedImg="uploadedImg"
              buttonText="Change Image"
              class="w-16 h-3.75"
            />
            <p class="text-gray-5 text-xs">(JPEG or .PNG, Less than 5MB)</p>
          </div>
          <p v-show="!isValidImageSize" class="text-sm text-red-5 mt-0.25">
            Image size is too large
          </p>
        </div>
      </section>
      <section class="flex flex-col space-y-2 mb-4">
        <div class="flex justify-between">
          <section class="flex flex-col mr-2 w-full">
            <label for="gender" class="mb-0.25">Gender</label>
            <BaseSelect
              id="gender"
              name="gender"
              v-model="gender"
              :initialDisplayedName="genderNameInitialValue"
              :optionNames="genderNames"
              :optionValues="genderValues"
              class="h-3.75"
            />
          </section>
          <BaseLabelAndTextInput
            v-model.trim="year"
            inputName="year"
            textInputType="number"
            label="Year"
          />
        </div>
        <BaseLabelAndTextInput
          v-model.trim="email"
          inputName="email"
          label="Personal Email"
          :isError="!isValidEmail"
          errorText="Please input valid email"
        />
        <BaseLabelAndTextInput
          v-model.trim="phoneNumber"
          inputName="phone"
          label="Phone Number"
          :isError="!isValidPhone"
          errorText="Please input phone number without '-'"
        />
        <div class="flex space-x-2">
          <section class="flex flex-col w-21 flex-shrink-0">
            <label for="district" class="mb-0.25">District</label>
            <BaseSelect
              id="district"
              name="district"
              v-model="location"
              :initialDisplayedName="district"
              :isSearchable="true"
              :optionNames="districtOptionNames"
              :optionValues="districtOptionValues"
              :isError="!isValidLocation"
              class="w-full h-3.75"
            />
            <p v-show="false" class="text-sm text-red-5 mt-0.25 ml-1.5">
              Please select district
            </p>
          </section>
          <BaseLabelAndTextInput
            v-model.trim="province"
            inputName="province"
            label="Province"
            :disabled="true"
            placeholder="autofilled"
            class="w-21 flex-shrink-0"
          />
          <BaseLabelAndTextInput
            v-model.trim="zipCode"
            inputName="zipCode"
            label="Zip Code"
            :disabled="true"
            placeholder="auto"
            class="w-full"
          />
        </div>
        <BaseLabelAndTextInput
          v-model.trim="address"
          inputName="address"
          label="Address"
          :isExpandableTextInput="true"
          expandableTextInputMinHeight="54px"
        />
      </section>
      <base-button
        class="w-11 h-3.75 self-end"
        type="submit"
        value="submit"
        :disabled="!isValidForm"
        >Save</base-button
      >
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseUploadImgButton from "@/commons/UI/BaseUploadImgButton.vue";
import BaseSelect from "@/commons/UI/select/SingleNameSelect.vue";
import BaseLabelAndTextInput from "@/commons/UI/BaseLabelAndTextInput.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import ImageGalleryIcon from "@/assets/ImageGallery.vue";
import { SUBMIT_FORM } from "@/commons/constant";
import useUserProfile from "./useUserProfile";

export default defineComponent({
  name: "UserProfile",
  components: {
    BaseUploadImgButton,
    BaseSelect,
    BaseLabelAndTextInput,
    BaseButton,
    ImageGalleryIcon
  },
  emits: [SUBMIT_FORM],
  setup(_, context) {
    const {
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
      submitForm,
      isValidImageSize
    } = useUserProfile(context);

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
      submitForm,
      isValidImageSize
    };
  }
});
</script>
