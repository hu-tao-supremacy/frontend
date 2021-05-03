<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="{
      'flex items-center justify-center bg-transparent hover:text-gray-5 focus:text-primary focus:outline-none': !disabled,
      'flex items-center justify-center text-gray-5 cursor-not-allowed bg-transparent': disabled
    }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseTransparentButton",
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
