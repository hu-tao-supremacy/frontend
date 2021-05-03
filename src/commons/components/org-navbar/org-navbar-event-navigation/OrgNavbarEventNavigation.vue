<template>
  <div class="flex flex-col w-full space-y-1">
    <base-icon-and-detail
      @click="toDashboard"
      :iconWidth="24"
      :iconHeight="24"
      :iconColor="'currentColor'"
      :iconClass="'mr-2'"
      :detail="'Dashboard'"
      :detailClass="'font-semibold'"
      class="px-1 py-0.75 rounded-lg cursor-pointer"
      :class="{
        'text-blue-9 bg-white': isDashBoardSelected,
        'text-white hover:bg-white hover:text-blue-11': !isDashBoardSelected
      }"
      ><GridIcon
    /></base-icon-and-detail>
    <base-icon-and-detail
      @click="toManageAttendee"
      :iconWidth="24"
      :iconHeight="24"
      :iconColor="'currentColor'"
      :iconClass="'mr-2'"
      :detail="'Manage Attendee'"
      :detailClass="'font-semibold'"
      class="px-1 py-0.75 rounded-lg cursor-pointer"
      :class="{
        'text-blue-9 bg-white': isManageAttendeeSelected,
        'text-white hover:bg-white hover:text-blue-11': !isManageAttendeeSelected
      }"
      ><UsersIcon
    /></base-icon-and-detail>
    <base-icon-and-detail
      @click="toManageFeedback"
      :iconWidth="24"
      :iconHeight="24"
      :iconColor="'currentColor'"
      :iconClass="'mr-2'"
      :detail="'Manage Feedback'"
      :detailClass="'font-semibold'"
      class="px-1 py-0.75 rounded-lg cursor-pointer"
      :class="{
        'text-blue-9 bg-white': isManageFeedbackSelected,
        'text-white hover:bg-white hover:text-blue-11': !isManageFeedbackSelected
      }"
      ><MessageIcon
    /></base-icon-and-detail>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseIconAndDetail from "@/commons/UI/BaseIconAndDetail.vue";
import GridIcon from "@/assets/Grid.vue";
import UsersIcon from "@/assets/Users.vue";
import MessageIcon from "@/assets/MessageCircle.vue";
import useOrgNavbarEventNavigation from "./useOrgNavbarEventNavigation";

export default defineComponent({
  name: "OrgNavbarEventNavigation",
  components: {
    BaseIconAndDetail,
    GridIcon,
    UsersIcon,
    MessageIcon
  },
  setup() {
    const {
      isDashBoardSelected,
      isManageAttendeeSelected,
      isManageFeedbackSelected,
      toDashboard,
      toManageAttendee,
      toManageFeedback
    } = useOrgNavbarEventNavigation();

    return {
      isDashBoardSelected,
      isManageAttendeeSelected,
      isManageFeedbackSelected,
      toDashboard,
      toManageAttendee,
      toManageFeedback
    };
  }
});
</script>
