<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <div class="container">
      <InfoBanner :eventBanner="test.eventBanner" />
      <div class="text-4xl font-heading mt-7">Event Information</div>
      <div class="event w-full mt-3 grid gap-4">
        <div class="flex flex-col">
          <EventDetail
            class="event-inner mb-3"
            :eventDetail="test.eventDetail"
          />
          <div class="text-lg font-heading">Organized by</div>
          <EventOrganizer
            class="event-inner mt-1"
            :eventOrg="test.eventOrganizer"
          />
        </div>
        <div class="flex flex-col h-0 min-h-full">
          <div class="text-lg font-heading mb-1">Event Schedule</div>
          <div class="overflow-y-auto overflow-x-hidden">
            <div
              class="event-schedule-container rounded-lg flex flex-col justify-center items-center pt-1 bg-gray-2"
            >
              <EventSchedule
                class="mb-1"
                v-for="schedule in test.eventsSchedule"
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
import testData from "@/modules/eventInfo/use-event-info/testData";

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
.event-inner {
  max-width: 629px;
}
.event-schedule-container {
  width: 299px;
}
</style>
