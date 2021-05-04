<template>
  <AuthProvider>
    <Signup v-if="isSignup" />
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
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
  },
  created() {
    (this as any).$Progress.start();
    this.$router.beforeEach((to, _, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        const meta = to.meta.progress;
        // parse meta tags
        (this as any).$Progress.parseMeta(meta);
      }
      //  start the progress bar
      (this as any).$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach(_ => {
      //  finish the progress bar
      (this as any).$Progress.finish();
    });
  },
  mounted() {
    (this as any).$Progress.finish();
  }
});
</script>
