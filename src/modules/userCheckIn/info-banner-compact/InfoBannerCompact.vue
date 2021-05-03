<template>
  <div class="flex flex-col rounded-2xl relative bg-white mt-6 shadow-sm">
    <section class="pl-33 flex flex-col pr-6 pt-2 pb-4.5">
      <h1 class="text-3xl text-blue-10 font-heading mb-1">
        {{ eventBanner && eventBanner.name }}
      </h1>
      <div class="flex flex-wrap mb-2">
        <base-tag
          v-for="tag in eventBanner && eventBanner.tags"
          :key="tag"
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
      class="event absolute left-6 rounded-lg overflow-hidden w-20 h-30 border-4 border-white"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";
import BaseTag from "@/commons/UI/BaseTag.vue";
import BaseIconAndDetail from "@/commons/UI/BaseIconAndDetail.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import PinIcon from "@/assets/MapPin.vue";
import ClockIcon from "@/assets/Clock.vue";
import CalendarIcon from "@/assets/Calendar.vue";
import { EventBanner } from "@/commons/components/info-banner/types";
import useInfoBanner from "@/commons/components/info-banner/useInfoBanner";

export default defineComponent({
  name: "InfoBannerNoBg",
  components: {
    BaseTag,
    BaseIconAndDetail,
    LazyImage,
    PinIcon,
    ClockIcon,
    CalendarIcon
  },
  props: {
    eventBanner: {
      type: Object as () => EventBanner
    }
  },
  setup(props) {
    const { eventBanner } = toRefs(props);
    const isSignin = ref(false);
    const attendance = ref(true);
    const { date, time, register, location, registerMessage } = useInfoBanner(
      isSignin,
      attendance,
      eventBanner
    );
    return { date, time, register, location, registerMessage };
  }
});
</script>

<style scoped>
.event {
  top: -40px;
}
</style>
