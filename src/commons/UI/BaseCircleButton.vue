<template>
  <button
    :type="type"
    class="bg-transparent focus:bg-primary-2 focus:outline-none border-2 border-gray-4 hover:border-primary focus:border-primary-4 text-primary focus:text-primary-4 rounded-full shadow-xs overflow-hidden"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCircleButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  }
});
</script>
