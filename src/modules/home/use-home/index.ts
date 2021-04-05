import { testData } from "./testData";
import { computed, reactive, ref } from "vue";
import { useUpcomingEvents } from "../api";
import { useRoute } from "vue-router";

const useHome = () => {
  const state = reactive(testData);
  const showModal = ref(false);
  const { result: upcomingEvents } = useUpcomingEvents();
  const route = useRoute();

  const isSignup = computed(() => {
    const signup = route.query.signup;
    return signup === "1";
  });

  function toggleModal() {
    showModal.value = !showModal.value;
  }

  return { state, showModal, toggleModal, upcomingEvents, isSignup };
};

export default useHome;
