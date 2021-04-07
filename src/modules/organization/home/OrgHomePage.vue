<template>
  <TeamPage v-if="hasTeam" />
  <GreetingPage v-else />
  <button class="bg-primary w-10" @click="togglePage">Switch</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import GreetingPage from "./greeting/GreetingPage.vue";
import TeamPage from "./team/TeamPage.vue";

export default defineComponent({
  name: "OrgHomePage",
  components: {
    TeamPage,
    GreetingPage
  },
  setup() {
    //Later will read from backend whether user has team
    const hasTeam = ref(false);

    function togglePage() {
      console.log("toggle", hasTeam.value);
      hasTeam.value = !hasTeam.value;
    }

    return { hasTeam, togglePage };
  }
});
</script>
