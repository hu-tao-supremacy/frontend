<template>
  <div class="grid grid-cols-3 h-40">
    <div class="col-span-2 min-h-full">
      <LazyImage
        :width="1000"
        :height="1000"
        alt="will change to api"
        :url="event.coverImageUrl"
        :placeholder="event.coverImageHash"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="col-span-1 flex flex-col justify-between items-center p-2">
      <section>
        <h3
          class="text-2xl font-heading text-blue-10 mb-1 text-truncate text-truncate-2"
        >
          {{ event.name }}
        </h3>
        <div class="flex mb-2 items-center">
          <base-tag
            v-for="(tag, index) in event.tags"
            :key="tag"
            :class="changeClass(index)"
            >{{ tag }}</base-tag
          >
        </div>
        <div class="text-sm mb-1 w-full text-truncate text-truncate-4">
          {{ event.description }}
        </div>
        <base-icon-and-detail class="mb-1" :detail="date"
          ><CalendarIcon
        /></base-icon-and-detail>
        <base-icon-and-detail class="mb-1" :detail="time"
          ><ClockIcon
        /></base-icon-and-detail>
        <base-icon-and-detail class="mb-1" :detail="location"
          ><PinIcon
        /></base-icon-and-detail>
      </section>
      <router-link :disabled="!isLinkReady" :to="eventInfoUrl" class="w-4/5">
        <base-button :disabled="!isLinkReady" class="h-5 w-full"
          >Get Tickets</base-button
        >
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseTag from "@/commons/UI/BaseTag.vue";
import BaseIconAndDetail from "@/commons/UI/BaseIconAndDetail.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import PinIcon from "@/assets/MapPin.vue";
import ClockIcon from "@/assets/Clock.vue";
import CalendarIcon from "@/assets/Calendar.vue";
import { Event } from "@/apollo/types";
import useCardBanner from "./useCardBanner";

export default defineComponent({
  name: "CardBanner",
  components: {
    BaseButton,
    BaseTag,
    BaseIconAndDetail,
    PinIcon,
    CalendarIcon,
    ClockIcon,
    LazyImage
  },
  props: {
    event: {
      type: Object as () => Event
    }
  },
  setup(props) {
    const { event } = toRefs(props);
    const {
      date,
      time,
      location,
      changeClass,
      eventInfoUrl,
      isLinkReady
    } = useCardBanner(event);
    return {
      date,
      time,
      location,
      changeClass,
      eventInfoUrl,
      isLinkReady
    };
  }
});
</script>

<style scoped></style>
