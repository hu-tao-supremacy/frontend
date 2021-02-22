<template>
  <div class="relative overflow-hidden h-40 w-120 z-10">
    <!-- <event-carousel-slide
      v-for="(event, slideIndex) in testEventProps"
      :key="event.eventTitle"
      :slideIndex="slideIndex"
      :currentIndex="currentIndex"
      :transitionAnimation="transitionAnimation"
      class="w-full h-full"
    >
      <CardBanner class="w-full" />
    </event-carousel-slide> -->
    <Test />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CardBanner from "./CardBanner.vue";
import EventCarouselSlide from "./EventCarouselSlide.vue";
import Test from "./temp/Test.vue";

export default defineComponent({
  name: "EventCarousel",
  componenents: {
    CardBanner,
    EventCarouselSlide,
    Test
  },
  setup() {
    const currentIndex = ref(0);
    const transitionAnimation = ref("");
    const testEventProps = [
      { eventTitle: "Event Title 1" },
      { eventTitle: "Event Title 2" },
      { eventTitle: "Event Title 3" },
      { eventTitle: "Event Title 4" }
    ];

    function chooseSlide(slideIndex: number) {
      if (slideIndex === currentIndex.value) return;
      else if (slideIndex > currentIndex.value)
        transitionAnimation.value = "slide-down";
      else transitionAnimation.value = "slide-up";
      currentIndex.value = slideIndex;
    }

    return { testEventProps, currentIndex, transitionAnimation, chooseSlide };
  }
});
</script>

<style scoped></style>
