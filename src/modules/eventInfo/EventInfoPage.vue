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
      <div class="infoContainer flex justify-between flex-shrink-0">
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
</style>
