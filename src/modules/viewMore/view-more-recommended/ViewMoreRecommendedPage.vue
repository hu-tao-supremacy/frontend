<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <MoreEvents :heading="input" :events="events" class="content-max-width" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoreEvents from "@/commons/components/more-events/MoreEvents.vue";
import { useRecommendedItems } from "./api";
import { useResult } from "@vue/apollo-composable";

export default defineComponent({
  name: "MoreRecommend",
  components: {
    MoreEvents
  },
  setup() {
    const input = "Recommended Events";
    const { result } = useRecommendedItems();
    const events = useResult(result, null, data => data.recommendedEvents);
    return {
      input,
      events
    };
  }
});
</script>

<style scoped></style>
