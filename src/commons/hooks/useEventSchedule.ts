import { EventDuration, Location } from "@/apollo/types";
import { getStartEndTime } from "@/commons/utils/date";
import { format } from "date-fns";
import { computed } from "vue";

const useEventSchedule = (duration?: EventDuration, location?: Location) => {
  const locationText = computed(() => {
    return location?.name || "Location: TBA";
  });

  if (!duration) {
    return { day: null, month: null, time: "Time: TBA", locationText };
  }

  const day = computed(() => format(new Date(duration.start), "dd"));
  const month = computed(() => format(new Date(duration.start), "MMM"));
  const time = computed(() => getStartEndTime(duration));

  return { day, month, time, locationText };
};

export default useEventSchedule;
