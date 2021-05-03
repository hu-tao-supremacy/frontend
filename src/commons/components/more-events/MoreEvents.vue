<template>
  <div class="flex flex-col w-full">
    <div class="text-4xl font-heading mb-4">{{ heading }}</div>
    <div class="card grid gap-4 w-full justify-center md:justify-start">
      <CardEvent v-for="event in events" :key="event.id" :events="event" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CardEvent from "@/modules/home/components/card-event/CardEvent.vue";
import { Event } from "@/apollo/types";
export default defineComponent({
  name: "MoreEvents",
  components: {
    CardEvent
  },
  props: {
    events: {
      type: Array as PropType<Event[]>
    },
    heading: {
      type: String
    }
  }
});
</script>

<style scoped>
.card {
  grid-template-columns: repeat(auto-fit, 216px);
}
</style>
