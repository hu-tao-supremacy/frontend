import { EventDuration, GetEventByIdQuery } from "@/apollo/types";
import { computed } from "vue";
import { getDisplayDate, getMainTimetable } from "./utils";

const useInfoBanner = (event: GetEventByIdQuery["event"]) => {
  const date = computed(() =>
    getDisplayDate(event.durations as EventDuration[])
  );
  const time = computed(() =>
    getMainTimetable(event.durations as EventDuration[])
  );
  return { date, time };
};

export default useInfoBanner;
