<template>
  <div class="relative overflow-hidden h-40 w-120 z-20">
    <event-carousel-slide
      v-for="(event, slideIndex) in testEventProps"
      :key="event.eventTitle"
      :slideIndex="slideIndex"
      :currentIndex="currentIndex"
      :transitionAnimation="transitionAnimation"
    >
      <CardBanner class="w-full" :eventTitle="event.eventTitle" />
    </event-carousel-slide>
    <section class="carousel-misc absolute z-10">
      <div
        v-for="index in indexRange"
        :key="index"
        @click="changeSlide(index)"
        class="carousel-dot bg-white"
        :class="{
          'h-3': index === currentIndex,
          'h-2 bg-opacity-30': index !== currentIndex,
          'carousel-gap': index !== 3
        }"
      ></div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CardBanner from "./CardBanner.vue";
import EventCarouselSlide from "./EventCarouselSlide.vue";
import makeRange from "@/commons/utils/range.ts";

export default defineComponent({
  name: "EventCarousel",
  components: {
    CardBanner,
    EventCarouselSlide
  },
  setup() {
    const currentIndex = ref(0);
    const indexRange = makeRange(4);
    const transitionAnimation = ref("");
    const testEventProps = [
      { eventTitle: "Event Title 1" },
      { eventTitle: "Event Title 2" },
      { eventTitle: "Event Title 3" },
      { eventTitle: "Event Title 4" }
    ];

    function changeSlide(slideIndex: number) {
      if (slideIndex === currentIndex.value) return;
      else if (slideIndex > currentIndex.value)
        transitionAnimation.value = "slide-down";
      else transitionAnimation.value = "slide-up";
      currentIndex.value = slideIndex;
    }

    return {
      testEventProps,
      currentIndex,
      transitionAnimation,
      changeSlide,
      indexRange
    };
  }
});
</script>

<style scoped>
.carousel-misc {
  width: 3px;
  height: 90px;
  top: 115px;
  bottom: 115px;
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
