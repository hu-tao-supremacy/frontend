import { computed } from "vue";
import { Event, EventDuration, UserEventStatus } from "@/apollo/types";
import { getDisplayDate, getMainTimetable } from "@/commons/utils/date";
import { useRouter } from "vue-router";

export default function useTicket(ticketStatus: UserEventStatus, event: Event) {
  const router = useRouter();
  const isPending = computed(() => {
    return ticketStatus === UserEventStatus.Pending;
  });

  const isOngoing = computed(() => {
    return ticketStatus === UserEventStatus.Approved;
  });

  const isHistory = computed(() => {
    return ticketStatus === UserEventStatus.Pending;
  });
  const date = computed(() => {
    return getDisplayDate(event?.durations as EventDuration[]);
  });

  const time = computed(() =>
    getMainTimetable(event?.durations as EventDuration[])
  );

  function checkIn() {
    if (!isOngoing.value) {
      router.push(`/user-checkin/${event?.id}`);
    }
    //Do something when check in
    console.log("Do checkin");
  }

  function giveFeedback() {
    //Do something when click to give feedback
    console.log("Give feedback");
  }

  return {
    isPending,
    isOngoing,
    isHistory,
    checkIn,
    giveFeedback,
    date,
    time
  };
}
