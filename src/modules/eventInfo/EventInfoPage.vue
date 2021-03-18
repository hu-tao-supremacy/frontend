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
      <div class="flex justify-between items-start">
        <EventDetail
          class="mt-2 mb-16"
          :style="{ maxWidth: '628px' }"
          :eventDetail="test.eventDetail"
        />
        <div class="relative">
          <div class="org-by text-lg font-heading absolute">Organized by</div>
          <EventOrganizer
            class="mt-2"
            :style="{ maxWidth: '300px' }"
            :eventOrg="test.eventOrganizer"
          />
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
import testData from "@/modules/global/testData";

export default defineComponent({
  name: "EventInfoPage",
  components: {
    InfoBanner,
    EventDetail,
    EventOrganizer
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
.org-by {
  top: -9px;
  right: 0px;
}
</style>
