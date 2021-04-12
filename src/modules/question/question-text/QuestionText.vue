<template>
  <div
    class="w-full shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex flex-col justify-center"
  >
    <label for="question" class="w-max font-heading text-xl mb-0.25">{{
      question
    }}</label>
    <BaseTextInput
      id="question"
      v-model="userAnswer"
      @input="userChange"
      class="input-max-width h-4"
      :placeholder="placeholderText"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import { USER_INPUT } from "@/commons/constant";
import useQuestionText from "./useQuestionText";

export default defineComponent({
  name: "QuestionText",
  components: {
    BaseTextInput
  },
  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      default: ""
    },
    placeholderText: {
      type: String,
      default: ""
    }
  },
  emits: [USER_INPUT],
  setup(props, context) {
    const { userAnswer, userChange } = useQuestionText(context, props.answer);
    return { userAnswer, userChange };
  }
});
</script>

<style scoped>
.input-max-width {
  max-width: 300px;
}
</style>
