<template>
  <div
    class="flex flex-col pt-6 pb-3 px-8 w-full rounded-2xl overflow-hidden bg-white"
  >
    <h1 class="font-heading text-xl mb-3">General Information</h1>
    <section class="flex mb-3">
      <div
        class="flex justify-center items-center w-8 h-8 border-2 border-primary bg-primary-2 rounded-lg overflow-hidden mr-4"
      >
        <base-icon
          v-if="!isFileLoaded"
          :width="18"
          :height="18"
          class="text-primary"
          ><ImageGalleryIcon
        /></base-icon>
        <img
          v-else
          :src="orgImg"
          alt="orgImg"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col min-h-full justify-between">
        <h3>Profile picture</h3>
        <div class="flex">
          <base-button class="px-1 mr-1">Upload</base-button>
          <p class="text-xs text-gray-5 self-end">
            (JPEG or .PNG, Less than 5MB)
          </p>
        </div>
      </div>
    </section>
    <section class="flex mb-3">
      <div class="flex flex-col flex-shrink-0 mr-3">
        <label for="shortName" class="mb-0.25"
          >Organization Abbreviations</label
        >
        <BaseTextInput
          v-model.trim="shortName"
          id="shortName"
          name="shortName"
          class="max-w-full h-4"
          :isError="!isValidShortName"
        />
        <p v-show="!isValidShortName" class="text-sm text-red-5 mt-0.25 ml-1.5">
          Please input organization abbreviations
        </p>
      </div>
      <div class="w-full">
        <label for="fullName" class="mb-0.25">Organization Full Name</label>
        <BaseTextInput
          v-model.trim="fullName"
          id="fullName"
          name="fullName"
          class="w-full h-4"
          :isError="!isValidFullName"
        />
        <p v-show="!isValidFullName" class="text-sm text-red-5 mt-0.25 ml-1.5">
          Please input organization full name
        </p>
      </div>
    </section>
    <section class="flex mb-3">
      <div class="flex flex-col w-40 flex-shrink-0 mr-3">
        <label for="advisor" class="mb-0.25">Organization Advisor</label>
        <BaseTextInput
          v-model.trim="advisor"
          id="advisor"
          name="advisor"
          class="max-w-full h-4"
          :isError="!isValidAdvisor"
        />
        <p v-show="!isValidAdvisor" class="text-sm text-red-5 mt-0.25 ml-1.5">
          Please input organization advisor
        </p>
      </div>
      <div class="w-full">
        <label for="faculty" class="mb-0.25">Associated Faculty</label>
        <BaseTextInput
          v-model.trim="faculty"
          id="faculty"
          name="faculty"
          class="w-full h-4"
          :isError="!isValidFaculty"
        />
        <p v-show="!isValidFaculty" class="text-sm text-red-5 mt-0.25 ml-1.5">
          Please input associated faculty
        </p>
      </div>
    </section>
    <section class="w-full">
      <label for="description" class="mb-0.25">Organization Description</label>
      <BaseExpandableTextArea
        v-model.trim="description"
        id="description"
        name="description"
        class="w-full min-text-input-height"
        :isError="!isValidDescription"
      />
      <p v-show="!isValidDescription" class="text-sm text-red-5 mt-0.25 ml-1.5">
        Please input organization description
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ImageGalleryIcon from "@/assets/ImageGallery.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import BaseExpandableTextArea from "@/commons/UI/BaseExpandableTextArea.vue";

export default defineComponent({
  name: "CreateOrgForm",
  components: {
    ImageGalleryIcon,
    BaseButton,
    BaseTextInput,
    BaseExpandableTextArea
  },
  setup() {
    const isFileLoaded = false;
    const orgImg = "https://picsum.photos/100";
    const shortName = ref("");
    const isValidShortName = false;
    const fullName = ref("");
    const isValidFullName = false;
    const advisor = ref("");
    const isValidAdvisor = false;
    const faculty = ref("");
    const isValidFaculty = false;
    const description = ref("");
    const isValidDescription = false;

    return {
      isFileLoaded,
      orgImg,
      shortName,
      isValidShortName,
      fullName,
      isValidFullName,
      advisor,
      isValidAdvisor,
      faculty,
      isValidFaculty,
      description,
      isValidDescription
    };
  }
});
</script>

<style scoped>
.min-text-input-height {
  min-height: 32px;
}
</style>
