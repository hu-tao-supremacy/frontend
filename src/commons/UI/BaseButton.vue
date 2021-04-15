<template>
  <button
    class="rounded-lg font-body shadow-xs focus:outline-none"
    :type="type"
    :disabled="disabled"
    :class="{
      'bg-primary border-3 hover:bg-primary-7 border-transparent focus:border-primary-5 text-white': !disabled,
      'bg-gray-1 border border-gray-4 cursor-not-allowed text-gray-5': disabled
    }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
</script>
