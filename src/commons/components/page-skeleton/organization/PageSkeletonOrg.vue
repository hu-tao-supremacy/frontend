<template>
  <section class="flex flex-col w-full h-full">
    <!-- Need to change to org navbar -->
    <PageNavbar />
    <router-view></router-view>
    <PageFooter />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageFooter from "@/commons/UI/PageFooter.vue";
import PageNavbar from "@/commons/components/page-navbar/PageNavbar.vue";

export default defineComponent({
  name: "PageSkeletonOrg",
  components: {
    PageFooter,
    PageNavbar
  }
});
</script>
