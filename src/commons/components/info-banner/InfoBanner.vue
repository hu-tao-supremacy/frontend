<template>
  <div
    class="flex flex-col rounded-2xl overflow-hidden relative bg-white shadow-sm"
  >
    <div class="min-w-full h-30">
      <LazyImage
        :width="1000"
        :height="1000"
        alt="will change to api"
        :url="eventBanner && eventBanner.coverImageUrl"
        :placeholder="eventBanner && eventBanner.coverImageHash"
        class="object-cover w-full h-full"
      />
    </div>
    <section class="pl-33 flex flex-col pr-6 pt-2 pb-4.5">
      <h1 class="text-3xl text-blue-10 font-heading mb-1">
        {{ eventBanner && eventBanner.name }}
      </h1>
      <div class="flex flex-wrap mb-2">
        <base-tag
          v-for="tag in eventBanner && eventBanner.tags"
          :key="tag.id"
          class="mr-1 mb-1 h-2"
          >{{ tag.name }}</base-tag
        >
      </div>
      <section>
        <base-icon-and-detail class="mb-1" :detail="date"
          ><CalendarIcon
        /></base-icon-and-detail>
        <base-icon-and-detail class="mb-1" :detail="time"
          ><ClockIcon
        /></base-icon-and-detail>
        <base-icon-and-detail :detail="location"
          ><PinIcon
        /></base-icon-and-detail>
      </section>
    </section>
    <div
      class="absolute top-24 left-6 rounded-lg overflow-hidden w-20 h-30 border-4 border-white"
    >
      <LazyImage
        :width="300"
        :height="300"
        alt="will change to api"
        :url="eventBanner && eventBanner.posterImageUrl"
        :placeholder="eventBanner && eventBanner.posterImageHash"
        class="object-cover w-full h-full"
      />
    </div>
    <section
      v-if="canRegister"
      class="absolute bottom-4.5 right-3 flex flex-col bg-gray-2 rounded-lg"
    >
      <base-button
        :disabled="attendance || isEventStarted"
        @click="register"
        class="w-15 h-4.5 mb-0.25"
        >{{ registerMessage }}</base-button
      >
      <p
        v-if="hasRegisterDueDate"
        class="w-full  text-center font-semibold text-primary"
      >
        Due: {{ registerDueDate }}
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseTag from "@/commons/UI/BaseTag.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import BaseIconAndDetail from "@/commons/UI/BaseIconAndDetail.vue";
import PinIcon from "@/assets/MapPin.vue";
import ClockIcon from "@/assets/Clock.vue";
import CalendarIcon from "@/assets/Calendar.vue";
import useInfoBanner from "./useInfoBanner";
import { EventBanner } from "./types";

export default defineComponent({
  name: "InfoBanner",
  components: {
    BaseButton,
    BaseTag,
    LazyImage,
    BaseIconAndDetail,
    PinIcon,
    ClockIcon,
    CalendarIcon
  },
  props: {
    eventBanner: {
      type: Object as () => EventBanner
    },
    canRegister: {
      type: Boolean,
      default: false
    },
    isSignIn: {
      type: Boolean,
      default: false
    },
    isEventStarted: {
      type: Boolean,
      default: false
    },
    attendance: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { eventBanner, isSignIn, attendance, isEventStarted } = toRefs(props);
    const {
      date,
      time,
      register,
      location,
      registerMessage,
      registerDueDate,
      hasRegisterDueDate
    } = useInfoBanner(isSignIn, attendance, eventBanner, isEventStarted);
    return {
      date,
      time,
      register,
      location,
      registerMessage,
      registerDueDate,
      hasRegisterDueDate
    };
  }
});
</script>
