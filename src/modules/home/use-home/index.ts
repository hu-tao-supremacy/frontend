import { testData } from "./testData";
import { computed, reactive, ref } from "vue";
import { useResult } from "@vue/apollo-composable";
import { generateDummyArray } from "./utils";
import { useFeaturedEvents, useFeaturedOrganizations } from "../api";

const useHome = () => {
  const state = reactive(testData);
  const showModal = ref(false);
  const { result: upcomingEvents } = useFeaturedEvents();
  const { result: featuredOrganizationsResult } = useFeaturedOrganizations();
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
    return events.value ? events.value?.slice(12, 16) : generateDummyArray(4);
  });

  const nearbyEvents = computed(() => {
    return events.value ? events.value?.slice(16, 20) : generateDummyArray(4);
  });

  const featuredOrganizations = useResult(
    featuredOrganizationsResult,
    null,
    data => {
      if (data.featuredOrganizations.length <= 4)
        return data.featuredOrganizations;
      return data.featuredOrganizations.slice(0, 4);
    }
  );

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
    nearbyEvents,
    featuredOrganizations
  };
};

export default useHome;
