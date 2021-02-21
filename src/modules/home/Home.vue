<template>
  <h1>Home</h1>
  <!-- Will change sizing when use for real -->
  <CardBanner :style="{ width: '960px' }" />
  <CardOrganization class="w-28" />
  <CardOrganization class="w-28" />
</template>

<script>
import CardBanner from "./components/CardBanner.vue";
import CardOrganization from "./components/CardOrganization.vue";

export default {
  components: {
    CardBanner,
    CardOrganization
  }
};
</script>
