<template>
  <div class="grid grid-cols-3 rounded-2xl h-40 shadow">
    <div class="col-span-2 min-h-full">
      <img
        :src="imgUrl"
        alt=""
        class="object-cover w-full h-full rounded-l-2xl"
      />
    </div>
    <div class="col-span-1 flex flex-col justify-between items-center p-2">
      <section>
        <h3 class="text-2xl font-heading text-blue-10 mb-1">
          {{ eventTitle }}
        </h3>
        <div class="flex mb-2 items-center">
          <base-tag
            v-for="(tag, index) in tags"
            :key="tag"
            :class="index === tags.length - 1 ? '' : 'mr-1'"
            >{{ tag }}</base-tag
          >
        </div>
        <div class="text-sm mb-1 w-full event-description">
          {{ eventDescription }}
        </div>
        <div class="flex items-center mb-1">
          <base-icon
            width="12px"
            height="12px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><CalendarIcon
          /></base-icon>
          {{ eventDate }}
        </div>
        <div class="flex items-center mb-1">
          <base-icon
            width="12px"
            height="12px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><ClockIcon
          /></base-icon>
          {{ eventTime }}
        </div>
        <div class="flex items-center mb-1">
          <base-icon
            width="12px"
            height="12px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><PinIcon
          /></base-icon>
          {{ eventLocation }}
        </div>
      </section>
      <base-button class="w-4/5 h-5">Get Tickets</base-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseTag from "./BaseTag.vue";
import PinIcon from "@/assets/MapPin.vue";
import ClockIcon from "@/assets/Clock.vue";
import CalendarIcon from "@/assets/Calendar.vue";

export default defineComponent({
  name: "CardBanner",
  components: {
    BaseButton,
    BaseTag,
    PinIcon,
    CalendarIcon,
    ClockIcon
  },
  props: {
    eventTitle: {
      type: String,
      default: "Event Title"
    }
  },
  setup() {
    const tags = ["Engineering", "Food", "Education"];
    const eventDescription =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velnisi eu ipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus cursus. Nulla sollicitudin ut felis sit amet blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi euipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus          cursus. Nulla sollicitudin ut felis sit amet blandit.";
    const imgUrl = "https://picsum.photos/1000";
    const eventDate = "Sun, 14 Feb - 16 April";
    const eventTime = "10:00 - 18:00";
    const eventLocation = "Engineering Faculty, Chula";

    return {
      imgUrl,
      tags,
      eventDescription,
      eventDate,
      eventTime,
      eventLocation
    };
  }
});
</script>

<style scoped>
.event-description {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
