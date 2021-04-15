import { testData } from "./testData";
import { computed, reactive, ref } from "vue";
import { useFeaturedEvents } from "../api";
import { useResult } from "@vue/apollo-composable";
import { generateDummyArray } from "./utils";

const useHome = () => {
  const state = reactive(testData);
  const showModal = ref(false);
  const { result: upcomingEvents } = useFeaturedEvents();
  const events = useResult(upcomingEvents, null, data => data.featuredEvents);

  const featureEvents = computed(() => {
    return events.value ? events.value?.slice(0, 4) : generateDummyArray(4);
  });

  const recommendedEvents = computed(() => {
    return events.value ? events.value?.slice(4, 7) : generateDummyArray(3);
  });

  const upcommingEvents = computed(() => {
    return events.value ? events.value?.slice(7, 11) : generateDummyArray(4);
  });

  const onlineEvents = computed(() => {
    return events.value ? events.value?.slice(11, 15) : generateDummyArray(4);
  });

  const nearbyEvents = computed(() => {
    return events.value ? events.value?.slice(15, 19) : generateDummyArray(4);
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
