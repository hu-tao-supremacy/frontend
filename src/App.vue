<template>
  <PageNavbar />
  <router-view></router-view>
  <PageFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageFooter from "./commons/UI/PageFooter.vue";
import PageNavbar from "./commons/UI/page-navbar/PageNavbar.vue";

export default defineComponent({
  name: "App",
  components: {
    PageFooter,
    PageNavbar
  }
});
</script>
