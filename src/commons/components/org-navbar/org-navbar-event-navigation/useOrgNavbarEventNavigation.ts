import { computed, Ref, ref } from "vue";
import { OrgEventNavbarSelection } from "@/commons/constant";

export default function useOrgNavbarEventNavigation() {
  //Later will add watch and check with the current url path.
  const currentSelection: Ref<OrgEventNavbarSelection> = ref(
    OrgEventNavbarSelection.NONE
  );

  const isDashBoardSelected = computed(() => {
    return currentSelection.value === OrgEventNavbarSelection.DASHBOARD;
  });

  const isEventInfoSelected = computed(() => {
    return currentSelection.value === OrgEventNavbarSelection.EVENT_INFO;
  });

  const isManageAttendeeSelected = computed(() => {
    return currentSelection.value === OrgEventNavbarSelection.MANAGE_ATTENDEE;
  });

  const isManageFeedbackSelected = computed(() => {
    return currentSelection.value === OrgEventNavbarSelection.MANAGE_FEEDBACK;
  });

  //All of below functions will later be changed to router link
  function toDashboard() {
    console.log("To dashboard");
    currentSelection.value = OrgEventNavbarSelection.DASHBOARD;
  }

  function toEventInfo() {
    console.log("To event info");
    currentSelection.value = OrgEventNavbarSelection.EVENT_INFO;
  }

  function toManageAttendee() {
    console.log("To manage attendee");
    currentSelection.value = OrgEventNavbarSelection.MANAGE_ATTENDEE;
  }

  function toManageFeedback() {
    console.log("To manage feedback");
    currentSelection.value = OrgEventNavbarSelection.MANAGE_FEEDBACK;
  }

  return {
    isDashBoardSelected,
    isEventInfoSelected,
    isManageAttendeeSelected,
    isManageFeedbackSelected,
    toDashboard,
    toEventInfo,
    toManageAttendee,
    toManageFeedback
  };
}
