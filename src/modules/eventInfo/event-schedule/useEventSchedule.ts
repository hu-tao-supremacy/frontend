import { EventDuration } from "@/apollo/types";
import { format } from "date-fns";
import { computed } from "vue";

const useEventSchedule = (durations: EventDuration) => {
  const day = computed(() => format(new Date(durations.start), "dd"));
  const month = computed(() => format(new Date(durations.start), "MMM"));
  const time = computed(() => {
    const startTime = format(new Date(durations.start), "HH:mm");
    const endTime = format(new Date(durations.finish), "HH:mm");
    return `${startTime} - ${endTime}`;
  });

  return { day, month, time };
};

export default useEventSchedule;
