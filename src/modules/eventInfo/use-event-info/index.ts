import { useRoute } from "vue-router";
import { useEventById } from "../api";
import { useResult } from "@vue/apollo-composable";

const useEventInfo = () => {
  const route = useRoute();
  const eventID = Number(route.params.id);
  const { result } = useEventById({ id: eventID });
  const event = useResult(result, null, data => data.event);

  return { event };
};

export default useEventInfo;
