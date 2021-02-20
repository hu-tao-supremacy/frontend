<template>
  <h1>Home</h1>
  <CardBanner />
  <CardOrganization class="w-28 bg-pink-200" />
  <CardOrganization class="w-28 bg-pink-200" />
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
