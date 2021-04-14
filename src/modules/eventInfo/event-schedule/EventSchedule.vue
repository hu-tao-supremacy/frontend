<template>
  <div class="h-8 flex rounded-lg overflow-hidden shadow-sm w-full">
    <div
      class="w-8 bg-primary-6 text-white text-center flex flex-col justify-center flex-shrink-0"
    >
      <div class="text-2xl">{{ day }}</div>
      <div class="text-lg">{{ month }}</div>
    </div>
    <div class="w-full bg-white flex flex-col justify-center pl-1">
      <div class="text-xl font-heading text-primary-6">
        {{ time }}
      </div>
      <div class="text-sm mt-0.5">{{ location?.name || "Location: TBA" }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { EventDuration, Location } from "@/apollo/types";
import useEventSchedule from "./useEventSchedule";

export default defineComponent({
  name: "EventSchdule",
  props: {
    eventsSchedule: {
      type: Object as () => EventDuration,
      required: true
    },
    location: {
      type: Object as () => Location
    }
  },
  setup(props) {
    const { day, month, time } = useEventSchedule(props.eventsSchedule);

    return { day, month, time };
  }
});
</script>

<style></style>
