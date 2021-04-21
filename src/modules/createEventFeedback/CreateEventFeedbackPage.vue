<template>
  <div class="flex flex-col p-4 items-center w-full">
    <div class="flex flex-col justify-center w-full content-max-width-s">
      <div class="text-4xl font-heading mb-3">Event Feedback</div>
      <QuestionStarPreview class="mb-6" />
      <div
        v-for="(group, gIndex) in questionGroups"
        :key="group.seq"
        class="mb-6"
      >
        <CategoryInput
          :question="'Category' + ' ' + (gIndex + 1)"
          :questionId="group.seq"
          class="mb-1"
          @user-input="handleUserInput(gIndex, $event)"
          @remove="popCategory(gIndex)"
        />
        <div>
          <div
            v-for="(question, index) in group.questions"
            :key="question.seq"
            class="mb-1"
          >
            <QuestionRadioPreview
              v-if="checkQuestionTypeScale(question.answerType)"
              :question="'Question' + ' ' + (index + 1)"
              :questionId="question.seq"
              @user-input="handleQuestionInput(gIndex, index, $event)"
              @delete="popQuestion(gIndex, index)"
            />
            <QuestionTextPreview
              v-else
              :question="'Question' + ' ' + (index + 1)"
              :questionId="question.seq"
              @user-input="handleQuestionInput(gIndex, index, $event)"
              @delete="popQuestion(gIndex, index)"
            />
          </div>
          <div
            class="shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex justify-center"
          >
            <base-button class="mr-4 w-27 h-4" @click="addTextQuestion(gIndex)"
              >Add a Text Answer Question</base-button
            >
            <base-button class="w-27 h-4" @click="addScaleQuestion(gIndex)"
              >Add a Scale Answer Question</base-button
            >
          </div>
        </div>
      </div>
      <div
        class="shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex justify-center w-full mb-4"
      >
        <base-button @click="addCategory" class="w-22 h-4">
          Add a Category Header
        </base-button>
      </div>
      <div class="flex justify-end">
        <div
          class="text-primary-6 self-end inline-block align-text-bottom mr-3"
        >
          ** Once published, cannot be edited
        </div>
        <base-button class="w-16 h-4">Publish</base-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import CategoryInput from "./category-input/CategoryInput.vue";
import QuestionTextPreview from "./question-text-preview/QuestionTextPreview.vue";
import QuestionRadioPreview from "./question-radio-preview/QuestionRadioPreview.vue";
import QuestionStarPreview from "./question-star-preview/QuestionStarPreview.vue";
import useCreateEventFeedback from "./use-create-event-feedback";

export default defineComponent({
  name: "CreateFeedback",
  components: {
    BaseButton,
    CategoryInput,
    QuestionTextPreview,
    QuestionRadioPreview,
    QuestionStarPreview
  },
  setup() {
    const {
      eventID,
      addCategory,
      questionGroups,
      popCategory,
      handleUserInput,
      checkQuestionTypeScale,
      addTextQuestion,
      addScaleQuestion,
      popQuestion,
      handleQuestionInput
    } = useCreateEventFeedback();

    return {
      eventID,
      addCategory,
      questionGroups,
      popCategory,
      handleUserInput,
      checkQuestionTypeScale,
      addTextQuestion,
      addScaleQuestion,
      popQuestion,
      handleQuestionInput
    };
  }
});
</script>

<style></style>
