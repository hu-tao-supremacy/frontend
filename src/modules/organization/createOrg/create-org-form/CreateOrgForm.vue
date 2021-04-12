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
    <section class="flex mb-3">
      <div class="flex flex-col flex-shrink-0 mr-3">
        <label for="shortName" class="mb-0.25"
          >Organization abbreviations</label
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
        <label for="fullName" class="mb-0.25">Organization full name</label>
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
        <label for="advisor" class="mb-0.25">Organization advisor</label>
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
        <label for="faculty" class="mb-0.25">Associated faculty</label>
        <SingleNameSelect
          id="faculty"
          name="faculty"
          v-model="faculty"
          :isSearchable="false"
          :optionNames="facultyList"
          :optionValues="facultyList"
          :placeholder="'--- Select faculty ---'"
          :isError="!isValidFaculty"
          class="w-full h-4"
        />
        <p v-show="!isValidFaculty" class="text-sm text-red-5 mt-0.25 ml-1.5">
          Please input associated faculty
        </p>
      </div>
    </section>
    <section class="w-full mb-3">
      <label for="description" class="mb-0.25">Organization description</label>
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
    <section class="flex mb-3">
      <div class="w-20 mr-6 flex-shrink-0">
        <h1 class="font-heading text-xl mb-2">Member</h1>
        <p>Organization member</p>
        <div class="flex -space-x-1 overflow-hidden">
          <span
            v-for="member in members"
            :key="member.id"
            class="flex justify-center items-center w-6 h-6 rounded-full overflow-hidden ring-2 ring-white bg-primary-3"
            ><LazyImage
              v-if="member.img"
              :width="50"
              :height="50"
              alt="will change to api"
              :url="member.img"
              placeholder="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
              class="object-cover w-full h-full"
            />
            <p v-else class="font-heading text-lg text-primary">
              {{ showMemberName(member.firstName, member.lastName) }}
            </p>
          </span>
          <span
            @click="addMember"
            class="flex justify-center items-center w-6 h-6 rounded-full overflow-hidden ring-2 ring-white bg-primary-3 cursor-pointer"
            ><base-icon :width="24" :height="24" class="text-primary"
              ><PlusIcon /></base-icon
          ></span>
        </div>
      </div>
      <div class="w-full">
        <h1 class="font-heading text-xl mb-2">Contact Person</h1>
        <section class="flex mb-1">
          <div class="w-30 mr-1 flex-shrink-0">
            <label for="contactName" class="mb-0.25">Full name</label>
            <BaseTextInput
              v-model.trim="contactName"
              id="contactName"
              name="contactName"
              class="w-full h-4"
              :isError="!isValidContactName"
            />
            <p
              v-show="!isValidContactName"
              class="text-sm text-red-5 mt-0.25 ml-1.5"
            >
              Please input contact person full name
            </p>
          </div>
          <div class="w-full">
            <label for="contactEmail" class="mb-0.25">Email</label>
            <BaseTextInput
              v-model.trim="contactEmail"
              id="contactEmail"
              name="contactEmail"
              class="w-full h-4"
              :isError="!isValidContactEmail"
            />
            <p
              v-show="!isValidContactEmail"
              class="text-sm text-red-5 mt-0.25 ml-1.5"
            >
              Please input contact email
            </p>
          </div>
        </section>
        <section class="flex">
          <div class="w-30 mr-1 flex-shrink-0">
            <label for="contactPhone" class="mb-0.25">Phone number</label>
            <BaseTextInput
              v-model.trim="contactPhone"
              id="contactPhone"
              name="contactPhone"
              class="w-full h-4"
              :isError="!isValidContactPhone"
            />
            <p
              v-show="!isValidContactPhone"
              class="text-sm text-red-5 mt-0.25 ml-1.5"
            >
              Please input contact phone number
            </p>
          </div>
          <div class="w-full">
            <label for="contactEmail" class="mb-0.25">Line</label>
            <BaseTextInput
              v-model.trim="contactLINE"
              id="contactLINE"
              name="contactLINE"
              class="w-full h-4"
            />
          </div>
        </section>
      </div>
    </section>
    <section class="mb-6">
      <h1 class="font-heading text-xl mb-2">Social Media</h1>
      <div class="flex mb-1">
        <div class="w-30 flex-shrink-0 mr-4">
          <label for="facebook" class="mb-0.25">Facebook page</label>
          <BaseTextInput
            v-model.trim="facebook"
            id="facebook"
            name="facebook"
            class="w-full h-4"
          />
        </div>
        <div class="w-30 flex-shrink-0">
          <label for="instagram" class="mb-0.25">Instagram</label>
          <BaseTextInput
            v-model.trim="instagram"
            id="instagram"
            name="instagram"
            class="w-full h-4"
          />
        </div>
      </div>
      <div class="flex">
        <div class="w-30 flex-shrink-0 mr-4">
          <label for="line" class="mb-0.25">Line official account</label>
          <BaseTextInput
            v-model.trim="line"
            id="line"
            name="line"
            class="w-full h-4"
          />
        </div>
        <div class="w-30 flex-shrink-0">
          <label for="email" class="mb-0.25">Organization email</label>
          <BaseTextInput
            v-model.trim="email"
            id="email"
            name="email"
            class="w-full h-4"
          />
        </div>
      </div>
    </section>
    <base-button
      :disabled="!isValidForm"
      @click="createOrg"
      class="px-2 py-0.5 self-end"
      >Create Organization</base-button
    >
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import ImageGalleryIcon from "@/assets/ImageGallery.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import BaseExpandableTextArea from "@/commons/UI/BaseExpandableTextArea.vue";
import SingleNameSelect from "@/commons/UI/select/SingleNameSelect.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import PlusIcon from "@/assets/Plus.vue";
import { parseImageFile } from "@/commons/utils/parseImage";
import FacultyData from "@/commons/constant/faculty";

