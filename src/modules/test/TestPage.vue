<template>
  <div class="p-2">
    <EventLoca class="mb-4" />
    <EventInfo class="mb-4" />
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
    <OrgCard class="mt-2" :organization="test.organization" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InfoBanner from "@/commons/components/info-banner/InfoBanner.vue";
import EventDetail from "@/modules/eventInfo/event-detail/EventDetail.vue";
import EventOrganizer from "@/modules/eventInfo/event-organizer/EventOrganizer.vue";
import { testData, questionData } from "./testData";
import OrgCard from "@/modules/orgUserView/org-card/OrgCard.vue";
import EventInfo from "@/modules/organization/createEvent/event-info-form/EventInfoForm.vue";
import EventLoca from "@/modules/organization/createEvent/event-location-form/EventLocationForm.vue";

export default defineComponent({
  name: "TestPage",
  components: {
    InfoBanner,
    EventDetail,
    EventOrganizer,
    OrgCard,
    EventInfo,
    EventLoca
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
