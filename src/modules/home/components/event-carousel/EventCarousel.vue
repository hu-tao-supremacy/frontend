<template>
  <div class="relative rounded-2xl overflow-hidden h-40 w-120 z-20 shadow">
    <event-carousel-slide
      v-for="(event, slideIndex) in testEventProps"
      :key="event.eventTitle"
      :slideIndex="slideIndex"
      :currentIndex="currentIndex"
      :transitionAnimation="transitionAnimation"
    >
      <CardBanner class="w-full" :eventTitle="event.eventTitle" />
    </event-carousel-slide>
    <section class="carousel-misc absolute z-10 h-full flex items-center">
      <div>
        <div
          v-for="(_, index) in testEventProps"
          :key="index"
          @click="changeSlide(index)"
          class="w-3 flex flex-col items-center cursor-pointer"
          :class="{
            'carousel-gap': index !== testEventProps.length - 1
          }"
        >
          <div
            class="carousel-dot bg-white"
            :class="{
              'h-3': index === currentIndex,
              'h-2 bg-opacity-30': index !== currentIndex
            }"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardBanner from "../card-banner/CardBanner.vue";
import EventCarouselSlide from "./EventCarouselSlide.vue";
import useEventCarousel from "./useEventCarousel";

export default defineComponent({
  name: "EventCarousel",
  components: {
    CardBanner,
    EventCarouselSlide
  },
  setup() {
    const {
      testEventProps,
      currentIndex,
      transitionAnimation,
      changeSlide
    } = useEventCarousel();
    return { testEventProps, currentIndex, transitionAnimation, changeSlide };
  }
});
</script>

<style scoped>
.carousel-misc {
  top: 0%;
  left: 16px;
}

.carousel-dot {
  border-radius: 1px;
  width: 3px;
}

.carousel-gap {
  margin-bottom: 6px;
}
</style>