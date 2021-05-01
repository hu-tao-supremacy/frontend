import { useRoute, useRouter } from "vue-router";
import { useOrgEventApi } from "./api";
import { useResult } from "@vue/apollo-composable";

const useOrgEvent = () => {
  const route = useRoute();
  const router = useRouter();
  const eventId = Number(route.params.id);
  const { result, onError } = useOrgEventApi({
    id: eventId
  });

  onError(() => {
    router.push("/404");
  });

  const event = useResult(result, null, data => data.event);
  return { event, eventId };
};

export default useOrgEvent;
