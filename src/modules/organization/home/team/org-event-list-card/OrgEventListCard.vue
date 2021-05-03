<template>
  <div
    class="flex relative w-full shadow-sm rounded-2xl overflow-hidden bg-white"
  >
    <section class="w-16.5 relative flex-shrink-0 min-h-full">
      <LazyImage
        :width="150"
        :height="150"
        alt="will change to api"
        :url="event.posterImgUrl"
        :placeholder="event.posterImgHash"
        class="object-cover absolute w-full h-full"
        :canvasClass="'absolute'"
      />
    </section>
    <section class="py-2 px-2 min-w-0 w-full">
      <h1 class="truncate w-full text-blue-10 font-heading text-2xl mb-2">
        {{ event.name }}
      </h1>
      <div class="flex space-x-2">
        <base-icon-and-detail
          :iconClass="'mr-1'"
          :detail="eventDate"
          class="flex-shrink-0"
          ><CalendarIcon
        /></base-icon-and-detail>
        <base-icon-and-detail
          :iconClass="'mr-1'"
          :detail="eventTime"
          class="flex-shrink-0"
          ><ClockIcon
        /></base-icon-and-detail>
        <base-icon-and-detail
          :iconClass="'mr-1'"
          :detail="event.location && event.location.name"
          :detailClass="'max-width-location truncate'"
          class="min-w-0"
          ><MapPinIcon
        /></base-icon-and-detail>
      </div>
    </section>
    <section
      class="flex items-center justify-between py-2 pl-4 pr-2 w-30 flex-shrink-0"
      :class="{
        'bg-green-6': isInRegistrationTime,
        'bg-primary': !isInRegistrationTime
      }"
    >
      <div>
        <section class="flex items-center mb-1">
          <span
            class="flex items-center justify-center w-5 h-5 rounded-full bg-white  shadow-sm mr-1"
          >
            <base-icon
              v-if="isInRegistrationTime"
              :width="24"
              :height="24"
              class="text-green-6"
              ><ClipboardIcon
            /></base-icon>
            <base-icon v-else :width="24" :height="24" class="text-green-6"
              ><UsersIcon
            /></base-icon>
          </span>
          <h2 class="text-white font-heading text-2xl">{{ attendeeCount }}</h2>
        </section>
        <p class="text-white font-semibold">{{ attendeeText }}</p>
      </div>
      <router-link :to="`/org/event/${event.id}`">
        <base-icon
          @click="toEventDashboard"
          :width="32"
          :height="32"
          class="text-white cursor-pointer hover:text-gray-4"
          ><ArrowRight
        /></base-icon>
      </router-link>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import BaseIconAndDetail from "@/commons/UI/BaseIconAndDetail.vue";
import CalendarIcon from "@/assets/Calendar.vue";
import ClockIcon from "@/assets/Clock.vue";
import MapPinIcon from "@/assets/MapPin.vue";
import UsersIcon from "@/assets/Users.vue";
import ClipboardIcon from "@/assets/Clipboard.vue";
import ArrowRight from "@/assets/ArrowRight.vue";
import { Event } from "../constant/interfaces";
import useOrgEventListCard from "./useOrgEventListCard";

export default defineComponent({
  name: "OrgEventListCard",
  components: {
    LazyImage,
    BaseIconAndDetail,
    CalendarIcon,
    ClockIcon,
    MapPinIcon,
    UsersIcon,
    ClipboardIcon,
    ArrowRight
  },
  props: {
    event: {
      type: Object as () => Event,
      required: true
    }
  },
  setup(props) {
    const { event } = toRefs(props);

    const {
      eventDate,
      eventTime,
      isInRegistrationTime,
      attendeeCount,
      attendeeText,
      toEventDashboard
    } = useOrgEventListCard(event);

    return {
      eventDate,
      eventTime,
      isInRegistrationTime,
      attendeeCount,
      attendeeText,
      toEventDashboard
    };
  }
});
</script>

<style scoped>
.max-width-location {
  max-width: 212px;
}
</style>
