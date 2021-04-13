<template>
  <div class="bg-gray-1 p-2">
    <QuestionText
      class="mb-4"
      :question="question.text"
      :questionId="'question'"
    />
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
import InfoBanner from "@/commons/components/info-banner/InfoBanner.vue";
import EventDetail from "@/modules/eventInfo/event-detail/EventDetail.vue";
import EventOrganizer from "@/modules/eventInfo/event-organizer/EventOrganizer.vue";
import { testData, questionData } from "./testData";
import QuestionText from "@/modules/question/question-text/QuestionText.vue";

export default defineComponent({
  name: "TestPage",
  components: {
    InfoBanner,
    EventDetail,
    EventOrganizer,
    QuestionText
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
