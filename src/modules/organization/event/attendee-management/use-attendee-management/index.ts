import { useRoute, useRouter } from "vue-router";
import { useAttendeeManagementApi } from "../api";
import { useResult } from "@vue/apollo-composable";

const useAttendeeManagement = () => {
  const route = useRoute();
  const router = useRouter();
  const eventId = Number(route.params.id);
  const { result, onError } = useAttendeeManagementApi({
    id: eventId
  });

  onError(() => {
    router.push("/404");
  });

  const event = useResult(result, null, data => data.event);
  return { event };
};

export default useAttendeeManagement;
