<template>
  <div class="flex flex-col p-4 items-center w-full">
    <div class="flex flex-col justify-center w-full content-max-width-s">
      <div class="text-4xl font-heading mb-3">Event Feedback</div>
      <QrReader />
      <div v-if="hasForm">
        <QuestionStarPreview class="mb-6" />
        <div
          v-for="(group, groupIndex) in questionGroups"
          :key="'group' + group.seq"
          class="mb-6"
        >
          <CategoryInput
            :question="getCategory(groupIndex)"
            :questionId="group.seq"
            class="mb-1"
            @user-input="handleUserInput(groupIndex, $event)"
            @remove="popCategory(groupIndex)"
            :placeholderText="'Name your category here!'"
          />
          <div>
            <div
              v-for="(question, index) in group.questions"
              :key="'question' + question.seq"
              class="mb-1"
            >
              <QuestionRadioPreview
                v-if="checkQuestionTypeScale(question.answerType)"
                :question="getQuestion(index)"
                :questionId="question.seq"
                @user-input="handleQuestionInput(groupIndex, index, $event)"
                @delete="popQuestion(groupIndex, index)"
                :placeholderText="'Enter your question here!'"
              />
              <QuestionTextPreview
                v-else
                :question="getQuestion(index)"
                :questionId="question.seq"
                @user-input="handleQuestionInput(groupIndex, index, $event)"
                @delete="popQuestion(groupIndex, index)"
                :placeholderText="'Enter your question here!'"
              />
            </div>
            <div
              class="shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex justify-center"
            >
              <base-button
                class="mr-4 w-27 h-4"
                @click="addTextQuestion(groupIndex)"
                >Add a Text Answer Question</base-button
              >
              <base-button
                class="w-27 h-4"
                @click="addScaleQuestion(groupIndex)"
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
          <base-button
            class="w-16 h-4"
            @click="submitQuestions"
            :disabled="!isValidated"
            >Publish</base-button
          >
        </div>
      </div>
      <div class="flex flex-col" v-else>
        <base-button class="w-18 h-4" @click="toggleForm"
          >Create Feedback</base-button
        >
        <base-icon
          :width="568"
          :height="568"
          :viewBox="'0 0 568 568'"
          class="text-transparent mt-4 self-center"
          ><DesignTeamIcon
        /></base-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import CategoryInput from "./category-input/CategoryInput.vue";
import QuestionTextPreview from "@/modules/question/question-text-preview/QuestionTextPreview.vue";
import QuestionRadioPreview from "@/modules/question/question-radio-preview/QuestionRadioPreview.vue";
import QuestionStarPreview from "@/modules/question/question-star-preview/QuestionStarPreview.vue";
import useCreateEventFeedback from "./use-create-event-feedback";
import DesignTeamIcon from "@/assets/DesignTeam.vue";
import QrReader from "@/commons/UI/qr-reader/QrReader.vue";

export default defineComponent({
  name: "CreateFeedback",
  components: {
    BaseButton,
    CategoryInput,
    QuestionTextPreview,
    QuestionRadioPreview,
    QuestionStarPreview,
    DesignTeamIcon,
    QrReader
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
      handleQuestionInput,
      submitQuestions,
      isValidated,
      getCategory,
      getQuestion,
      hasForm,
      toggleForm
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
      handleQuestionInput,
      submitQuestions,
      isValidated,
      getCategory,
      getQuestion,
      hasForm,
      toggleForm
    };
  }
});
</script>

<style></style>
