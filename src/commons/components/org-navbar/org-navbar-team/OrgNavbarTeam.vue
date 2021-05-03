<template>
  <div
    v-click-outside="collapseNavbar"
    class="py-4 px-1 flex flex-col items-center h-screen bg-blue-11 sticky left-0 top-0 bottom-0 z-40"
    :class="{ 'w-8': !isExpand, 'w-30': isExpand }"
  >
    <base-transparent-button
      v-if="!isExpand"
      @click="expandNavbar"
      class="w-full h-5 -mt-1 text-white"
      ><base-icon :width="24" :height="24"><MenuIcon /></base-icon
    ></base-transparent-button>
    <base-transparent-button
      v-else
      @click="collapseNavbar"
      class="absolute right-0 top-1 w-5 h-5 text-white"
      ><base-icon :width="24" :height="24"><XIcon /></base-icon
    ></base-transparent-button>
    <section
      class="items-center"
      :class="{ 'mt-3': !isExpand, 'mt-7': isExpand }"
    >
      <OrgNavbarTeamSelection
        v-for="team in teams"
        :key="team.id"
        @click="changeSelectedTeam(team)"
        :organization="team"
        :isExpand="isExpand"
        :isSelected="isCurrentSelectedTeam(team.id)"
        class="mb-2"
      />
      <div
        @click="createNewTeam"
        class="group flex items-center h-6 px-1.5 border-2 border-blue-4 rounded-lg overflow-hidden text-white cursor-pointer hover:bg-white  hover:border-transparent hover:text-blue-11"
        :class="{ 'w-6': !isExpand, 'w-28': isExpand }"
      >
        <base-icon :width="24" :height="24" class="flex-shrink-0"
          ><PlusIcon
        /></base-icon>
        <h2 v-show="isExpand" class="ml-2.5 font-semibold">Create new org</h2>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrgNavbarTeamSelection from "../org-navbar-team-selection/OrgNavbarTeamSelection.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import MenuIcon from "@/assets/Menu.vue";
import XIcon from "@/assets/X.vue";
import PlusIcon from "@/assets/Plus.vue";
import useOrgNavbarTeam from "./useOrgNavbarTeam";

export default defineComponent({
  name: "OrgNavbarTeam",
  components: {
    OrgNavbarTeamSelection,
    BaseTransparentButton,
    MenuIcon,
    XIcon,
    PlusIcon
  },
  setup() {
    const {
      isExpand,
      expandNavbar,
      collapseNavbar,
      teams,
      isCurrentSelectedTeam,
      changeSelectedTeam,
      createNewTeam
    } = useOrgNavbarTeam();

    return {
      isExpand,
      expandNavbar,
      collapseNavbar,
      teams,
      isCurrentSelectedTeam,
      changeSelectedTeam,
      createNewTeam
    };
  }
});
</script>
