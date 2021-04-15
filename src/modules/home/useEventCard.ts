import useEventSchedule from "@/commons/hooks/useEventSchedule";
import { Event, Location } from "@/apollo/types";

const useEventCard = (event?: Event) => {
  const duration = event?.durations && event?.durations[0];
  const { day, month, time, locationText } = useEventSchedule(
    duration,
    event?.location as Location
  );
  return { day, month, time, locationText };
};

export default useEventCard;
