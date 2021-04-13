<template>
  <div
    class="w-full h-full bg-gray-1 flex flex-col py-4 items-center content-min-height"
  >
    <div class="flex flex-col content-max-width">
      <OrgBanner :org="test.eventOrganizer" class="mb-3" />
      <section class="flex justify-between mb-3">
        <BaseSearch
          @search="filterEvents"
          class="h-4"
          :inputClass="'w-31.5'"
          :placeholder="'Search'"
        />
        <base-button class="px-1.5">Create an Event</base-button>
      </section>
      <OrgEventListCard
        v-for="(event, index) in eventsList"
        :key="event.event.title"
        :event="event.event"
        :status="event.status"
        :class="{ 'mb-2': !isLastEvent(index) }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrgBanner from "./org-banner/OrgBanner.vue";
import OrgEventListCard from "./org-event-list-card/OrgEventListCard.vue";
import BaseSearch from "@/commons/UI/BaseSearch.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import { testData, eventsListData } from "@/modules/test/testData";

export default defineComponent({
  name: "TeamPage",
  components: {
    OrgBanner,
    OrgEventListCard,
    BaseButton,
    BaseSearch
  },
  setup() {
    //Later will get from backend using organization selected from side navbar using provide
    const test = testData;
    const eventsList = eventsListData;

    function isLastEvent(index: number) {
      return index === eventsList.length - 1;
    }

    function filterEvents(search: string) {
      //Perform filtering of events
      console.log(search);
    }

    return { test, eventsList, isLastEvent, filterEvents };
  }
});
</script>
