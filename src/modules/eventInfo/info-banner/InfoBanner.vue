<template>
  <base-card maxCardWidth="960px" class="flex flex-col relative bg-white">
    <div class="min-w-full h-30">
      <img
        :src="eventBackgroundImg"
        alt=""
        class="object-cover w-full h-full"
      />
    </div>
    <section class="pl-33 flex flex-col pr-6 pt-2 pb-4.5">
      <h1 class="text-3xl text-blue-10 font-heading mb-1">{{ eventTitle }}</h1>
      <div class="flex flex-wrap mb-2">
        <base-tag
          v-for="eventTag in eventTags"
          :key="eventTag"
          class="mr-1 mb-1 h-2"
          >{{ eventTag }}</base-tag
        >
      </div>
      <section>
        <div class="flex items-center mb-1">
          <base-icon
            width="14px"
            height="14px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><CalendarIcon
          /></base-icon>
          {{ eventDate }}
        </div>
        <div class="flex items-center mb-1">
          <base-icon
            width="14px"
            height="14px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><ClockIcon
          /></base-icon>
          {{ eventTime }}
        </div>
        <div class="flex items-center">
          <base-icon
            width="14px"
            height="14px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><PinIcon
          /></base-icon>
          {{ eventLocation }}
        </div>
      </section>
    </section>
    <div
      class="absolute top-24 left-6 rounded-lg overflow-hidden w-20 h-30 border-4 border-white"
    >
      <img :src="eventProfileImg" alt="" class="object-cover w-full h-full" />
    </div>
    <base-button class="absolute bottom-3 right-3 w-15 h-4.5"
      >Register</base-button
    >
  </base-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseCard from "@/commons/UI/BaseCard.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseTag from "@/commons/UI/BaseTag.vue";
import PinIcon from "@/assets/MapPin.vue";
import ClockIcon from "@/assets/Clock.vue";
import CalendarIcon from "@/assets/Calendar.vue";
import useInfoBanner from "./useInfoBanner";

export default defineComponent({
  name: "InfoBanner",
  components: {
    BaseCard,
    BaseButton,
    BaseTag,
    PinIcon,
    ClockIcon,
    CalendarIcon
  },
  setup() {
    const {
      eventBackgroundImg,
      eventProfileImg,
      eventTitle,
      eventTags,
      eventDate,
      eventTime,
      eventLocation
    } = useInfoBanner();

    return {
      eventBackgroundImg,
      eventProfileImg,
      eventTitle,
      eventTags,
      eventDate,
      eventTime,
      eventLocation
    };
  }
});
</script>
