<template>
  <div
    class="flex flex-col items-center py-1.5 px-1 w-30 h-screen sticky left-0 top-0 z-40"
  >
    <router-link to="/org"
      ><section
        class="flex items-center pr-1 w-full h-6 shadow rounded-lg bg-white cursor-pointer mb-3"
      >
        <OrgProfile
          :name="organization.name"
          :profileImg="organization.profilePictureUrl"
          :profileImgHash="organization.profilePictureHash"
          class="mr-1"
        />
        <h2 class="w-full truncate">{{ organization.name }}</h2>
        <base-icon :width="24" :height="24" class="ml-auto"
          ><ChevronLeftIcon
        /></base-icon></section
    ></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import OrgProfile from "../org-profile/OrgProfile.vue";
import ChevronLeftIcon from "@/assets/ChevronLeft.vue";
import { testOrg, testEvent } from "./testData";

export default defineComponent({
  name: "OrgNavbarEvent",
  components: {
    OrgProfile,
    ChevronLeftIcon
  },
  setup() {
    //Get from API
    const organization = ref(testOrg);
    const event = ref(testEvent);

    return { organization, event };
  }
});
</script>
