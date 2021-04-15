import { useRoute, useRouter } from "vue-router";
import { useEventById } from "../api";
import { useResult } from "@vue/apollo-composable";
import useUser from "@/modules/authentication";

const useEventInfo = () => {
  const route = useRoute();
  const router = useRouter();
  const { isSignIn } = useUser();
  const eventID = Number(route.params.id);
  const { result, onError } = useEventById({ id: eventID });

  onError(() => {
    router.push("/404");
  });

  const event = useResult(result, null, data => data.event);

  return { event, isSignIn };
};

export default useEventInfo;
