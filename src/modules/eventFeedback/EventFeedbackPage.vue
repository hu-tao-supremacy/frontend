<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <div class="container flex flex-col">
      <div class="font-heading text-4xl">Event Feedback</div>
      <div class="text-gray-5">
        {{ eventName }}
      </div>
      <QuestionStar class="mt-3" />
      <div v-for="group in questionGroupData" :key="group.id" class="mt-3">
        <div class="font-heading text-2xl">
          Category {{ group.seq }}: {{ group.title }}
        </div>
        <div
          v-for="question in group.questions"
          :key="question.id"
          class="mt-3"
        >
          <QuestionRadio
            v-if="question.answerType === 'SCALE'"
            :question="question.title"
          />
          <QuestionText
            v-else
            :question="question.title"
            :placeholderText="placeholder"
          />
        </div>
      </div>
      <div class="flex mt-3 self-end">
        <base-button class="w-18 h-4">Submit</base-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { QuestionGroup } from "@/apollo/types";
import { defineComponent, reactive, ref } from "vue";
import { useEvents } from "./api";
import QuestionStar from "@/modules/question/question-star/QuestionStar.vue";
import QuestionText from "@/modules/question/question-text/QuestionText.vue";
import QuestionRadio from "@/modules/question/question-radio/QuestionRadio.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";

export default defineComponent({
  name: "EventFeedback",
  components: { QuestionStar, QuestionText, QuestionRadio, BaseButton },
  setup() {
    const questionGroupData = reactive([] as QuestionGroup[]);
    const eventName = ref("");
    const { onResult } = useEvents();
    const placeholder = "Write your answer here!";

    onResult(result => {
      Object.assign(questionGroupData, result.data.event.questionGroups);
      eventName.value = result.data.event.name;
    });
    return {
      questionGroupData,
      eventName,
      placeholder
    };
  }
});
</script>

<style scoped>
.container {
  max-width: 794px;
}
</style>
