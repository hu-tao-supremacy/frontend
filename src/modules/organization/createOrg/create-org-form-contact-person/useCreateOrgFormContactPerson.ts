import { computed, reactive, Ref, ref, SetupContext, watch } from "vue";
import { validateEmail, validatePhone } from "@/commons/utils/validForm";
import { OrgContactPerson } from "../interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import { User } from "@/apollo/types";

export default function useCreateOrgFormContactPerson(
  context: SetupContext<"update:modelValue"[]>,
  initialContactPersonValue: Ref<OrgContactPerson>,
  orgOwner?: Ref<User | undefined>
) {
  const contactName = ref(initialContactPersonValue.value.name);
  const contactEmail = ref(initialContactPersonValue.value.email);
  const contactPhone = ref(initialContactPersonValue.value.phone);
  const contactLINE = ref(initialContactPersonValue.value.line);
  const ownerIsContactPerson = ref(initialContactPersonValue.value.isValid);

  //Check with API
  const ownerHasPhoneNumber = computed(() => {
    return !!orgOwner?.value?.phoneNumber;
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

  function fillOwnerAsContactPerson() {
    //Change to use API to fill user's info instead
    contactName.value = `${orgOwner?.value?.firstName} ${orgOwner?.value?.lastName}`;
    if (orgOwner?.value) contactEmail.value = orgOwner.value.email;
    contactPhone.value = orgOwner?.value?.phoneNumber
      ? orgOwner.value.phoneNumber
      : "";
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

  const orgContactPerson = reactive({
    name: contactName,
    email: contactEmail,
    phone: contactPhone,
    line: contactLINE,
    isValid: isValidContactPerson
  });

  watch(
    () => orgContactPerson,
    () => {
      context.emit(UPDATE_MODEL_VALUE, orgContactPerson);
    },
    { deep: true }
  );

  return {
    contactName,
    contactEmail,
    contactPhone,
    contactLINE,
    ownerIsContactPerson,
    ownerHasPhoneNumber,
    isValidContactEmail,
    isValidContactPhone,
    toggleOwnerAsContactPerson
  };
}
