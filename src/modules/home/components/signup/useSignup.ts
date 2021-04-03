import { computed, ref } from "vue";
import { testData } from "@/modules/test/testData";
import { useRouter } from "vue-router";

const ADDITIONAL_INFO = "additionInfo";
const INTEREST = "interest";

const useSignup = () => {
  const test = testData;
  const currentModal = ref(ADDITIONAL_INFO);
  const router = useRouter();

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

  return {
    toggleModal,
    showAdditionalInfoModal,
    test,
    showInterestModal,
    finishModal
  };
};

export default useSignup;
