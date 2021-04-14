import { EventDuration, GetEventByIdQuery } from "@/apollo/types";
import { computed, Ref } from "vue";
import { getDisplayDate, getMainTimetable } from "@/commons/utils/date";
import { login } from "@/commons/utils/auth";
import useUser from "@/modules/authentication";

const useInfoBanner = (event?: Ref<GetEventByIdQuery["event"] | undefined>) => {
  const { isSignIn } = useUser();
  const date = computed(() => {
    return getDisplayDate(event?.value?.durations as EventDuration[]);
  });

  const time = computed(() =>
    getMainTimetable(event?.value?.durations as EventDuration[])
  );

  const location = computed(() => event?.value?.location?.name || "-");

  const register = () => {
    if (!isSignIn.value) {
      login();
    } else {
      console.log("go to register page");
    }
  };
  return { date, time, location, register };
};

export default useInfoBanner;
