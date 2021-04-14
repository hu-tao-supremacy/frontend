import { EventDuration, GetEventByIdQuery } from "@/apollo/types";
import { computed } from "vue";
import { getDisplayDate, getMainTimetable } from "@/commons/utils/date";
import { login } from "@/commons/utils/auth";
import useUser from "@/modules/authentication";

const useInfoBanner = (event?: GetEventByIdQuery["event"]) => {
  const { isSignIn } = useUser();
  const date = computed(() =>
    getDisplayDate(event?.durations as EventDuration[])
  );

  const time = computed(() =>
    getMainTimetable(event?.durations as EventDuration[])
  );

  const register = () => {
    if (!isSignIn.value) {
      login();
    } else {
      console.log("go to register page");
    }
  };
  return { date, time, register };
};

export default useInfoBanner;
