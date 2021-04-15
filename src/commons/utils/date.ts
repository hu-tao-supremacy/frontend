import { EventDuration } from "@/apollo/types";
import { format } from "date-fns";

export const getDisplayDate = (durations?: EventDuration[]) => {
  if (!durations || !durations[0]) {
    return "-";
  }
  const startDateText = format(new Date(durations[0].start), "ccc, d MMM");
  if (durations.length !== 1) {
    const endDateText = format(
      new Date(durations[durations.length - 1].start),
      "d MMM"
    );
    return `${startDateText} - ${endDateText}`;
  }
  return startDateText;
};

export const getStartEndTime = (duration?: EventDuration) => {
  if (!duration) {
    return;
  }
  const startTime = format(new Date(duration.start), "HH:mm");
  const endTime = format(new Date(duration.finish), "HH:mm");
  return `${startTime} - ${endTime}`;
};

export const getMainTimetable = (durations?: EventDuration[]) => {
  if (!durations || durations.length !== 0 || !durations[0]) {
    return "-";
  }
  return getStartEndTime(durations[0]);
};
