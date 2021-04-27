<template>
  <button
    class="rounded-lg font-body shadow-xs focus:outline-none bg-gray-3 border-3 hover:bg-gray-2 border-transparent focus:border-gray-5 text-gray-6"
    :type="type"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GrayButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  }
});
</script>
