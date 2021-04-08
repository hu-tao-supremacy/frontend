<template>
  <div class="bg-gray-1 p-2">
    <div class="w-100 mb-4"><CreateOrgForm /></div>
    <QuestionStar class="mb-4" />
    <QuestionRadio class="mb-4" :question="question.radio" />
    <QuestionText class="mb-4" :question="question.text" />
    <InfoBanner
      :style="{ maxWidth: '960px' }"
      :eventBanner="test.eventBanner"
    />
    <EventDetail
      class="mt-2"
      :style="{ maxWidth: '628px' }"
      :eventDetail="test.eventDetail"
    />
    <EventOrganizer
      class="mt-2"
      :style="{ maxWidth: '300px' }"
      :eventOrg="test.eventOrganizer"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InfoBanner from "@/modules/eventInfo/info-banner/InfoBanner.vue";
import EventDetail from "@/modules/eventInfo/event-detail/EventDetail.vue";
import EventOrganizer from "@/modules/eventInfo/event-organizer/EventOrganizer.vue";
import { testData, questionData } from "./testData";
import QuestionText from "@/modules/question/question-text/QuestionText.vue";
import QuestionRadio from "@/modules/question/question-radio/QuestionRadio.vue";
import QuestionStar from "@/modules/question/question-star/QuestionStar.vue";
import CreateOrgForm from "@/modules/organization/createOrg/create-org-form/CreateOrgForm.vue";

export default defineComponent({
  name: "TestPage",
  components: {
    InfoBanner,
    EventDetail,
    EventOrganizer,
    QuestionText,
    QuestionRadio,
    QuestionStar,
    CreateOrgForm
  },
  setup() {
    const test = testData;
    const question = questionData;

    return {
      test,
      question
    };
  }
});
</script>
