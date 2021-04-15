import { computed, Ref } from "vue";
import { Event } from "@/apollo/types";

const useEventLink = (event?: Ref<Event | undefined>) => {
  const eventInfoUrl = computed(() => `/event/${event?.value?.id}`);
  const isLinkReady = computed(() => !!event?.value?.id);

  return { eventInfoUrl, isLinkReady };
};

export default useEventLink;
