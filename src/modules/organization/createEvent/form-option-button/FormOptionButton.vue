<template>
  <button
    type="button"
    class="px-2 h-3.75 rounded-lg shadow-xs overflow-hidden focus:outline-none"
    :class="{
      'bg-primary text-white': isSelected,
      'bg-gray-3 hover:bg-gray-4': !isSelected
    }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormOptionButton",
  props: {
    isSelected: {
      type: Boolean,
      required: true
    }
  }
});
</script>
