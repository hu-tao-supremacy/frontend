import { computed, ref } from "vue";
import { testData } from "@/modules/test/testData";
import { useRoute, useRouter } from "vue-router";
import useUser from "@/modules/authentication";
import { useUpdateUserInfo } from "./api";
import { UpdateUserInput } from "@/apollo/types";

const ADDITIONAL_INFO = "additionInfo";
const INTEREST = "interest";
const INTERESTED_EVENTS = "interested_events";

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

  const showInterestedEventsModal = computed(() => {
    return currentModal.value === INTERESTED_EVENTS;
  });

  const toInterestedEventsModal = () => {
    toggleModal(INTERESTED_EVENTS);
  };

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
    showInterestedEventsModal,
    toInterestedEventsModal,
    test,
    showInterestModal,
    finishModal,
    cancelSignup,
    updateInfo
  };
};

export default useSignup;
