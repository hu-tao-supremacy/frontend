<template>
  <AuthProvider>
    <Signup v-if="isSignup" />
    <router-view></router-view>
  </AuthProvider>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, provide } from "vue";
import apolloClient from "./apollo/client";
import { DefaultApolloClient } from "@vue/apollo-composable";
import AuthProvider from "@/modules/authentication/components/AuthProvider.vue";
import { useRoute } from "vue-router";

const Signup = defineAsyncComponent(() =>
  import("@/modules/signup/Signup.vue")
);

export default defineComponent({
  name: "App",
  components: {
    AuthProvider,
    Signup
  },
  setup() {
    provide(DefaultApolloClient, apolloClient);

    const route = useRoute();
    const isSignup = computed(() => {
      const signup = route.query.signup;
      return signup === "1";
    });

    return { isSignup };
  }
});
</script>
