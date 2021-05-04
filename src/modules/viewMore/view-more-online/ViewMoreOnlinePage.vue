<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <MoreEvents :heading="input" :events="events" class="content-max-width" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoreEvents from "@/commons/components/more-events/MoreEvents.vue";
import { useOnlineItems } from "./api";
import { useResult } from "@vue/apollo-composable";

export default defineComponent({
  name: "MoreOnline",
  components: {
    MoreEvents
  },
  setup() {
    const input = "Online Events";
    const { result } = useOnlineItems();
    const events = useResult(result, null, data => data.onlineEvents);
    return {
      input,
      events
    };
  }
});
</script>

<style scoped></style>
