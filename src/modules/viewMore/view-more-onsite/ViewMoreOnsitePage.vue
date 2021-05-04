<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <MoreEvents :heading="input" :events="events" class="content-max-width" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoreEvents from "@/commons/components/more-events/MoreEvents.vue";
import { useOnsiteItems } from "./api";
import { useResult } from "@vue/apollo-composable";

export default defineComponent({
  name: "MoreOnsite",
  components: {
    MoreEvents
  },
  setup() {
    const input = "On-site Events";
    const { result } = useOnsiteItems();
    const events = useResult(result, null, data => data.onSiteEvents);
    return {
      input,
      events
    };
  }
});
</script>

<style scoped></style>
