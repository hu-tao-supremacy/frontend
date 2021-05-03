import { computed, Ref } from "vue";
import { getDisplayDate, getMainTimetable } from "@/commons/utils/date";
import { EventDuration } from "@/apollo/types";
import { Event } from "@/apollo/types";
import useEventLink from "@/commons/hooks/useEventLink";

const useCardBanner = (event?: Ref<Event | undefined>) => {
  const date = computed(() => {
    return getDisplayDate(event?.value?.durations as EventDuration[]);
  });

  const time = computed(() =>
    getMainTimetable(event?.value?.durations as EventDuration[])
  );

  const location = computed(() => event?.value?.location?.name || "-");

  const { eventInfoUrl, isLinkReady } = useEventLink(event);

  return { date, time, location, eventInfoUrl, isLinkReady };
};

export default useCardBanner;
