<template>
  <div
    class="w-full shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex flex-col justify-center"
  >
    <h1 class="font-heading text-xl mb-0.25">{{ question }}</h1>
    <section class="flex">
      <h2 class="mt-3 mr-4">Strongly Disagree</h2>
      <div
        v-for="(value, index) in values"
        :key="value"
        :class="changeClass(index)"
        class="flex flex-col items-center"
        @click="changeCurrentValue(value)"
      >
        <label :for="value" name="choice" class="mb-0.75">{{ value }}</label>
        <BaseRadio
          :id="value"
          :isChecked="isCurrentValue(value)"
          class="w-2 h-2"
        />
      </div>
      <h2 class="ml-4 mt-3">Strongly Agree</h2>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseRadio from "@/commons/UI/BaseRadio.vue";
import { USER_INPUT } from "@/commons/constant";
import useQuestionRadio from "./useQuestionRadio";

export default defineComponent({
  name: "QuestionRadio",
  components: {
    BaseRadio
  },
  props: {
    question: {
      type: String,
      required: true
    }
  },
  emits: [USER_INPUT],
  setup(_, context) {
    const {
      values,
      currentValue,
      changeCurrentValue,
      isCurrentValue,
      changeClass
    } = useQuestionRadio(context);

    return {
      values,
      currentValue,
      changeCurrentValue,
      isCurrentValue,
      changeClass
    };
  }
});
</script>
