<template>
  <button
    class="bg-primary rounded-lg text-white font-body shadow-xs hover:bg-primary-7 focus:outline-none border-3 border-transparent focus:border-primary-5 "
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton"
});
</script>
