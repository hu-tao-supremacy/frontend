import { computed } from "vue";

export default function useOrgEventListCard(
  attendeeLimit: number,
  currentAttendee: number,
  eventStatus: string
) {
  const participantNumber = computed(() => {
    return currentAttendee + "/" + attendeeLimit;
  });
  const isParticipantFull = computed(() => {
    return currentAttendee === attendeeLimit;
  });
  const isEventClosed = computed(() => {
    return eventStatus === "Closed";
  });

  return {
    participantNumber,
    isParticipantFull,
    isEventClosed
  };
}
