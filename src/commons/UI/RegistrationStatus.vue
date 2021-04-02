<template>
  <div class="flex justify-center">
    <div class="flex flex-col justify-center w-60">
      <div class="flex items-center">
        <div
          class="rounded-full bg-gray-5 w-4 h-4 font-heading text-lg text-white flex justify-center items-center text-center -mr-1"
        >
          1
        </div>
        <div class="h-1 flex-auto bg-gray-5"></div>
        <div
          class="rounded-full bg-gray-5 w-4 h-4 font-heading text-lg text-white flex justify-center items-center text-center -mx-1"
        >
          2
        </div>
        <div class="h-1 flex-auto bg-gray-5"></div>
        <div
          class="rounded-full bg-gray-5 w-4 h-4 font-heading text-lg text-white flex justify-center items-center text-center -ml-1"
        >
          3
        </div>
      </div>
      <div class="flex justify-between">
        <div class="w-4 text-center flex justify-center whitespace-nowrap">
          Fill in Info
        </div>
        <div class="w-4 text-center flex justify-center whitespace-nowrap">
          Check Info
        </div>
        <div class="w-4 text-center flex justify-center whitespace-nowrap">
          Done
        </div>
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
