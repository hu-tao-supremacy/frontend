<template>
  <h1>Home</h1>
  <!-- Will change sizing when use for real -->
  <CardBanner :style="{ width: '960px' }" />
  <CardOrganization />
  <CardOrganization />
  <CardInterest />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardBanner from "./components/CardBanner.vue";
import CardOrganization from "./components/CardOrganization.vue";
import CardInterest from "./components/CardInterest.vue";

export default defineComponent({
  components: {
    CardBanner,
    CardOrganization,
    CardInterest
  }
});
</script>
