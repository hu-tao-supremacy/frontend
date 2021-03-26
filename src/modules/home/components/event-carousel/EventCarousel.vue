<template>
  <div class="relative rounded-2xl overflow-hidden h-40 w-120 z-20 shadow">
    <event-carousel-slide
      v-for="(event, slideIndex) in eventsList"
      :key="event.title"
      :slideIndex="slideIndex"
      :currentIndex="currentIndex"
      :transitionAnimation="transitionAnimation"
    >
      <CardBanner class="w-full" :event="event" />
    </event-carousel-slide>
    <section class="carousel-misc absolute z-10 h-full flex items-center">
      <div>
        <div
          v-for="(_, index) in eventsList"
          :key="index"
          @click="changeSlide(index)"
          class="w-3 flex flex-col items-center cursor-pointer"
          :class="{
            'carousel-gap': index !== eventsList.length - 1
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
import { Banner } from "@/commons/Interfaces/index";

export default defineComponent({
  name: "EventCarousel",
  components: {
    CardBanner,
    EventCarouselSlide
  },
  props: {
    eventsList: {
      type: Array as () => Banner[],
      required: true
    }
  },
  setup(props) {
    const { currentIndex, transitionAnimation, changeSlide } = useEventCarousel(
      props.eventsList
    );
    return { currentIndex, transitionAnimation, changeSlide };
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
