import { computed, Ref } from "vue";
import { Event } from "../constant/interfaces";
import { getDisplayDate, getStartEndTime } from "@/commons/utils/date";
import { isBefore } from "date-fns";

export default function useOrgEventListCard(event: Ref<Event>) {
  const eventDate = computed(() => {
    return getDisplayDate(event.value.durations);
  });

  const eventTime = computed(() => {
    return getStartEndTime(event.value.durations[0]);
  });

  const isInRegistrationTime = computed(() => {
    const registrationDateTime = new Date(event.value.registrationDueDate);
    return isBefore(registrationDateTime, new Date());
  });

  const attendeeCount = computed(() => {
    if (isInRegistrationTime.value) {
      const registeredParticipantsCount = event.value.attendees.length;
      return `${registeredParticipantsCount}/${event.value.attendeeLimit}`;
    }
    return event.value.attendeeCount.toString();
  });

  const attendeeText = computed(() => {
    if (isInRegistrationTime.value) return "users registered";
    return "users attending";
  });

  //Later must connect with /org/event page by giving id to navbar
  function toEventDashboard() {
    console.log("To event dashboard /org/event for eventId:", event.value.id);
  }

  return {
    eventDate,
    eventTime,
    isInRegistrationTime,
    attendeeCount,
    attendeeText,
    toEventDashboard
  };
}
