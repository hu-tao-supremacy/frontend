<template>
  <div class="flex flex-col px-8 pt-3 pb-4 rounded-2xl shadow-sm bg-white">
    <h1 class="font-heading text-4xl mb-2">User Profile</h1>
    <form @submit.prevent="submitForm" class="flex flex-col">
      <section class="flex items-center mb-3">
        <!-- <UserProfile
        :hasBorder="false"
        nameInitialFontSize="text-4xl"
        :user="user"
        widthHeight="w-16 h-16"
        class="flex-shrink-0 mr-3"
      /> -->
        <div class="w-16 h-16 rounded-full flex-shrink-0 bg-primary mr-3"></div>
        <div class="flex flex-col space-y-1">
          <BaseUploadImgButton
            v-model="uploadedImgFile"
            v-model:uploadedImg="uploadedImg"
            buttonText="Change Image"
            class="w-16 h-3.75"
          />
          <p class="text-gray-5 text-xs">(JPEG or .PNG, Less than 5MB)</p>
        </div>
      </section>
      <section class="flex flex-col space-y-2 mb-4">
        <div class="flex justify-between">
          <section class="flex flex-col mr-2 w-full">
            <label for="gender" class="mb-0.25">Gender</label>
            <BaseSelect
              v-model="userGender"
              :optionNames="['M']"
              :optionValues="['Male']"
              id="gender"
              name="gender"
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
        />
        <BaseLabelAndTextInput
          v-model.trim="phoneNumber"
          inputName="phone"
          label="Phone Number"
        />
        <div class="flex space-x-2">
          <section class="flex flex-col w-21 flex-shrink-0">
            <label for="district" class="mb-0.25">District</label>
            <BaseSelect
              id="district"
              name="district"
              v-model="location"
              :isSearchable="true"
              :optionNames="['Pathumwan']"
              :optionValues="['Pathumwan']"
              class="w-full h-3.75"
              :isError="false"
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
            class="w-21 flex-shrink-0"
          />
          <BaseLabelAndTextInput
            v-model.trim="zipCode"
            inputName="zipCode"
            label="Zip Code"
            :disabled="true"
            class="w-full"
          />
        </div>
        <BaseLabelAndTextInput
          v-model.trim="address"
          inputName="address"
          label="Address"
          :isExpandableTextInput="true"
          :expandableTextInputMinHeight="54"
        />
      </section>
      <base-button
        class="w-11 h-3.75 self-end"
        type="submit"
        value="submit"
        :disabled="false"
        >Save</base-button
      >
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import UserProfile from "@/commons/UI/user-profile/UserProfile.vue";
import BaseUploadImgButton from "@/commons/UI/BaseUploadImgButton.vue";
import BaseSelect from "@/commons/UI/select/SingleNameSelect.vue";
import BaseLabelAndTextInput from "@/commons/UI/BaseLabelAndTextInput.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import { User } from "@/apollo/types";

export default defineComponent({
  name: "UserProfile",
  components: {
    // UserProfile,
    BaseUploadImgButton,
    BaseSelect,
    BaseLabelAndTextInput,
    BaseButton
  },
  setup() {
    const user = { firstName: "Pattarapon", lastName: "Kittisrisawai" } as User;
    const uploadedImg: Ref<string | null> = ref(null);
    const uploadedImgFile: Ref<Blob | null> = ref(null);
    const userGender = ref("");
    const year = ref("");
    const email = ref("");
    const phoneNumber = ref("");
    const location = ref("");
    const district = ref("");
    const province = ref("Bangkok");
    const zipCode = ref("10330");
    const address = ref("");

    function submitForm() {
      console.log("Submit");
    }

    return {
      user,
      uploadedImg,
      uploadedImgFile,
      userGender,
      year,
      email,
      phoneNumber,
      location,
      district,
      province,
      zipCode,
      address,
      submitForm
    };
  }
});
</script>
