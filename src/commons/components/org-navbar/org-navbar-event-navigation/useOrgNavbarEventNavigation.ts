import { computed, onMounted, Ref, ref, watch } from "vue";
import { OrgEventNavbarSelection } from "@/commons/constant";
import { useRoute, useRouter } from "vue-router";
import useOrgEvent from "@/modules/organization/event/use-org-event";

export default function useOrgNavbarEventNavigation() {
  //Later will add watch and check with the current url path.
  const router = useRouter();
  const route = useRoute();
  const { eventId, event } = useOrgEvent();
  const currentSelection: Ref<OrgEventNavbarSelection> = ref(
    OrgEventNavbarSelection.NONE
  );

  watch(route, () => {
    if (route.fullPath.includes("attendee-management")) {
      currentSelection.value = OrgEventNavbarSelection.MANAGE_ATTENDEE;
    } else if (route.fullPath.includes("create-event-feedback")) {
      currentSelection.value = OrgEventNavbarSelection.MANAGE_FEEDBACK;
    } else {
      currentSelection.value = OrgEventNavbarSelection.DASHBOARD;
    }
  });

  const isDashBoardSelected = computed(() => {
    return currentSelection.value === OrgEventNavbarSelection.DASHBOARD;
  });

  const isManageAttendeeSelected = computed(() => {
    return currentSelection.value === OrgEventNavbarSelection.MANAGE_ATTENDEE;
  });

  const isManageFeedbackSelected = computed(() => {
    return currentSelection.value === OrgEventNavbarSelection.MANAGE_FEEDBACK;
  });

  //All of below functions will later be changed to router link
  function toDashboard() {
    router.push(`/org/event/${eventId}`);
    currentSelection.value = OrgEventNavbarSelection.DASHBOARD;
  }
  function toManageAttendee() {
    router.push(`/org/event/attendee-management/${eventId}`);
    currentSelection.value = OrgEventNavbarSelection.MANAGE_ATTENDEE;
  }

  function toManageFeedback() {
    router.push(`/org/event/create-event-feedback/${eventId}`);
    currentSelection.value = OrgEventNavbarSelection.MANAGE_FEEDBACK;
  }

  return {
    isDashBoardSelected,
    isManageAttendeeSelected,
    isManageFeedbackSelected,
    toDashboard,
    toManageAttendee,
    toManageFeedback,
    event
  };
}
