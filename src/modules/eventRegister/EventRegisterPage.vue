<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <RegistrationStatus :step="step" />
    <div v-if="checkStep2(step)" class="container flex flex-col">
      <div class="mt-4 font-heading text-4xl">Summary</div>
      <PersonalInfoDes class="mt-3" :user="user" />
      <EventAnswer class="mt-3" :question="questionData" />
      <div class="flex justify-between mt-10">
        <base-button @click="decreaseStep" class="w-18 h-4 color"
          >Back</base-button
        >
        <base-button @click="increaseStep" class="w-18 h-4">Sumbit</base-button>
      </div>
    </div>
    <div
      v-else-if="checkStep3(step)"
      class="event-banner flex flex-col items-center justify-center"
    >
      <div class="mt-4 font-heading text-4xl">Congratulations!</div>
      <div class="mt-1 text-gray-5">
        You have successfully registered for...
      </div>
      <InfoBanner :eventBanner="test.eventBanner" class="mt-3" />
      <div class="mt-4 text-gray-5">
        An e-ticket has been sent to your inbox!
      </div>
      <div class="flex mt-6 self-end">
        <base-button class="w-20 h-4 mr-2">Go to event library</base-button>
        <base-button class="w-20 h-4">Browse more event</base-button>
      </div>
    </div>
    <div v-else class="container flex flex-col">
      <div class="mt-4 font-heading text-4xl">Personal Information</div>
      <PersonalInfo class="mt-3" :user="user" />
      <div class="font-heading text-4xl mt-4">Additional Question</div>
      <QuestionText
        class="mt-4"
        v-for="detail in questionData"
        :key="detail.id"
        :question="getQuestion(detail.seq, detail.title)"
        @user-input="handleUserAnswer(detail.id, $event)"
        :answer="detail.answer"
      />
      <div class="flex mt-10 self-end">
        <base-button @click="increaseStep" class="w-18 h-4"
          >Continue</base-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import RegistrationStatus from "./registration-status/RegistrationStatus.vue";
import PersonalInfo from "./personal-info/PersonalInfo.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import InfoBanner from "./info-banner/InfoBanner.vue";
import PersonalInfoDes from "./personal-info-des/PersonalInfoDes.vue";
import QuestionText from "@/modules/question/question-text/QuestionText.vue";
import EventAnswer from "./event-answer/EventAnswer.vue";
import useEventRegister from "./use-event-register";
import testData from "./use-event-register/testData";

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
    const test = reactive(testData);
    const {
      user,
      step,
      increaseStep,
      decreaseStep,
      checkStep2,
      checkStep3,
      getQuestion,
      handleUserAnswer,
      questionData,
      questions
    } = useEventRegister();

    return {
      test,
      user,
      step,
      increaseStep,
      decreaseStep,
      checkStep2,
      checkStep3,
      getQuestion,
      handleUserAnswer,
      questionData,
      questions
    };
  }
});
</script>

<style scoped>
.container {
  max-width: 792px;
}
.event-banner {
  max-width: 960px;
}
.color {
  background: #cbd5e0;
}
</style>
