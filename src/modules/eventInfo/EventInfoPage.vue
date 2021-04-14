<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <div class="container">
      <InfoBanner v-if="event" :eventBanner="event" :hasButton="true" />
      <div class="text-4xl font-heading mt-7">Event Information</div>
      <div class="event w-full mt-3 grid gap-4">
        <div class="flex flex-col">
          <EventDetail
            v-if="event"
            class="event-inner mb-3"
            :eventDetail="event.description"
          />
          <div class="text-lg font-heading">Organized by</div>
          <EventOrganizer
            v-if="event"
            class="event-inner mt-1"
            :eventOrg="event.organization"
          />
        </div>
        <div class="flex flex-col h-0 min-h-full">
          <div class="text-lg font-heading mb-1">Event Schedule</div>
          <div class="overflow-y-auto overflow-x-hidden">
            <div
              v-if="event"
              class="event-schedule-container rounded-lg flex flex-col justify-center items-center pt-1 px-1 bg-gray-2"
            >
              <EventSchedule
                class="mb-1"
                v-for="duration in event.durations"
                :key="duration.id"
                :eventsSchedule="duration"
                :location="event.location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {{ event }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InfoBanner from "@/commons/components/info-banner/InfoBanner.vue";
import EventDetail from "@/modules/eventInfo/event-detail/EventDetail.vue";
import EventOrganizer from "@/modules/eventInfo/event-organizer/EventOrganizer.vue";
import EventSchedule from "@/modules/eventInfo/event-schedule/EventSchedule.vue";
import useEventInfo from "./use-event-info";

export default defineComponent({
  name: "EventInfoPage",
  components: {
    InfoBanner,
    EventDetail,
    EventOrganizer,
    EventSchedule
  },
  setup() {
    const { event } = useEventInfo();
    return {
      event
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
