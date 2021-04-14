<template>
  <div
    v-click-outside="collapseNavbar"
    class="py-4 px-1 flex flex-col items-center h-screen bg-blue-11 sticky left-0 top-0 bottom-0 z-40"
    :class="{ 'w-8': !isExpand, 'w-30': isExpand }"
  >
    <span
      v-if="!isExpand"
      @click="expandNavbar"
      class="flex items-center justify-center cursor-pointer w-full h-5 -mt-1"
      ><base-icon :width="24" :height="24" class="text-white"
        ><MenuIcon /></base-icon
    ></span>
    <span
      v-else
      @click="collapseNavbar"
      class="absolute right-0 top-1 flex justify-center items-center w-5 h-5 cursor-pointer"
      ><base-icon :width="24" :height="24" class="text-white"
        ><XIcon /></base-icon
    ></span>
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
        class="flex items-center h-6 px-1.5 border-2 border-blue-4 rounded-lg overflow-hidden text-white cursor-pointer"
        :class="{ 'w-6': !isExpand, 'w-28': isExpand }"
      >
        <base-icon :width="24" :height="24" class="flex-shrink-0"
          ><PlusIcon
        /></base-icon>
        <h2 v-show="isExpand" class="ml-2.5">Create new org</h2>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import OrgNavbarTeamSelection from "../org-navbar-team-selection/OrgNavbarTeamSelection.vue";
import MenuIcon from "@/assets/Menu.vue";
import XIcon from "@/assets/X.vue";
import PlusIcon from "@/assets/Plus.vue";
import organizationsData from "./testData";
import { Organization } from "@/apollo/types";

export default defineComponent({
  name: "OrgNavbarTeam",
  components: {
    OrgNavbarTeamSelection,
    MenuIcon,
    XIcon,
    PlusIcon
  },
  setup() {
    const isExpand = ref(false);
    const teams = organizationsData;
    const currentSelectedTeamId = ref(-1);

    function expandNavbar() {
      isExpand.value = true;
    }

    function collapseNavbar() {
      isExpand.value = false;
    }

    function isCurrentSelectedTeam(teamId: number) {
      return teamId === currentSelectedTeamId.value;
    }

    function changeSelectedTeam(team: Organization) {
      if (team.id === currentSelectedTeamId.value) return;
      //Also perform provide/inject here
      currentSelectedTeamId.value = team.id;
    }

    function createNewTeam() {
      //Maybe reset provide/inject team
      currentSelectedTeamId.value = -1;
      //Go to create team page
      console.log("To create organization");
    }

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
