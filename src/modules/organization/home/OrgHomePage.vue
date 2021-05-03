<template>
  <TeamPage v-if="!notHasTeam" />
  <GreetingPage v-else />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch } from "vue";
import useOrganization from "../useOrganization";
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
    const { organizations } = useOrganization();
    const notHasTeam = computed(
      () => organizations.value && !organizations.value?.length
    );

    return { notHasTeam };
  }
});
</script>
