<template>
  <div class="flex justify-center">
    <div class="flex flex-col justify-center w-60">
      <div class="flex items-center">
        <div
          :class="{ 'bg-primary-6': step1 }"
          class="rounded-full bg-gray-5 w-4 h-4 font-heading text-lg text-white flex justify-center items-center text-center -mr-1 z-10"
        >
          1
        </div>
        <div
          :class="{ 'bg-primary-6': step2 }"
          class="h-1 flex-auto bg-gray-5 z-0"
        ></div>
        <div
          :class="{ 'bg-primary-6': step2 }"
          class="rounded-full bg-gray-5 w-4 h-4 font-heading text-lg text-white flex justify-center items-center text-center -mx-1 z-10"
        >
          2
        </div>
        <div
          :class="{ 'bg-primary-6': step3 }"
          class="h-1 flex-auto bg-gray-5 z-0"
        ></div>
        <div
          :class="{ 'bg-primary-6': step3 }"
          class="rounded-full bg-gray-5 w-4 h-4 font-heading text-lg text-white flex justify-center items-center text-center -ml-1 z-10"
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
import useRegistrationStatus from "./useRegistrationStatus";
import { defineComponent } from "vue";
export default defineComponent({
  name: "RegistrationStatus",
  props: {
    step: { type: Number, required: true }
  },
  setup(props) {
    const { step1, step2, step3 } = useRegistrationStatus(props.step);
    return { step1, step2, step3 };
  }
});
</script>

<style></style>
