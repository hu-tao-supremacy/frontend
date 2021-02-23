<template>
  <div class="grid grid-cols-3 h-40">
    <div class="col-span-2 min-h-full">
      <img :src="imgUrl" alt="" class="object-cover w-full h-full" />
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
import BaseTag from "@/commons/UI/BaseTag.vue";
import PinIcon from "@/assets/MapPin.vue";
import ClockIcon from "@/assets/Clock.vue";
import CalendarIcon from "@/assets/Calendar.vue";
import useCardBanner from "./useCardBanner";

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
    },
    eventDescription: {
      type: String,
      default: "Event Title"
    },
    tags:{
      type: Array,
    },
    imgUrl: {
      type: String
    },
    eventDate: {
      type: String,
      default: "99"
    },
    eventTime: {
      type: String,
      default: "xx:xx-xx:xx"
    },
    eventLocation: {
      type: String,
      defualt: "Chula"
    }
  },
  setup() {
    const {
      imgUrl,
      tags,
      eventDescription,
      eventDate,
      eventTime,
      eventLocation
    } = useCardBanner();

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
