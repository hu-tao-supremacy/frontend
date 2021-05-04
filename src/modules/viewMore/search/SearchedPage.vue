<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <MoreEvents :heading="heading" :events="events" class="content-max-width" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import MoreEvents from "@/commons/components/more-events/MoreEvents.vue";
import { useSearchedItems } from "./api";
import { useResult } from "@vue/apollo-composable";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "SearchedEvents",
  components: {
    MoreEvents
  },
  setup() {
    const route = useRoute();
    const userInput = computed(() => String(route.query.q));
    const { result } = useSearchedItems(userInput);
    const events = useResult(result, null, data => data.searchEvent);
    const heading = computed(() => "Search results for: " + userInput.value);
    return {
      heading,
      events
    };
  }
});
</script>

<style scoped></style>
