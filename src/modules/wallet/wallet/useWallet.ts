import { computed, ref } from "vue";
import { TicketStatus } from "@/commons/constant";

export default function useWallet() {
  const ticketStatusView = ref(TicketStatus.ONGOING);

  function changeTicketStatusView(ticketStatus: TicketStatus) {
    ticketStatusView.value = ticketStatus;
  }

  function editInfo() {
    //Send to edit info page
    console.log("Edit info");
  }

  const isOngoingTicketView = computed(() => {
    return ticketStatusView.value === TicketStatus.ONGOING;
  });

  const isPendingTicketView = computed(() => {
    return ticketStatusView.value === TicketStatus.PENDING;
  });

  const isHistoryTicketView = computed(() => {
    return ticketStatusView.value === TicketStatus.HISTORY;
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
