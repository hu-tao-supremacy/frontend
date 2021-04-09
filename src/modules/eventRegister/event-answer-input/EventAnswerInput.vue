<template>
  <div class="font-heading text-4xl">Additional Question</div>
  <QuestionText
    class="mt-4"
    v-for="detail in questionInput"
    :key="detail.id"
    :question="detail.seq + '. ' + detail.title"
    @user-input="handleUserAnswer(detail.id, $event)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuestionText from "@/modules/question/question-text/QuestionText.vue";
import { QuestionWithAnswer } from "../type";

export default defineComponent({
  name: "EventAnswerInput",
  props: {
    questionInput: {
      type: Object as () => QuestionWithAnswer[],
      required: true
    }
  },

  components: {
    QuestionText
  }
});
</script>

<style></style>
