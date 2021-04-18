import { useRoute, useRouter } from "vue-router";
import { useEventUserCheckIn } from "../api";
import { useResult } from "@vue/apollo-composable";
import useUser from "@/modules/authentication";

const useUserCheckIn = () => {
  const route = useRoute();
  const router = useRouter();
  const eventID = Number(route.params.id);
  const { user } = useUser();
  const { onError, result } = useEventUserCheckIn({ id: eventID });
  const event = useResult(result, null, data => data.event);

  onError(() => {
    router.push("/404");
  });

  return { event, user };
};

export default useUserCheckIn;
