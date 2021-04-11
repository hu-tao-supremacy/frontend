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

  const participantIconColor = computed(() => {
    if (isParticipantFull.value) return "text-red-6";
    return "text-primary";
  });

  const participantTextColor = computed(() => {
    if (isParticipantFull.value) return "text-red-6";
    return "";
  });

  const isEventClosed = computed(() => {
    return eventStatus === "Closed";
  });

  const eventStatusIconColor = computed(() => {
    if (isEventClosed.value) return "text-red-6";
    return "text-primary";
  });

  const eventStatusTextColor = computed(() => {
    if (isEventClosed.value) return "text-red-6";
    return "";
  });

  return {
    participantNumber,
    isParticipantFull,
    participantIconColor,
    participantTextColor,
    isEventClosed,
    eventStatusIconColor,
    eventStatusTextColor
  };
}
