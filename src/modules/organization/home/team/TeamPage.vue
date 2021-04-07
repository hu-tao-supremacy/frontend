<template>
  <div
    class="w-full h-full bg-gray-1 flex flex-col py-4 items-center content-min-height"
  >
    <div class="flex flex-col content-max-width">
      <OrgBanner :org="test.eventOrganizer" class="mb-3" />
      <section class="flex justify-between mb-3">
        <div class="flex items-center">
          <input
            type="text"
            placeholder="Search"
            class="w-31.5 h-4 rounded-r-none rounded-l-lg px-1.5 border-t border-b border-l focus:border-r border-gray-3 focus:border-primary focus:outline-none"
          />
          <base-button
            class="rounded-l-none h-4 w-6 flex justify-center items-center"
            ><base-icon width="12.5px" height="12.5px" class="text-white"
              ><SearchIcon /></base-icon
          ></base-button>
        </div>
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
import SearchIcon from "@/assets/Search.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import { testData, eventsListData } from "@/modules/test/testData";

export default defineComponent({
  name: "TeamPage",
  components: {
    OrgBanner,
    OrgEventListCard,
    SearchIcon,
    BaseButton
  },
  setup() {
    const test = testData;
    const eventsList = eventsListData;

    function isLastEvent(index: number) {
      return index === eventsList.length - 1;
    }

    return { test, eventsList, isLastEvent };
  }
});
</script>
