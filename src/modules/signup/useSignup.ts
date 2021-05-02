import { computed, ref } from "vue";
import { testData } from "@/modules/test/testData";
import { useRoute, useRouter } from "vue-router";
import useUser from "@/modules/authentication";
import {
  setUpdateInterestedEvents,
  useInterestedEventsCandidate,
  useUpdateUserInfo
} from "./api";
import { UpdateUserInput } from "@/apollo/types";
import { useResult } from "@vue/apollo-composable";

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
  const { updateInterest, onUpdateInterestDone } = setUpdateInterestedEvents();
  const interestedTags = ref<number[]>([]);
  const hasInterestedTags = computed(() => interestedTags.value.length !== 0);
  const { result: eventsCandidate } = useInterestedEventsCandidate(
    interestedTags,
    hasInterestedTags
  );
  const interestedEventsCandidate = useResult(
    eventsCandidate,
    null,
    data => data.pastEvents
  );
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

  const submitInterestedTags = (tags: number[]) => {
    interestedTags.value = tags;
    toggleModal(INTERESTED_EVENTS);
  };

  const closeModal = () => {
    toggleModal("");
    router.push(route.path as string);
  };

  const finishModal = (eventIds: number[]) => {
    updateInterest({ input: eventIds });
    closeModal();
  };

  const cancelSignup = () => {
    logout();
    closeModal();
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
    submitInterestedTags,
    test,
    showInterestModal,
    finishModal,
    cancelSignup,
    updateInfo,
    interestedEventsCandidate,
    closeModal
  };
};

export default useSignup;
