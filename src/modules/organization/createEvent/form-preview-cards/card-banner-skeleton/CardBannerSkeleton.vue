<template>
  <div class="flex w-87.5 h-full shadow rounded-2xl overflow-hidden">
    <section class="w-full min-h-full bg-gray-3">
      <div v-show="hasCoverImg" class="w-full h-full">
        <LazyImage
          :width="480"
          :height="240"
          alt="will change to api"
          :url="coverImg"
          class="h-full w-full object-cover"
        />
      </div>
    </section>
    <section class="flex flex-col pt-2.5 pb-1.5 px-1.5 w-30 h-30 flex-shrink-0">
      <div class="w-22 h-2.5 bg-gray-4 mb-1"></div>
      <div class="flex space-x-0.75 w-full mb-1.5">
        <span
          class="w-7 h-1.5 bg-gray-2 rounded-lg border border-gray-4"
        ></span>
        <span
          class="w-7 h-1.5 bg-gray-2 rounded-lg border border-gray-4"
        ></span>
        <span
          class="w-7 h-1.5 bg-gray-2 rounded-lg border border-gray-4"
        ></span>
      </div>
      <div class="flex flex-col space-y-0.25 mb-2.5">
        <span class="self-end w-22 h-1 bg-gray-3"></span>
        <span class="w-full h-1 bg-gray-3"></span>
        <span class="w-full h-1 bg-gray-3"></span>
      </div>
      <div class="flex flex-col space-y-0.75">
        <section class="flex">
          <div class="w-1 h-1 bg-gray-4 mr-0.75"></div>
          <div class="w-15 h-1 bg-gray-3"></div>
        </section>
        <section class="flex">
          <div class="w-1 h-1 bg-gray-4 mr-0.75"></div>
          <div class="w-15 h-1 bg-gray-3"></div>
        </section>
        <section class="flex">
          <div class="w-1 h-1 bg-gray-4 mr-0.75"></div>
          <div class="w-15 h-1 bg-gray-3"></div>
        </section>
      </div>
      <div
        class="self-center w-22 h-3.5 rounded-lg shadow-xs bg-gray-4 mt-auto"
      ></div>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";

export default defineComponent({
  name: "CardBannerSkeleton",
  components: {
    LazyImage
  },
  props: {
    coverImg: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const hasCoverImg = computed(() => {
      return !!props.coverImg && props.coverImg !== "";
    });

    return { hasCoverImg };
  }
});
</script>
