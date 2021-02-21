<template>
  <h1>Home</h1>
  <!-- Will change sizing when use for real -->
  <CardBanner :style="{ width: '960px' }" />
  <CardOrganization class="w-28" />
  <CardOrganization class="w-28" />
  <br />
  <CardRecommened />
  <br />
  <CardEvent />
  <br />
  <CardInterest class="w-16" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardBanner from "./components/CardBanner.vue";
import CardEvent from "./components/CardEvent.vue";
import CardRecommened from "./components/CardRecommended.vue";
import CardOrganization from "./components/CardOrganization.vue";
import CardInterest from "./components/CardInterest.vue";

export default defineComponent({
  components: {
    CardBanner,
    CardEvent,
    CardRecommened,
    CardOrganization,
    CardInterest
  }
});
</script>
