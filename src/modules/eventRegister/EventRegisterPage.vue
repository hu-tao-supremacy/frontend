<template>
  <div class="flex flex-col p-4 items-center w-full">
    <div class="flex flex-col items-center content-max-width w-full">
      <RegistrationStatus :step="step" />
      <div v-if="checkStep2(step)" class="container flex flex-col">
        <div class="mt-4 font-heading text-4xl">Summary</div>
        <PersonalInfoDes class="mt-3" :user="user" :faculty="userFaculty" />
        <EventAnswer class="mt-3" :question="questionData" />
        <div class="flex justify-between mt-10">
          <base-button @click="decreaseStep" class="w-18 h-4 color"
            >Back</base-button
          >
          <base-button @click="sendAnswer" class="w-18 h-4">Submit</base-button>
        </div>
      </div>
      <div
        v-else-if="checkStep3(step)"
        class="event-banner flex flex-col items-center justify-center w-full"
      >
        <div class="mt-4 font-heading text-4xl">Congratulations!</div>
        <div class="mt-1 text-gray-5">
          You have successfully registered for...
        </div>
        <InfoBanner :eventBanner="event" class="mt-3 w-full" />
        <div class="mt-4 text-gray-5">
          An e-ticket has been sent to your inbox!
        </div>
        <div class="flex mt-6 self-end">
          <router-link to="/wallet">
            <base-button class="w-20 h-4 mr-2">Go to event library</base-button>
          </router-link>
          <router-link to="/">
            <base-button class="w-20 h-4">Browse more event</base-button>
          </router-link>
        </div>
      </div>
      <div v-else class="container flex flex-col">
        <div class="mt-4 font-heading text-4xl">Personal Information</div>
        <PersonalInfo class="mt-3" :user="user" :faculty="userFaculty" />
        <div v-if="hasQuestions">
          <div class="font-heading text-4xl mt-4">Additional Question</div>
          <QuestionText
            class="mt-4"
            v-for="detail in questionData"
            :key="detail.id"
            :questionId="detail.id"
            :optional="detail.isOptional"
            :question="getQuestion(detail.seq, detail.title)"
            @user-input="handleUserAnswer(detail.id, $event)"
            :answer="detail.answer && detail.answer.value"
            :placeholderText="placeholder"
          />
        </div>
        <div class="flex mt-10 self-end">
          <base-button
            @click="increaseStep"
            :disabled="!isValidated"
            class="w-18 h-4"
            >Continue</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegistrationStatus from "./registration-status/RegistrationStatus.vue";
import PersonalInfo from "./personal-info/PersonalInfo.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import InfoBanner from "@/commons/components/info-banner/InfoBanner.vue";
import PersonalInfoDes from "./personal-info-des/PersonalInfoDes.vue";
import QuestionText from "@/modules/question/question-text/QuestionText.vue";
import EventAnswer from "./event-answer/EventAnswer.vue";
import useEventRegister from "./use-event-register";

export default defineComponent({
  name: "EventRegisterPage",
  components: {
    RegistrationStatus,
    PersonalInfo,
    PersonalInfoDes,
    BaseButton,
    InfoBanner,
    QuestionText,
    EventAnswer
  },
  setup() {
    const placeholder = "Write your answer here!";
    const {
      user,
      userFaculty,
      step,
      increaseStep,
      decreaseStep,
      sendAnswer,
      checkStep2,
      checkStep3,
      getQuestion,
      handleUserAnswer,
      questionData,
      event,
      isValidated,
      hasQuestions
    } = useEventRegister();

    return {
      placeholder,
      user,
      userFaculty,
      step,
      increaseStep,
      decreaseStep,
      sendAnswer,
      checkStep2,
      checkStep3,
      getQuestion,
      handleUserAnswer,
      questionData,
      event,
      isValidated,
      hasQuestions
    };
  }
});
</script>

<style scoped>
.color {
  background: #cbd5e0;
}
</style>
