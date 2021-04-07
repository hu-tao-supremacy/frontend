<template>
  <div class="bg-gray-1 p-2">
    <OrgBanner :org="test.eventOrganizer" class="mb-2" />
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
import OrgBanner from "@/modules/organization/home/org-banner/OrgBanner.vue";

export default defineComponent({
  name: "TestPage",
  components: {
    InfoBanner,
    EventDetail,
    EventOrganizer,
    QuestionText,
    QuestionRadio,
    QuestionStar,
    OrgBanner
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
