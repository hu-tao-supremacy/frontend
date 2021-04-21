import { computed, Ref, ref, SetupContext, watch } from "vue";
import FacultyData from "@/commons/constant/faculty";
import { validateEmail, validatePhone } from "@/commons/utils/validForm";
import { parseImageFile } from "@/commons/utils/parseImage";
import { User } from "@/apollo/types";
import { SUBMIT_FORM } from "@/commons/constant";
import testData from "@/modules/test/testData";

export default function useCreateOrgForm(
  context: SetupContext<"submit-form"[]>
) {
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
      const uploadedFile = await parseImageFile(reader, uploadedImgFile.value);
      uploadedImg.value = uploadedFile;
    }
  });

  function fillOwnerAsContactPerson() {
    //Change to use API to fill user's info instead
    contactName.value = `${orgOwner.firstName} ${orgOwner.lastName}`;
    contactEmail.value = orgOwner.email;
    contactPhone.value = orgOwner.phoneNumber ? orgOwner.phoneNumber : "";
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
    context.emit(SUBMIT_FORM);
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
    uploadedImg,
    fileLoaded,
    abbreviation,
    fullName,
    advisor,
    faculty,
    facultyList,
    description,
    orgOwner,
    selectedMembers,
    isAddMemberModalShown,
    isAddMemberModalJustShown,
    searchedUsers,
    memberProfilesShown,
    contactName,
    contactEmail,
    contactPhone,
    contactLINE,
    ownerIsContactPerson,
    ownerHasPhoneNumber,
    isValidContactEmail,
    isValidContactPhone,
    facebook,
    instagram,
    line,
    email,
    isValidEmail,
    isValidForm,
    previewFile,
    toggleOwnerAsContactPerson,
    showAddMemberModal,
    hideAddMemberModal,
    searchUsers,
    modifySelectedMember,
    submitForm
  };
}
