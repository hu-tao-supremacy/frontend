import { computed } from "vue";
import { useResult } from "@vue/apollo-composable";
import { generateDummyArray } from "./utils";
import { useHomeApi, useRecommendationEvent } from "../api";
import useUser from "@/modules/authentication";
import router from "@/router";

const useHome = () => {
  const { isSignIn, user } = useUser();
  const { result: homeResult } = useHomeApi();
  const { result: recommendedEventsResult } = useRecommendationEvent(isSignIn);
  const upcommingEvents = useResult(
    homeResult,
    generateDummyArray(4),
    data => data.upcomingEvents
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

  const onlineEvents = computed(() => {
    return generateDummyArray(4);
  });

  const nearbyEvents = computed(() => {
    return generateDummyArray(4);
  });

  function moreRecommend() {
    router.push("/more-recommended-events");
  }
  function moreUpcoming() {
    router.push("/more-upcoming-events");
  }
  function moreOnline() {
    router.push("/more-online-events");
  }

  return {
    featureEvents,
    recommendedEvents,
    upcommingEvents,
    onlineEvents,
    nearbyEvents,
    featuredOrganizations,
    moreRecommend,
    moreUpcoming,
    moreOnline
  };
};

export default useHome;
