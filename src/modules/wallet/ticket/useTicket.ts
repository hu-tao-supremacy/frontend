import { computed, Ref } from "vue";
import { Event, EventDuration, UserEventStatus } from "@/apollo/types";
import { getDisplayDate, getMainTimetable } from "@/commons/utils/date";

export default function useTicket(
  ticketStatus: UserEventStatus,
  event: Ref<Event>
) {
  const isPending = computed(() => {
    return ticketStatus === UserEventStatus.Pending;
  });

  const isOngoing = computed(() => {
    return ticketStatus === UserEventStatus.Approved;
  });

  const isHistory = computed(() => {
    return ticketStatus === UserEventStatus.Pending;
  });

  const isAttended = computed(() => {
    return ticketStatus === UserEventStatus.Attended;
  });

  const date = computed(() => {
    return getDisplayDate(event?.value.durations as EventDuration[]);
  });

  const time = computed(() =>
    getMainTimetable(event?.value.durations as EventDuration[])
  );

  const isSubmittedFeedback = computed(() => {
    return !!event.value.attendance?.rating;
  });

  const routerLinkId = computed(() => {
    if (isOngoing.value) {
      return `/user-checkin/${event?.value.id}`;
    } else {
      return `/event-feedback/${event?.value.id}`;
    }
  });

  function checkIn() {
    if (!isOngoing.value) {
      return;
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
    isAttended,
    checkIn,
    giveFeedback,
    date,
    time,
    routerLinkId,
    isSubmittedFeedback
  };
}