export default defineComponent({
  name: "CreateOrgForm",
  components: {
    ImageGalleryIcon,
    BaseButton,
    BaseTextInput,
    BaseExpandableTextArea,
    SingleNameSelect,
    LazyImage,
    PlusIcon
  },
  setup() {
    const uploadedImgFile = ref<Blob | null>(null);
    const uploadedImg = ref<string | null>(null);
    const reader = new FileReader();
    const shortName = ref("");
    const isValidShortName = false;
    const fullName = ref("");
    const isValidFullName = false;
    const advisor = ref("");
    const isValidAdvisor = false;
    const faculty = ref("");
    const facultyList = FacultyData.map(fac => fac.name);
    const isValidFaculty = false;
    const description = ref("");
    const isValidDescription = false;
    const members = [
      {
        id: 1,
        firstName: "Adam",
        lastName: "Smith",
        img: "https://picsum.photos/101"
      },
      {
        id: 2,
        firstName: "Ben",
        lastName: "Foss",
        img: "https://picsum.photos/102"
      },
      { id: 3, firstName: "Kark", lastName: "Titanium", img: null }
    ];
    const contactName = ref("");
    const isValidContactName = false;
    const contactEmail = ref("");
    const isValidContactEmail = false;
    const contactPhone = ref("");
    const isValidContactPhone = false;
    const contactLINE = ref("");
    const facebook = ref("");
    const instagram = ref("");
    const line = ref("");
    const email = ref("");

    const isValidForm = computed(() => {
      return isValidFullName;
    });

    async function previewFile(event: Event) {
      event.preventDefault();
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file?.type.match("image.*")) {
        uploadedImgFile.value = file;
      }
    }

    const fileLoaded = computed(() => {
      return !!uploadedImg.value;
    });

    watch(uploadedImgFile, async () => {
      if (uploadedImgFile.value !== null) {
        const uploadedFile = await parseImageFile(
          reader,
          uploadedImgFile.value
        );
        uploadedImg.value = uploadedFile;
      }
    });

    function showMemberName(firstName: string, lastName: string) {
      return firstName.charAt(0) + lastName.charAt(0);
    }

    function addMember() {
      //Do something to add member
      console.log("Add member");
    }

    function createOrg() {
      if (!isValidForm.value) return;
      //Send information to API to create org
      console.log("Create org");
    }

    return {
      fileLoaded,
      uploadedImg,
      shortName,
      isValidShortName,
      fullName,
      isValidFullName,
      advisor,
      isValidAdvisor,
      faculty,
      isValidFaculty,
      description,
      isValidDescription,
      members,
      contactName,
      isValidContactName,
      contactEmail,
      isValidContactEmail,
      contactPhone,
      isValidContactPhone,
      contactLINE,
      facebook,
      instagram,
      line,
      email,
      showMemberName,
      addMember,
      createOrg,
      isValidForm,
      previewFile,
      facultyList
    };
  }
});
</script>

<style scoped>
.min-text-input-height {
  min-height: 32px;
}
</style>
