<template>
  <section class="flex flex-col w-full h-full">
    <PageNavbar :isOrgView="true" />
    <div class="content-min-height bg-gray-1">
      <router-view></router-view>
    </div>
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
