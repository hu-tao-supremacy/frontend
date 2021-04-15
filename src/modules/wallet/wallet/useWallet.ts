import { computed, ref } from "vue";
import { UserEventStatus } from "@/apollo/types";

export default function useWallet() {
  const ticketStatusView = ref(UserEventStatus.Approved);

  function changeTicketStatusView(ticketStatus: UserEventStatus) {
    ticketStatusView.value = ticketStatus;
  }

  function editInfo() {
    //Send to edit info page
    console.log("Edit info");
  }

  const isOngoingTicketView = computed(() => {
    return ticketStatusView.value === UserEventStatus.Approved;
  });

  const isPendingTicketView = computed(() => {
    return ticketStatusView.value === UserEventStatus.Pending;
  });

  const isHistoryTicketView = computed(() => {
    return ticketStatusView.value === UserEventStatus.Rejected;
  });

  return {
    ticketStatusView,
    changeTicketStatusView,
    editInfo,
    isOngoingTicketView,
    isPendingTicketView,
    isHistoryTicketView
  };
}
