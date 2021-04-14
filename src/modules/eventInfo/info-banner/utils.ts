import { EventDuration } from "@/apollo/types";
import { format } from "date-fns";

export const getDisplayDate = (durations: EventDuration[]) => {
  const startDateText = format(new Date(durations[0].start), "ccc, d MMM");
  if (durations.length !== 0) {
    const endDateText = format(
      new Date(durations[durations.length - 1].start),
      "d MMM"
    );
    return `${startDateText} - ${endDateText}`;
  }
  return startDateText;
};

export const getMainTimetable = (durations: EventDuration[]) => {
  if (durations.length !== 0) {
    return "-";
  }
  const startTime = format(new Date(durations[0].start), "HH:mm");
  const endTime = format(new Date(durations[0].finish), "HH:mm");
  return `${startTime} - ${endTime}`;
};
