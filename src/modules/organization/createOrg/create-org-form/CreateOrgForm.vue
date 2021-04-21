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
    <section class="flex mb-3">
      <BaseLabelAndTextInput
        v-model="abbreviation"
        inputName="abbreviation"
        label="Organization abbreviations"
        :isRequired="true"
        class="w-24 flex-shrink-0 mr-3"
      />
      <BaseLabelAndTextInput
        v-model="fullName"
        inputName="fullName"
        label="Organization full name"
        :isRequired="true"
        class="w-full"
      />
    </section>
    <section class="flex mb-3">
      <BaseLabelAndTextInput
        v-model="advisor"
        inputName="advisor"
        label="Organization advisor"
        :isRequired="true"
        class="w-40 flex-shrink-0 mr-3"
      />
      <div class="w-full">
        <label for="faculty" class="mb-0.25"
          >Associated faculty <span class="text-red-5">*</span></label
        >
        <SingleNameSelect
          id="faculty"
          name="faculty"
          v-model="faculty"
          :isSearchable="false"
          :optionNames="facultyList"
          :optionValues="facultyList"
          :placeholder="'——— Select faculty ———'"
          class="w-full h-4"
        />
      </div>
    </section>
    <section class="w-full mb-4">
      <BaseLabelAndTextInput
        v-model="description"
        inputName="description"
        label="Organization description"
        :isExpandableTextInput="true"
        :expandableTextInputMinHeight="'30px'"
        class="w-full"
      />
    </section>
    <section class="flex mb-4 relative">
      <div class="w-20 mr-6 flex-shrink-0">
        <h1 class="font-heading text-xl mb-2">Member</h1>
        <p>Organization member</p>
        <div class="flex -space-x-1 overflow-hidden">
          <UserProfile
            v-for="member in memberProfilesShown"
            :key="member.id"
            :user="member"
            :hasBorder="false"
            widthHeight="w-6 h-6"
            class="ring-2 ring-white"
          />
          <span
            @click="showAddMemberModal"
            class="flex justify-center items-center w-6 h-6 rounded-full overflow-hidden ring-2 ring-white bg-primary-3 cursor-pointer"
            ><base-icon :width="24" :height="24" class="text-primary"
              ><PlusIcon /></base-icon
          ></span>
        </div>
      </div>
      <AddMemberModal
        v-show="isAddMemberModalShown"
        v-click-outside="hideAddMemberModal"
        @close-modal="hideAddMemberModal"
        @search="searchUsers"
        @select-member="modifySelectedMember"
        :searchedUsers="searchedUsers"
        :selectedMembers="selectedMembers"
        :orgOwner="orgOwner"
        class="absolute left-0 top-15 z-10"
      />
      <div class="w-full">
        <section class="flex mb-2 items-center">
          <h1 class="font-heading text-xl mr-4">Contact Person</h1>
          <button
            @click="toggleOwnerAsContactPerson"
            type="button"
            class="flex items-center justify-center w-2 h-2 rounded-sm overflow-hidden focus:outline-none mr-1"
            :class="{
              'bg-gray-3 hover:bg-green-1': !ownerIsContactPerson,
              'bg-green-1 text-green-6': ownerIsContactPerson
            }"
          >
            <base-icon v-show="ownerIsContactPerson" :width="16" :height="16"
              ><CheckIcon
            /></base-icon>
          </button>
          <p class="text-sm">I am the contact person</p>
        </section>
        <section class="flex mb-1">
          <BaseLabelAndTextInput
            v-model="contactName"
            inputName="contactName"
            label="Full name"
            :isRequired="true"
            :disabled="ownerIsContactPerson"
            class="w-30 mr-1 flex-shrink-0"
          />
          <BaseLabelAndTextInput
            v-model="contactEmail"
            inputName="contactEmail"
            label="Email"
            :isRequired="true"
            :isError="!isValidContactEmail"
            :disabled="ownerIsContactPerson"
            errorText="Please input valid email with @"
            class="w-full"
          />
        </section>
        <section class="flex">
          <BaseLabelAndTextInput
            v-model="contactPhone"
            inputName="contactPhone"
            label="Phone number"
            :isRequired="true"
            :isError="!isValidContactPhone"
            :disabled="ownerIsContactPerson && ownerHasPhoneNumber"
            errorText="Please input phone number without '-'"
            class="w-30 mr-1 flex-shrink-0"
          />
          <BaseLabelAndTextInput
            v-model="contactLINE"
            inputName="contactLINE"
            label="line ID"
            class="w-full"
          />
        </section>
      </div>
    </section>
    <section class="mb-6">
      <div class="flex items-center mb-2">
        <h1 class="font-heading text-xl mr-2">Social Media</h1>
        <base-icon :width="16" :height="16" class="mr-1"
          ><InfoIcon
        /></base-icon>
        <p class="text-xs">Please fill in at least one</p>
      </div>
      <div class="flex mb-1">
        <BaseLabelAndTextInput
          v-model="facebook"
          inputName="facebook"
          label="Facebook Page"
          class="w-30 flex-shrink-0 mr-4"
        />
        <BaseLabelAndTextInput
          v-model="instagram"
          inputName="instagram"
          label="Instagram"
          class="w-30 flex-shrink-0"
        />
      </div>
      <div class="flex">
        <BaseLabelAndTextInput
          v-model="line"
          inputName="line"
          label="line Official Account"
          class="w-30 flex-shrink-0 mr-4"
        />
        <BaseLabelAndTextInput
          v-model="email"
          inputName="email"
          label="Organization email"
          :isError="!isValidEmail"
          errorText="Please input valid email with @"
          class="w-30 flex-shrink-0"
        />
      </div>
    </section>
    <base-button
      type="submit"
      :disabled="!isValidForm"
      class="px-2 py-0.5 self-end"
      >Create Organization</base-button
    >
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref, watch } from "vue";
import ImageGalleryIcon from "@/assets/ImageGallery.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import SingleNameSelect from "@/commons/UI/select/SingleNameSelect.vue";
import BaseLabelAndTextInput from "@/commons/UI/BaseLabelAndTextInput.vue";
import UserProfile from "@/commons/UI/user-profile/UserProfile.vue";
import AddMemberModal from "../add-member-modal/AddMemberModal.vue";
import PlusIcon from "@/assets/Plus.vue";
import CheckIcon from "@/assets/Check.vue";
import InfoIcon from "@/assets/Info.vue";
import { parseImageFile } from "@/commons/utils/parseImage";
import { validateEmail, validatePhone } from "@/commons/utils/validForm";
import FacultyData from "@/commons/constant/faculty";
import { User, Gender } from "@/apollo/types";
import testData from "@/modules/test/testData";

