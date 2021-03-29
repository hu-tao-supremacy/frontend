import { testData } from "./testData";
import { reactive, ref } from "vue";
import { useUpcomingEvents } from "../api";

const useHome = () => {
  const state = reactive(testData);
  const showModal = ref(false);
  const { result: upcomingEvents } = useUpcomingEvents();

  function toggleModal() {
    showModal.value = !showModal.value;
  }

  return { state, showModal, toggleModal, upcomingEvents };
};

export default useHome;
