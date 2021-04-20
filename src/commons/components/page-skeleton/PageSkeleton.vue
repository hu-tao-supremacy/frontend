<template>
  <PageNavbar />
  <div class="content-min-height bg-gray-1">
    <router-view></router-view>
  </div>
  <PageFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageFooter from "@/commons/UI/PageFooter.vue";
import PageNavbar from "@/commons/components/page-navbar/PageNavbar.vue";

export default defineComponent({
  name: "PageSkeleton",
  components: {
    PageFooter,
    PageNavbar
  }
});
</script>
