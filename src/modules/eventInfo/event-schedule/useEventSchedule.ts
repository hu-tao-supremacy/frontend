import { EventDuration, Location } from "@/apollo/types";
import { getStartEndTime } from "@/commons/utils/date";
import { format } from "date-fns";
import { computed } from "vue";

const useEventSchedule = (durations: EventDuration, location?: Location) => {
  const day = computed(() => format(new Date(durations.start), "dd"));
  const month = computed(() => format(new Date(durations.start), "MMM"));
  const time = computed(() => getStartEndTime(durations));
  const locationText = computed(() => {
    return location?.name || "Location: TBA";
  });

  return { day, month, time, locationText };
};

export default useEventSchedule;
