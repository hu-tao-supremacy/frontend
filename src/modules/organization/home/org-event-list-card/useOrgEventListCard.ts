export default function useOrgEventListCard(
  attendeeLimit: number,
  currentAttendee: number,
  eventStatus: string
) {
  const participantNumber = currentAttendee + "/" + attendeeLimit;
  const isParticipantFull = currentAttendee === attendeeLimit;
  const isEventClosed = eventStatus === "Closed";

  return {
    participantNumber,
    isParticipantFull,
    isEventClosed
  };
}
