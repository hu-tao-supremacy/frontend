<template>
  <PageNavbar />
  <router-view></router-view>
  <PageFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageFooter from "./commons/UI/PageFooter.vue";
import PageNavbar from "./commons/UI/PageNavbar.vue";

export default defineComponent({
  name: "App",
  components: {
    PageFooter,
    PageNavbar
  }
});
</script>
