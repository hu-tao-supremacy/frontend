<template>
  <h1>Home</h1>
  <CardBanner />
  <CardEvent></CardEvent>
  <br>
  <CardRecommened></CardRecommened>
</template>

<script>
import CardBanner from "./components/CardBanner.vue";
import CardEvent from "./components/card-event/index.vue";
import CardRecommened from "./components/card-recommended/index.vue";
export default {
  components: {
    CardBanner,
    CardEvent,
    CardRecommened
  }
};
</script>
