import { ref } from "vue";

export default function useWallet() {
  const isOngoingTicket = ref(true);

  function showOngoingTicket() {
    isOngoingTicket.value = true;
  }

  function showHistoryTicket() {
    isOngoingTicket.value = false;
  }

  function editInfo() {
    //Send to edit info page
    console.log("Edit info");
  }

  return {
    isOngoingTicket,
    showOngoingTicket,
    showHistoryTicket,
    editInfo
  };
}
