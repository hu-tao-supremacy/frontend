import { computed } from "vue";
import { useResult } from "@vue/apollo-composable";
import { generateDummyArray } from "./utils";
import { useHomeApi, useRecommendationEvent } from "../api";
import useUser from "@/modules/authentication";

const useHome = () => {
  const { isSignIn, user } = useUser();
  const { result: homeResult } = useHomeApi();
  const { result: recommendedEventsResult } = useRecommendationEvent(isSignIn);

  const upcommingEvents = useResult(
    homeResult,
    generateDummyArray(4),
    data => data.upcomingEvents
  );

  const onlineEvents = useResult(
    homeResult,
    generateDummyArray(4),
    data => data.onlineEvents
  );

  const onsiteEvents = useResult(
    homeResult,
    generateDummyArray(4),
    data => data.onSiteEvents
  );

  const featureEvents = useResult(
    homeResult,
    generateDummyArray(4),
    data => data.featuredEvents
  );
  const featuredOrganizations = useResult(
    homeResult,
    generateDummyArray(4),
    data => data.featuredOrganizations
  );

  const recommendedEventsData = useResult(
    recommendedEventsResult,
    null,
    data => data.recommendedEvents
  );
  const recommendedEvents = computed(() => {
    if (!(isSignIn.value && user.value.didSetup)) {
      return null;
    }
    if (!recommendedEventsData.value) {
      generateDummyArray(3);
    }
    return recommendedEventsData.value;
  });

  return {
    featureEvents,
    recommendedEvents,
    upcommingEvents,
    onlineEvents,
    onsiteEvents,
    featuredOrganizations
  };
};

export default useHome;
