<template>
  <div
    class="flex flex-col justify-between // w-27 h-14 // p-2 // text-lg // bg-white // rounded-2xl shadow-sm"
  >
    <h5 class="font-semibold text-gray-5">{{ text }}</h5>
    <h1 class="font-semibold text-4xl">{{ count }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dashboard",
  props: {
    text: {
      type: String
    },
    count: {
      type: Number
    }
  }
});
</script>
