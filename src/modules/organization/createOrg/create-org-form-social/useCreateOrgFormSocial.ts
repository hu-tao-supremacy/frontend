import { computed, reactive, Ref, ref, SetupContext, watch } from "vue";
import { OrgSocial } from "../interfaces";
import { validateEmail } from "@/commons/utils/validForm";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default function useCreateOrgFormSocial(
  initialOrgSocialValue: Ref<OrgSocial>,
  context: SetupContext<"update:modelValue"[]>
) {
  const facebook = ref(initialOrgSocialValue.value.facebook);
  const instagram = ref(initialOrgSocialValue.value.instagram);
  const line = ref(initialOrgSocialValue.value.line);
  const email = ref(initialOrgSocialValue.value.email);

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

  const orgSocial = reactive({
    facebook: facebook,
    instagram: instagram,
    line: line,
    email: email,
    isValid: hasSocialMedia
  });

  watch(orgSocial, () => {
    context.emit(UPDATE_MODEL_VALUE, orgSocial);
  });

  return { facebook, instagram, line, email, isValidEmail };
}
