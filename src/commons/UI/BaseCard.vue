<template>
  <div class="rounded-2xl overflow-hidden" :style="{ maxWidth: maxCardWidth }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCard",
  props: {
    maxCardWidth: {
      type: String,
      default: "960px"
    }
  }
});
</script>
