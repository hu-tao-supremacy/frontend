<template>
  <div
    class="flex relative w-full shadow-sm rounded-2xl overflow-hidden bg-white"
  >
    <section class="w-16.5 relative flex-shrink-0 min-h-full">
      <LazyImage
        :width="150"
        :height="150"
        alt="will change to api"
        :url="event.img"
        :placeholder="event.imgHash"
        class="object-cover absolute w-full h-full"
        :canvasClass="'absolute'"
      />
    </section>
    <section class="py-2 pl-2 pr-8 min-w-0 w-full">
      <h1 class="truncate w-full text-blue-10 font-heading text-2xl mb-2">
        {{ event.title }}
      </h1>
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <div class="flex items-center mb-2 lg:mb-0">
          <section class="flex items-center mr-2">
            <base-icon
              :width="14"
              :height="14"
              class="text-primary mr-1 flex-shrink-0"
              ><CalendarIcon
            /></base-icon>
            <p>{{ event.date }}</p>
          </section>
          <section class="flex items-center mr-2">
            <base-icon
              :width="14"
              :height="14"
              class="text-primary mr-1 flex-shrink-0"
              ><ClockIcon
            /></base-icon>
            <p>{{ event.time }}</p>
          </section>
          <section class="flex items-center mr-2">
            <base-icon
              :width="14"
              :height="14"
              class="text-primary mr-1 flex-shrink-0"
              ><MapPinIcon
            /></base-icon>
            <p class="max-width-location">{{ event.location }}</p>
          </section>
        </div>
        <div class="flex">
          <section class="flex items-center mr-2">
            <base-icon
              :width="14"
              :height="14"
              class="mr-1"
              :class="{
                'text-red-6': isParticipantFull,
                'text-primary': !isParticipantFull
              }"
              ><UsersIcon
            /></base-icon>
            <p :class="{ 'text-red-6': isParticipantFull }">
              {{ participantNumber }}
            </p>
          </section>
          <section class="flex items-center">
            <base-icon
              :width="14"
              :height="14"
              class="mr-1"
              :class="{
                'text-red-6': isEventClosed,
                'text-primary': !isEventClosed
              }"
              ><ClipboardIcon
            /></base-icon>
            <p :class="{ 'text-red-6': isEventClosed }">{{ status }}</p>
          </section>
        </div>
      </div>
    </section>
    <base-icon
      :width="32"
      :height="32"
      class="absolute top-1/2 right-2 -translate-y-1/2 transform text-primary cursor-pointer"
      ><ArrowRight
    /></base-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import CalendarIcon from "@/assets/Calendar.vue";
import ClockIcon from "@/assets/Clock.vue";
import MapPinIcon from "@/assets/MapPin.vue";
import UsersIcon from "@/assets/Users.vue";
import ClipboardIcon from "@/assets/Clipboard.vue";
import ArrowRight from "@/assets/ArrowRight.vue";
import { Event } from "@/commons/Interfaces";
import useOrgEventListCard from "./useOrgEventListCard";

export default defineComponent({
  name: "OrgEventListCard",
  components: {
    LazyImage,
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
    },
    status: {
      //Will later change to whether current time is in event duration
      type: String,
      required: true
    }
  },
  setup(props) {
    const {
      participantNumber,
      isParticipantFull,
      isEventClosed
    } = useOrgEventListCard(
      props.event.attendeeLimit,
      props.event.currentAttendee,
      props.status
    );

    return {
      participantNumber,
      isParticipantFull,
      isEventClosed
    };
  }
});
</script>

<style scoped>
.max-width-location {
  max-width: 220px;
}
</style>
