import { computed, Ref } from "vue";
import { getDisplayDate, getMainTimetable } from "@/commons/utils/date";
import { EventDuration } from "@/apollo/types";
import { Event } from "@/apollo/types";

const useCardBanner = (event?: Ref<Event | undefined>) => {
  const date = computed(() => {
    return getDisplayDate(event?.value?.durations as EventDuration[]);
  });

  const time = computed(() =>
    getMainTimetable(event?.value?.durations as EventDuration[])
  );

  const location = computed(() => event?.value?.location?.name || "-");

  function changeClass(index: number) {
    return event?.value?.tags && index === event?.value?.tags.length - 1
      ? ""
      : "mr-1";
  }

  const eventInfoUrl = computed(() => `/event/${event?.value?.id}`);
  const isLinkReady = computed(() => !!event?.value?.id);

  return { date, time, location, changeClass, eventInfoUrl, isLinkReady };
};

export default useCardBanner;
