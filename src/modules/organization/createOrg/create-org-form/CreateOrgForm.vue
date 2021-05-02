<template>
  <form
    @submit.prevent="submitForm"
    class="flex flex-col pt-6 pb-3 px-8 w-full rounded-2xl bg-white"
  >
    <h1 class="font-heading text-xl mb-3">General Information</h1>
    <section class="flex mb-3">
      <div
        class="flex justify-center items-center w-8 h-8 border-2 border-primary bg-primary-2 rounded-lg overflow-hidden mr-4"
      >
        <base-icon
          v-if="!fileLoaded"
          :width="18"
          :height="18"
          class="text-primary"
          ><ImageGalleryIcon
        /></base-icon>
        <img
          v-else
          :src="uploadedImg"
          alt="uploadedImg"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col min-h-full justify-between">
        <h3>Profile picture</h3>
        <div class="flex">
          <base-button class="mr-1"
            ><label class="px-1" for="fileLoader">Upload</label></base-button
          >
          <input
            id="fileLoader"
            name="profileImg"
            type="file"
            class="hidden"
            accept="image/*"
            :onchange="previewFile"
          />
          <p class="text-xs text-gray-5 self-end">
            (JPEG or .PNG, Less than 5MB)
          </p>
        </div>
      </div>
    </section>
    <OrgDetail v-model="orgDetail" />
    <section class="flex mb-4 relative">
      <OrgMember
        v-if="orgOwner"
        v-model="selectedMembers"
        :orgOwner="orgOwner"
      />
      <OrgContactPerson
        v-if="orgOwner"
        v-model="orgContactPerson"
        :orgOwner="orgOwner"
      />
    </section>
    <OrgSocial v-model="orgSocial" />
    <base-button
      type="submit"
      :disabled="!isValidForm"
      class="px-2 py-0.5 self-end"
      >Create Organization</base-button
    >
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageGalleryIcon from "@/assets/ImageGallery.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import OrgDetail from "../create-org-form-organization-detail/CreateOrgFormOrganizationDetail.vue";
import OrgMember from "../create-org-form-member/CreateOrgFormMember.vue";
import OrgContactPerson from "../create-org-form-contact-person/CreateOrgFormContactPerson.vue";
import OrgSocial from "../create-org-form-social/CreateOrgFormSocial.vue";
import useCreateOrgForm from "./useCreateOrgForm";
import { SUBMIT_FORM } from "@/commons/constant";

export default defineComponent({
  name: "CreateOrgForm",
  components: {
    ImageGalleryIcon,
    BaseButton,
    OrgDetail,
    OrgMember,
    OrgContactPerson,
    OrgSocial
  },
  emits: [SUBMIT_FORM],
  setup(_, context) {
    const {
      uploadedImg,
      fileLoaded,
      orgDetail,
      orgOwner,
      selectedMembers,
      orgContactPerson,
      orgSocial,
      isValidForm,
      previewFile,
      submitForm
    } = useCreateOrgForm(context);

    return {
      uploadedImg,
      fileLoaded,
      orgDetail,
      orgOwner,
      selectedMembers,
      orgContactPerson,
      orgSocial,
      isValidForm,
      previewFile,
      submitForm
    };
  }
});
</script>
