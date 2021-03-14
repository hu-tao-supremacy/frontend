<template>
  <button
    class="bg-primary rounded-lg text-white font-medium font-body shadow-xs hover:bg-primary-7 focus:outline-none border-3 border-transparent focus:border-primary-5 "
    :type="type"
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
    }
  }
});
</script>
