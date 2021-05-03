<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <div class="content-max-width-s flex flex-col w-full">
      <div class="font-heading text-4xl">Event Feedback</div>
      <div class="text-gray-5">
        {{ eventName }}
      </div>
      <QuestionStar @user-input="changeRating($event)" class="mt-3" />
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
            v-if="checkQuestionTypeScale(question.answerType)"
            @user-input="updateAnswer(question.id, $event)"
            :question="question.title"
            :questionId="question.id"
          />
          <QuestionText
            v-else
            @user-input="updateAnswer(question.id, $event)"
            :question="question.title"
            :questionId="question.id"
            :placeholderText="placeholder"
          />
        </div>
      </div>
      <div class="flex mt-3 self-end">
        <base-button
          :disabled="!isValidated"
          @click="submitEventFeedback"
          class="w-18 h-4"
          >Submit</base-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuestionStar from "@/modules/question/question-star/QuestionStar.vue";
import QuestionText from "@/modules/question/question-text/QuestionText.vue";
import QuestionRadio from "@/modules/question/question-radio/QuestionRadio.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import useEventFeedback from "./use-event-feedback";

export default defineComponent({
  name: "EventFeedback",
  components: { QuestionStar, QuestionText, QuestionRadio, BaseButton },
  setup() {
    const {
      checkQuestionTypeScale,
      questionGroupData,
      eventName,
      placeholder,
      submitEventFeedback,
      changeRating,
      updateAnswer,
      isValidated
    } = useEventFeedback();

    return {
      checkQuestionTypeScale,
      questionGroupData,
      eventName,
      placeholder,
      submitEventFeedback,
      changeRating,
      updateAnswer,
      isValidated
    };
  }
});
</script>

<style scoped></style>
