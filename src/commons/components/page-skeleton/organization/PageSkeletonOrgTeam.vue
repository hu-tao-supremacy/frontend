<template>
  <div class="flex">
    <section class="min-h-full bg-blue-11 relative"><OrgNavbarTeam /></section>
    <PageSkeleton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrgNavbarTeam from "@/commons/components/org-navbar/org-navbar-team/OrgNavbarTeam.vue";
import PageSkeleton from "./PageSkeletonOrg.vue";

export default defineComponent({
  name: "PageSkeletonOrgTeam",
  components: {
    OrgNavbarTeam,
    PageSkeleton
  }
});
</script>