export default defineComponent({
  name: "CreateOrgForm",
  components: {
    ImageGalleryIcon,
    BaseButton,
    SingleNameSelect,
    BaseLabelAndTextInput,
    UserProfile,
    AddMemberModal,
    PlusIcon,
    CheckIcon,
    InfoIcon
  },
  setup() {
    const uploadedImgFile = ref<Blob | null>(null);
    const uploadedImg = ref<string | null>(null);
    const reader = new FileReader();

    const abbreviation = ref("");
    const fullName = ref("");
    const advisor = ref("");
    const faculty = ref("");
    const facultyList = FacultyData.map(faculty => faculty.name);
    const description = ref("");

    //Get from API
    const orgOwner: User = testData.userPoom;
    //Initiate with org owner as single member
    const selectedMembers: Ref<User[]> = ref([orgOwner]);
    const isAddMemberModalShown = ref(false);
    //Trick variable to bypass hiding modal from v-click-outside of AddMemberModal component
    const isAddMemberModalJustShown = ref(false);
    const searchedUsers: Ref<User[]> = ref([]);

    const contactName = ref("");
    const contactEmail = ref("");
    const contactPhone = ref("");
    const contactLINE = ref("");
    const ownerIsContactPerson = ref(false);

    const facebook = ref("");
    const instagram = ref("");
    const line = ref("");
    const email = ref("");

    const memberProfilesShown = computed(() => {
      if (selectedMembers.value.length <= 3) return selectedMembers.value;
      return selectedMembers.value.slice(0, 3);
    });

    //Check with API
    const ownerHasPhoneNumber = computed(() => {
      return !!orgOwner.phoneNumber;
    });

    const isValidOrgDetail = computed(() => {
      return (
        abbreviation.value !== "" &&
        fullName.value !== "" &&
        advisor.value !== "" &&
        faculty.value !== ""
      );
    });

    const isValidContactEmail = computed(() => {
      return validateEmail(contactEmail.value);
    });

    const isValidContactPhone = computed(() => {
      return validatePhone(contactPhone.value);
    });

    const isValidContactPerson = computed(() => {
      return (
        contactName.value !== "" &&
        contactEmail.value !== "" &&
        contactPhone.value !== "" &&
        isValidContactEmail.value &&
        isValidContactPhone.value
      );
    });

    const isValidEmail = computed(() => {
      return validateEmail(email.value);
    });

    const hasSocialMedia = computed(() => {
      return (
        facebook.value !== "" ||
        instagram.value !== "" ||
        line.value !== "" ||
        (email.value !== "" && isValidEmail)
      );
    });

    const isValidForm = computed(() => {
      return (
        isValidOrgDetail.value &&
        isValidContactPerson.value &&
        hasSocialMedia.value
      );
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

    function fillOwnerAsContactPerson() {
      //Change to use API to fill user's info instead
      contactName.value = `${orgOwner.firstName} ${orgOwner.lastName}`;
      contactEmail.value = orgOwner.email;
      contactPhone.value = orgOwner.phoneNumber ? orgOwner.phoneNumber : "";
      contactLINE.value = "KittyKun";
    }

    function clearContactPerson() {
      contactName.value = "";
      contactEmail.value = "";
      contactPhone.value = "";
      contactLINE.value = "";
    }

    function toggleOwnerAsContactPerson() {
      if (ownerIsContactPerson.value) {
        ownerIsContactPerson.value = false;
        clearContactPerson();
      } else {
        ownerIsContactPerson.value = true;
        fillOwnerAsContactPerson();
      }
    }

    function showAddMemberModal() {
      isAddMemberModalShown.value = true;
      isAddMemberModalJustShown.value = true;
    }

    function hideAddMemberModal() {
      if (isAddMemberModalJustShown.value) {
        isAddMemberModalJustShown.value = false;
        return;
      }
      isAddMemberModalShown.value = false;
    }

    function searchUsers(value: string) {
      //Search users with API and change searchedUsers list
      console.log(value);
      //Dummy data
      const testUser = testData.user;
      searchedUsers.value = [testUser, testUser];
    }

    function addMember(user: User) {
      selectedMembers.value.push(user);
    }

    function removeMember(index: number) {
      selectedMembers.value.splice(index, 1);
    }

    function modifySelectedMember(user: User) {
      const memberIndex = selectedMembers.value.findIndex(
        member => member.id === user.id
      );
      if (memberIndex === -1) addMember(user);
      else removeMember(memberIndex);
    }

    function submitForm() {
      //Connect with API
      const org = {
        name: fullName.value,
        abbreviation: abbreviation.value,
        advisor: advisor.value,
        associatedFaculty: faculty.value,
        description: description.value,
        facebookPage: facebook.value,
        instagram: instagram.value,
        lineOfficialAccount: line.value,
        email: email.value,
        contactFullName: contactName.value,
        contactEmail: contactEmail.value,
        contactPhoneNumber: contactPhone.value,
        contactLineId: contactLINE.value,
        profilePicture: uploadedImg.value
      };
      console.log("submit org", org);
      const memberEmails = selectedMembers.value.map(member => member.email);
      console.log("submit members", memberEmails);
    }

    return {
      fileLoaded,
      uploadedImg,
      abbreviation,
      fullName,
      advisor,
      faculty,
      description,
      memberProfilesShown,
      contactName,
      contactEmail,
      isValidContactEmail,
      contactPhone,
      isValidContactPhone,
      contactLINE,
      facebook,
      instagram,
      line,
      email,
      isValidForm,
      previewFile,
      facultyList,
      ownerIsContactPerson,
      toggleOwnerAsContactPerson,
      selectedMembers,
      searchedUsers,
      isAddMemberModalShown,
      showAddMemberModal,
      hideAddMemberModal,
      searchUsers,
      modifySelectedMember,
      orgOwner,
      isValidEmail,
      submitForm,
      ownerHasPhoneNumber
    };
  }
});
</script>
