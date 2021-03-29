<template>
  <div class="flex flex-col justify-between min-h-screen">
    <PageNavbar />
    <router-view></router-view>
    <PageFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import PageFooter from "./commons/UI/PageFooter.vue";
import PageNavbar from "./commons/UI/page-navbar/PageNavbar.vue";
import apolloClient from "./apollo/client";
import { DefaultApolloClient } from "@vue/apollo-composable";

export default defineComponent({
  name: "App",
  components: {
    PageFooter,
    PageNavbar
  },
  setup() {
    provide(DefaultApolloClient, apolloClient);
  }
});
</script>
