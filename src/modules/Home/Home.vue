<template>
  <card-banner></card-banner>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardBanner from './components/CardBanner.vue';

export default defineComponent({
  name: 'Home',
  components: { CardBanner },
});
</script>
