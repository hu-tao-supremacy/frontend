import { useRoute, useRouter } from "vue-router";
import { useEventById } from "../api";
import { useResult } from "@vue/apollo-composable";
import useUser from "@/modules/authentication";
import { useEventAttendance } from "@/commons/api";

const useEventInfo = () => {
  const route = useRoute();
  const router = useRouter();
  const { isSignIn } = useUser();
  const eventID = Number(route.params.id);
  const { result, onError } = useEventById({ id: eventID });
  const { result: eventAttendacneResult } = useEventAttendance({ id: eventID });

  onError(() => {
    router.push("/404");
  });

  const event = useResult(result, null, data => data.event);
  const attendance = useResult(
    eventAttendacneResult,
    null,
    data => data.event.attendance
  );

  return { event, isSignIn, attendance };
};

export default useEventInfo;
