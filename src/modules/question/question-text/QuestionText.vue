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
      class="input-max-width"
    />
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
    question: {
      type: String,
      required: true
    }
  },
  emits: [USER_INPUT],
  setup(_, context) {
    const userAnswer = ref("");

    function userChange() {
      context.emit(USER_INPUT, userAnswer.value);
    }

    return { userAnswer, userChange };
  }
});
</script>

<style scoped>
.input-max-width {
  max-width: 300px;
}
</style>
