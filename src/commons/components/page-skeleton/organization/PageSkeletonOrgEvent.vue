<template>
  <div class="flex">
    <section class="min-h-full bg-blue-11 relative"><OrgNavbarEvent /></section>
    <PageSkeleton />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import OrgNavbarEvent from "@/commons/components/org-navbar/org-navbar-event/OrgNavbarEvent.vue";
import PageSkeleton from "./PageSkeletonOrg.vue";
import { organizationEventSymbol } from "@/modules/organization/event/use-org-event/constant";
import useOrgEventHooks from "@/modules/organization/event/use-org-event/useOrgEventHooks";

export default defineComponent({
  name: "PageSkeletonOrgEvent",
  components: {
    OrgNavbarEvent,
    PageSkeleton
  },
  setup() {
    provide(organizationEventSymbol, useOrgEventHooks());
  }
});
</script>
