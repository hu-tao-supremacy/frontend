<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <MoreEvents :heading="input" :events="events" class="content-max-width" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoreEvents from "@/commons/components/more-events/MoreEvents.vue";
import { useUpcomingItems } from "./api";
import { useResult } from "@vue/apollo-composable";

export default defineComponent({
  name: "MoreUpcoming",
  components: {
    MoreEvents
  },
  setup() {
    const input = "Upcoming Events";
    const { result } = useUpcomingItems();
    const events = useResult(result, null, data => data.upcomingEvents);
    return {
      input,
      events
    };
  }
});
</script>

<style scoped></style>
