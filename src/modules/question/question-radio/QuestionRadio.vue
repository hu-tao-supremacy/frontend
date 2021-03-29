<template>
  <div
    class="w-full shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex flex-col justify-center"
  >
    <h1 class="font-heading text-xl mb-0.25">{{ question }}</h1>
    <section class="flex">
      <h2 class="mt-3 mr-4">Strongly Disagree</h2>
      <div
        v-for="value in values"
        :key="value"
        class="flex flex-col items-center mr-8"
        @click="changeCurrentValue(value)"
      >
        <label :for="value" name="choice" class="mb-0.75">{{ value }}</label>
        <BaseRadio
          :id="value"
          :isChecked="currentValue === value"
          class="w-2 h-2"
        />
      </div>
      <h2 class="mt-3">Strongly Agree</h2>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseRadio from "@/commons/UI/BaseRadio.vue";
import { USER_INPUT } from "@/commons/constant";

export default defineComponent({
  name: "QuestionRadio",
  components: {
    BaseRadio
  },
  emits: [USER_INPUT],
  setup(_, context) {
    const question = "I learned useful knowledge from these activities.";
    const values = [1, 2, 3, 4, 5];
    const currentValue = ref(-1);

    function changeCurrentValue(value: number) {
      currentValue.value = value;
      context.emit(USER_INPUT, currentValue.value);
    }

    return { question, values, currentValue, changeCurrentValue };
  }
});
</script>
