<template>
  <div
    class="bg-gray-1 flex flex-col mx-4 justify-center items-center w-full md:mx-0"
  >
    <div class="container">
      <InfoBanner
        class="mt-4"
        :style="{ maxWidth: '960px' }"
        :eventBanner="test.eventBanner"
      />
      <div class="text-4xl font-heading mt-7">Event Information</div>
      <div class="event w-full mt-3 mb-4 grid gap-4">
        <div class="flex flex-col">
          <EventDetail
            class="mb-3"
            :style="{ maxWidth: '629px' }"
            :eventDetail="test.eventDetail"
          />
          <div class="text-lg font-heading">Organized by</div>
          <EventOrganizer
            class="mt-1"
            :style="{ maxWidth: '629px' }"
            :eventOrg="test.eventOrganizer"
          />
        </div>
        <div class="flex flex-col h-0 min-h-full">
          <div class="text-lg font-heading mb-1">Event Schedule</div>
          <div class="overflow-y-auto">
            <div
              class="event-schedule-container rounded-lg flex flex-col justify-center items-center pt-1 bg-gray-2"
            >
              <EventSchedule
                class="mb-1"
                v-for="schedule in test.eventsSchedule"
                :style="{ maxWidth: '283px' }"
                :key="schedule.id"
                :eventsSchedule="schedule"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InfoBanner from "@/modules/eventInfo/info-banner/InfoBanner.vue";
import EventDetail from "@/modules/eventInfo/event-detail/EventDetail.vue";
import EventOrganizer from "@/modules/eventInfo/event-organizer/EventOrganizer.vue";
import EventSchedule from "@/modules/eventInfo/event-schedule/EventSchedule.vue";
import testData from "@/modules/global/testData";

export default defineComponent({
  name: "EventInfoPage",
  components: {
    InfoBanner,
    EventDetail,
    EventOrganizer,
    EventSchedule
  },
  setup() {
    const test = testData;
    return {
      test
    };
  }
});
</script>

<style scoped>
.container {
  max-width: 960px;
}
.event {
  grid-template-columns: auto auto;
}
.event-schedule-container {
  width: 299px;
}
</style>
