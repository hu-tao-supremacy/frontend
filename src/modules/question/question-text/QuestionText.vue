<template>
  <div
    class="w-full shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex flex-col justify-center"
  >
    <h1 class="heading text-xl mb-0.25">{{ questionNumber }} {{ question }}</h1>
    <BaseTextInput class="input-max-width" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import { USER_INPUT } from "@/commons/constant";

export default defineComponent({
  name: "QuestionText",
  components: {
    BaseTextInput
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: [USER_INPUT],
  setup(_, context) {
    const questionNumber = 1;
    const question = "What is your t-shirt size?";
    const userAnswer = ref("");

    function userChange() {
      context.emit(USER_INPUT, userAnswer.value);
    }

    return { questionNumber, question, userChange };
  }
});
</script>

<style scoped>
.input-max-width {
  max-width: 300px;
}
</style>
