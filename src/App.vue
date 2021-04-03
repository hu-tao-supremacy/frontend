<template>
  <AuthProvider>
    <router-view></router-view>
  </AuthProvider>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import apolloClient from "./apollo/client";
import { DefaultApolloClient } from "@vue/apollo-composable";
import AuthProvider from "@/modules/authentication/components/AuthProvider.vue";

export default defineComponent({
  name: "App",
  components: {
    AuthProvider
  },
  setup() {
    provide(DefaultApolloClient, apolloClient);
  }
});
</script>
