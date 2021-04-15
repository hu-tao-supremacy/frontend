<template>
  <div
    class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full content-min-height "
  >
    <div class="content-max-width-s">
      <QuestionText :question="hello" />
      <QuestionTextPreview :question="hello" />
      <QuestionRadioPreview :question="hello" />
    </div>
  </div>
</template>

<script>
import QuestionTextPreview from "./question-text-preview/QuestionTextPreview.vue";
import QuestionRadioPreview from "./question-radio-preview/QuestionRadioPreview.vue";
import QuestionText from "@/modules/question/question-text/QuestionText.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuestionGroup",
  components: {
    QuestionTextPreview,
    QuestionRadioPreview,
    QuestionText
  },
  setup() {
    const hello = "hello";
    return {
      hello
    };
  }
});
</script>

<style></style>
