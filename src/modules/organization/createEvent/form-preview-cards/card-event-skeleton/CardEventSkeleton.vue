<template>
  <div
    class="relative flex flex-col w-27 h-full shadow-sm rounded-lg overflow-hidden"
  >
    <section class="w-full h-25 bg-gray-3">
      <div v-show="hasPosterImg" class="w-full h-full">
        <LazyImage
          :width="216"
          :height="200"
          alt="will change to api"
          :url="posterImg"
          class="h-full w-full object-cover"
        />
      </div>
    </section>
    <section
      class="absolute top-1 right-1 w-6 h-6 rounded-lg bg-gray-4"
    ></section>
    <section class="flex flex-col py-1 px-3 space-y-1 bg-white overflow-hidden">
      <div class="w-11 h-1.5 bg-gray-3"></div>
      <div class="w-21 h-2.5 bg-gray-4"></div>
      <div class="w-15 h-1.5 bg-gray-3"></div>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";

export default defineComponent({
  name: "CardEventSkeleton",
  components: {
    LazyImage
  },
  props: {
    posterImg: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const hasPosterImg = computed(() => {
      return !!props.posterImg && props.posterImg !== "";
    });

    return { hasPosterImg };
  }
});
</script>
