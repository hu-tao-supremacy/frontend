<template>
  <div class="flex flex-col py-1.5 px-1 w-30 h-screen sticky left-0 top-0 z-40">
    <router-link to="/org/team" class="w-full"
      ><section
        class="flex items-center pr-1 w-full h-6 shadow rounded-lg bg-white cursor-pointer mb-3"
      >
        <OrgProfile
          :name="(currentOrganization && currentOrganization.name) || ''"
          :profileImg="
            currentOrganization && currentOrganization.profilePictureUrl
          "
          :profileImgHash="
            currentOrganization && currentOrganization.profilePictureHash
          "
          class="mr-1"
        />
        <h1 class="max-w-full truncate font-semibold">
          {{ currentOrganization && currentOrganization.name }}
        </h1>
        <base-icon :width="24" :height="24" class="ml-auto flex-shrink-0"
          ><ChevronLeftIcon
        /></base-icon></section
    ></router-link>
    <section class="flex mb-4">
      <div
        class="w-8 h-11 border border-white rounded-sm overflow-hidden mr-2 flex-shrink-0"
      >
        <LazyImage
          :width="100"
          :height="100"
          alt="will change to api"
          :url="event && event.posterImageUrl"
          :placeholder="event && event.posterImageHash"
          class="object-cover w-full h-full"
        />
      </div>
      <h1
        class="font-semibold text-white self-end text-truncate text-truncate-4"
      >
        {{ event && event.name }}
      </h1>
    </section>
    <OrgNavbarEventNavigation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrgProfile from "../org-profile/OrgProfile.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import OrgNavbarEventNavigation from "../org-navbar-event-navigation/OrgNavbarEventNavigation.vue";
import ChevronLeftIcon from "@/assets/ChevronLeft.vue";
import useOrgEvent from "@/modules/organization/event/use-org-event";
import useOrganization from "@/modules/organization/useOrganization";

export default defineComponent({
  name: "OrgNavbarEvent",
  components: {
    OrgProfile,
    LazyImage,
    OrgNavbarEventNavigation,
    ChevronLeftIcon
  },
  setup() {
    const { currentOrganization, organizations } = useOrganization();
    const { event } = useOrgEvent();

    return { currentOrganization, event, organizations };
  }
});
</script>
