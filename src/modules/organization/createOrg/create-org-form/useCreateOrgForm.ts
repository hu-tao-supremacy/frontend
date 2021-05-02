import { computed, Ref, ref, SetupContext, watch } from "vue";
import { parseImageFile } from "@/commons/utils/parseImage";
import { GetCurrentUserInfoQuery, User } from "@/apollo/types";
import { SUBMIT_FORM } from "@/commons/constant";
import { useAddMemberToOrg, useCreateOrganization, useUserInfo } from "../api";
import { useResult } from "@vue/apollo-composable";

export default function useCreateOrgForm(
  context: SetupContext<"submit-form"[]>
) {
  const uploadedImgFile = ref<Blob | null>(null);
  const uploadedImg = ref<string | null>(null);
  const reader = new FileReader();

  const orgDetail = ref({
    abbreviation: "",
    fullName: "",
    advisor: "",
    faculty: "",
    description: "",
    isValid: ""
  });

  const {
    createOrganization,
    onDone: onCreateOrgDone
  } = useCreateOrganization();
  const { addMember } = useAddMemberToOrg();
  const selectedMembers = ref<GetCurrentUserInfoQuery["currentUser"][]>([]);
  const { result: userInfo } = useUserInfo();
  const orgOwner = useResult(userInfo, null, data => data.currentUser);
  watch(orgOwner, () => {
    if (orgOwner.value) {
      selectedMembers.value.push(orgOwner.value);
    }
  });

  const orgContactPerson = ref({
    name: "",
    email: "",
    phone: "",
    line: "",
    isValid: false
  });

  const orgSocial = ref({
    facebook: "",
    instagram: "",
    line: "",
    email: "",
    isValid: false
  });

  const isValidForm = computed(() => {
    return (
      orgDetail.value.isValid &&
      orgContactPerson.value.isValid &&
      orgSocial.value.isValid
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

  function submitForm() {
    const org = {
      name: orgDetail.value.fullName,
      abbreviation: orgDetail.value.abbreviation,
      advisor: orgDetail.value.advisor,
      associatedFaculty: orgDetail.value.faculty,
      description: orgDetail.value.description,
      facebookPage: orgSocial.value.facebook,
      instagram: orgSocial.value.instagram,
      lineOfficialAccount: orgSocial.value.line,
      email: orgSocial.value.email,
      contactFullName: orgContactPerson.value.name,
      contactEmail: orgContactPerson.value.email,
      contactPhoneNumber: orgContactPerson.value.phone,
      contactLineId: orgContactPerson.value.line,
      profilePicture: uploadedImg.value
    };
    createOrganization({ input: org });
  }

  onCreateOrgDone(result => {
    const memberEmails = selectedMembers.value.map(member => member.email);
    addMember({
      input: {
        organizationId: result.data?.createOrganization.id as number,
        emails: memberEmails
      }
    });
    context.emit(SUBMIT_FORM);
  });

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
