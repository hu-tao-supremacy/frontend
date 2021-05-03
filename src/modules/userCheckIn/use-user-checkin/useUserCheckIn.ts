import { useRoute, useRouter } from "vue-router";
import { useEventUserCheckIn, useUserTicket } from "../api";
import { useResult } from "@vue/apollo-composable";

const useUserCheckIn = () => {
  const route = useRoute();
  const router = useRouter();
  const eventID = Number(route.params.id);
  const { result: userData } = useUserTicket();
  const { onError, result } = useEventUserCheckIn({ id: eventID });
  const event = useResult(result, null, data => data.event);
  const user = useResult(userData, null, data => data.currentUser);
  onError(() => {
    router.push("/404");
  });

  return { event, user };
};

export default useUserCheckIn;
