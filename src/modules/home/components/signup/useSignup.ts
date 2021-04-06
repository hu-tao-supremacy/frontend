import { computed, ref } from "vue";
import { testData } from "@/modules/test/testData";
import { useRouter } from "vue-router";
import useUser from "@/modules/authentication/useUser";

const ADDITIONAL_INFO = "additionInfo";
const INTEREST = "interest";

const useSignup = () => {
  const test = testData;
  const currentModal = ref(ADDITIONAL_INFO);
  const router = useRouter();
  const { hotLogout } = useUser();

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
    router.push("/");
  };

  const cancelSignup = () => {
    hotLogout();
    finishModal();
  };

  return {
    toggleModal,
    showAdditionalInfoModal,
    test,
    showInterestModal,
    finishModal,
    cancelSignup
  };
};

export default useSignup;
