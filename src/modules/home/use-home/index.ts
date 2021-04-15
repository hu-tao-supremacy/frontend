import { testData } from "./testData";
import { reactive, ref } from "vue";
import { useUpcomingEvents, useFeaturedOrganizations } from "../api";
import { useResult } from "@vue/apollo-composable";

const useHome = () => {
  const state = reactive(testData);
  const showModal = ref(false);
  const { result: upcomingEvents } = useUpcomingEvents();
  const { result: featuredOrganizationsResult } = useFeaturedOrganizations();

  const featuredOrganizations = useResult(
    featuredOrganizationsResult,
    null,
    data => data.featuredOrganizations
  );

  function toggleModal() {
    showModal.value = !showModal.value;
  }

  return {
    state,
    showModal,
    toggleModal,
    upcomingEvents,
    featuredOrganizations
  };
};

export default useHome;
