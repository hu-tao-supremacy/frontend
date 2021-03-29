<template>
  <div class="flex justify-center items-center">
    <div class="w-24 h-1 bg-gray-5 relative z-10">
      <div
        class="rounded-full h-4 w-4 bg-gray-5 font-heading text-lg text-white flex flex-col justify-center text-center absolute -left-2 -top-1.5"
      >
        1 
      </div>
      <div
        class="rounded-full h-4 w-4 bg-gray-5 font-heading text-lg text-white flex flex-col justify-center text-center absolute -right-2 -top-1.5"
      >
        2
      </div>
    </div>
    <div class="w-24 h-1 bg-gray-5 relative">
      <div
        class="rounded-full h-4 w-4 bg-gray-5 font-heading text-lg text-white flex flex-col justify-center text-center absolute -right-2 -top-1.5"
      >
        3
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegistrationStatus"
});
</script>

<style></style>
