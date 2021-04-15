import { testData } from "./testData";
import { computed, reactive, ref } from "vue";
import { useFeaturedEvents } from "../api";
import { useResult } from "@vue/apollo-composable";

const useHome = () => {
  const state = reactive(testData);
  const showModal = ref(false);
  const { result: upcomingEvents } = useFeaturedEvents();
  const events = useResult(upcomingEvents, null, data => data.featuredEvents);

  const featureEvents = computed(() => {
    return events.value?.slice(0, 4);
  });

  const recommendedEvents = computed(() => {
    return events.value?.slice(4, 7);
  });

  const upcommingEvents = computed(() => {
    return events.value?.slice(8, 12);
  });

  const onlineEvents = computed(() => {
    return events.value?.slice(12, 16);
  });

  const nearbyEvents = computed(() => {
    return events.value?.slice(16, 20);
  });

  function toggleModal() {
    showModal.value = !showModal.value;
  }

  return {
    state,
    showModal,
    toggleModal,
    featureEvents,
    recommendedEvents,
    upcommingEvents,
    onlineEvents,
    nearbyEvents
  };
};

export default useHome;
