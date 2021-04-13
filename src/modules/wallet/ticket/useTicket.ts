import { TicketStatus } from "@/commons/constant";
import { computed } from "vue";

export default function useTicket(ticketStatus: TicketStatus) {
  const isPending = computed(() => {
    return ticketStatus === TicketStatus.PENDING;
  });

  const isOngoing = computed(() => {
    return ticketStatus === TicketStatus.ONGOING;
  });

  const isHistory = computed(() => {
    return ticketStatus === TicketStatus.HISTORY;
  });

  function checkIn() {
    if (!isOngoing.value) return;
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
    giveFeedback
  };
}
