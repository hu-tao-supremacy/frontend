import { Duration } from "@/commons/Interfaces";
import { format, set } from "date-fns";

export const getDisplayDate = (durations?: Duration[]) => {
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

export const getStartEndTime = (duration: Duration) => {
  if (!duration) {
    return;
  }
  const startTime = format(new Date(duration.start), "HH:mm");
  const endTime = format(new Date(duration.finish), "HH:mm");
  return `${startTime} - ${endTime}`;
};

export const getMainTimetable = (durations?: Duration[]) => {
  if (!durations || durations.length !== 0 || !durations[0]) {
    return "-";
  }
  return getStartEndTime(durations[0]);
};

export const getEventStartTime = (durations?: Duration[]) => {
  if (!durations) {
    return null;
  }
  const sortedDuration = [...durations]?.sort((durationA, durationB) => {
    return (
      new Date(durationB.start).getTime() - new Date(durationA.start).getTime()
    );
  });
  return new Date(sortedDuration[0].start);
};

export const checkIfEventStarted = (durations?: Duration[]) => {
  const startDate = getEventStartTime(durations);
  return startDate ? startDate < new Date() : false;
};

/*
Keep the date but set the time to 00:00:00.000
*/
export function setTimeToZero(date: Date) {
  return set(date, {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  }).toString();
}
