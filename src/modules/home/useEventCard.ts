import useEventSchedule from "@/commons/hooks/useEventSchedule";
import { Event, Location } from "@/apollo/types";
import useEventLink from "@/commons/hooks/useEventLink";
import { Ref } from "vue";

const useEventCard = (event?: Ref<Event | undefined>) => {
  const duration = event?.value?.durations && event?.value?.durations[0];
  const { day, month, time, locationText } = useEventSchedule(
    duration,
    event?.value?.location as Location
  );
  const { eventInfoUrl, isLinkReady } = useEventLink(event);
  return { day, month, time, locationText, eventInfoUrl, isLinkReady };
};

export default useEventCard;
