import { computed, ref } from "vue";
import { testData } from "@/modules/test/testData";
import { useRoute, useRouter } from "vue-router";
import useUser from "@/modules/authentication";
import { useUpdateUserInfo } from "./api";
import { UpdateUserInput } from "@/apollo/types";

const ADDITIONAL_INFO = "additionInfo";
const INTEREST = "interest";

const useSignup = () => {
  const test = testData;
  const currentModal = ref(ADDITIONAL_INFO);
  const router = useRouter();
  const route = useRoute();
  const { logout, refetch: refetchUser } = useUser();
  const {
    updateUser,
    onUpdateUserDone,
    onUpdateUserError
  } = useUpdateUserInfo();

  function toggleModal(modal: string) {
    currentModal.value = modal;
  }

  const showAdditionalInfoModal = computed(() => {
    return currentModal.value === ADDITIONAL_INFO;
  });

  const showInterestModal = computed(() => {
    return currentModal.value === INTEREST;
  });

  const finishModal = () => {
    toggleModal("");
    router.push(route.path as string);
  };

  const cancelSignup = () => {
    logout();
    finishModal();
  };

  const updateInfo = (data: UpdateUserInput) => {
    updateUser({ input: data });
  };

  onUpdateUserDone(() => {
    refetchUser();
    toggleModal("interest");
  });

  onUpdateUserError(cancelSignup);

  return {
    toggleModal,
    showAdditionalInfoModal,
    test,
    showInterestModal,
    finishModal,
    cancelSignup,
    updateInfo
  };
};

export default useSignup;
