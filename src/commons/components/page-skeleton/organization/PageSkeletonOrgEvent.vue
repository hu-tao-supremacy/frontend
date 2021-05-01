<template>
  <div class="flex">
    <section class="min-h-full bg-blue-11 relative"><OrgNavbarEvent /></section>
    <PageSkeleton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrgNavbarEvent from "@/commons/components/org-navbar/org-navbar-event/OrgNavbarEvent.vue";
import PageSkeleton from "./PageSkeletonOrg.vue";

export default defineComponent({
  name: "PageSkeletonOrgEvent",
  components: {
    OrgNavbarEvent,
    PageSkeleton
  }
});
</script>
