<template>
  <div class="flex">
    <section class="min-h-full bg-blue-11"><OrgNavbarTeam /></section>
    <section class="flex flex-col w-full h-full">
      <PageNavbar />
      <router-view></router-view>
      <PageFooter />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageFooter from "@/commons/UI/PageFooter.vue";
import PageNavbar from "@/commons/components/page-navbar/PageNavbar.vue";
import OrgNavbarTeam from "@/commons/components/org-navbar-team/OrgNavbarTeam.vue";

export default defineComponent({
  name: "PageSkeletonOrgTeam",
  components: {
    PageFooter,
    PageNavbar,
    OrgNavbarTeam
  }
});
</script>
