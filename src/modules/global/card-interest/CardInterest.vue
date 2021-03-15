<template>
  <div
    class="h-12 w-16 text-center relative select-none cursor-pointer rounded-lg shadow-md overflow-hidden"
    @click="toggleSelect"
  >
    <div
      class="from-transparent bg-gradient-to-b absolute top-0 left-0 w-full h-full z-10"
      :class="gradientColor"
    ></div>
    <LazyImage
      :width="200"
      :height="200"
      alt="will change to api"
      :url="imgUrl"
      :placeholder="imgHash"
      class="h-full object-cover w-full relative z-0"
    />
    <header class="absolute bottom-1 text-white w-full font-bold z-10">
      {{ interestName }}
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCardInterest from "./useCardInterest";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";

export default defineComponent({
  name: "CardInterest",
  components: {
    LazyImage
  },
  props: {
    interestName: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    imgHash: {
      type: String,
      default: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    }
  },
  setup(props, context) {
    const { gradientColor, toggleSelect } = useCardInterest(props, context);

    return { gradientColor, toggleSelect };
  }
});
</script>
