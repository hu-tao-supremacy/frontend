import { EventDuration, Location } from "@/apollo/types";
import { getStartEndTime } from "@/commons/utils/date";
import { format } from "date-fns";
import { computed } from "vue";

const useEventSchedule = (durations?: EventDuration, location?: Location) => {
  const locationText = computed(() => {
    return location?.name || "Location: TBA";
  });

  if (!durations) {
    return { day: null, month: null, time: "Time: TBA", locationText };
  }

  const day = computed(() => format(new Date(durations.start), "dd"));
  const month = computed(() => format(new Date(durations.start), "MMM"));
  const time = computed(() => getStartEndTime(durations));

  return { day, month, time, locationText };
};

export default useEventSchedule;
