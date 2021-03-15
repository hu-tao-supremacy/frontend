<template>
  <div class="flex flex-col rounded-2xl overflow-hidden relative bg-white">
    <div class="min-w-full h-30">
      <LazyImage
        :width="1000"
        :height="1000"
        alt="will change to api"
        :url="eventBanner.bannerImg"
        :placeholder="eventBanner.bannerImgHash"
        class="object-cover w-full h-full"
      />
    </div>
    <section class="pl-33 flex flex-col pr-6 pt-2 pb-4.5">
      <h1 class="text-3xl text-blue-10 font-heading mb-1">
        {{ eventBanner.title }}
      </h1>
      <div class="flex flex-wrap mb-2">
        <base-tag
          v-for="tag in eventBanner.tags"
          :key="tag"
          class="mr-1 mb-1 h-2"
          >{{ tag }}</base-tag
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
          {{ eventBanner.date }}
        </div>
        <div class="flex items-center mb-1">
          <base-icon
            width="14px"
            height="14px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><ClockIcon
          /></base-icon>
          {{ eventBanner.time }}
        </div>
        <div class="flex items-center">
          <base-icon
            width="14px"
            height="14px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><PinIcon
          /></base-icon>
          {{ eventBanner.location }}
        </div>
      </section>
    </section>
    <div
      class="absolute top-24 left-6 rounded-lg overflow-hidden w-20 h-30 border-4 border-white"
    >
      <LazyImage
        :width="300"
        :height="300"
        alt="will change to api"
        :url="eventBanner.profileImg"
        :placeholder="eventBanner.profileImgHash"
        class="object-cover w-full h-full"
      />
    </div>
    <base-button class="absolute bottom-3 right-3 w-15 h-4.5"
      >Register</base-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseTag from "@/commons/UI/BaseTag.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import PinIcon from "@/assets/MapPin.vue";
import ClockIcon from "@/assets/Clock.vue";
import CalendarIcon from "@/assets/Calendar.vue";

export default defineComponent({
  name: "InfoBanner",
  components: {
    BaseButton,
    BaseTag,
    LazyImage,
    PinIcon,
    ClockIcon,
    CalendarIcon
  },
  props: {
    eventBanner: {
      type: Object as () => {
        bannerImg: string;
        bannerImgHash: string;
        profileImg: string;
        profileImgHash: string;
        title: string;
        tags: string[];
        date: string;
        time: string;
        location: string;
      },
      required: true
    }
  }
});
</script>
