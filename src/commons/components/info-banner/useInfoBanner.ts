import { computed, Ref } from "vue";
import { getDisplayDate, getMainTimetable } from "@/commons/utils/date";
import { login } from "@/commons/utils/auth";
import { EventDuration } from "@/apollo/types";
import { EventBanner } from "./types";
import { useRouter } from "vue-router";

const useInfoBanner = (
  isSignIn: Ref<boolean>,
  attendance: Ref<boolean>,
  event?: Ref<EventBanner | undefined>
) => {
  const router = useRouter();
  const date = computed(() => {
    return getDisplayDate(event?.value?.durations as EventDuration[]);
  });

  const time = computed(() =>
    getMainTimetable(event?.value?.durations as EventDuration[])
  );

  const location = computed(() => event?.value?.location?.name || "-");
  const registerMessage = computed(() =>
    attendance.value ? "Registered" : "Register"
  );

  const register = () => {
    if (!isSignIn.value) {
      login();
    } else {
      router.push(`/event-register/${event?.value?.id}`);
    }
  };
  return { date, time, location, register, registerMessage };
};

export default useInfoBanner;
