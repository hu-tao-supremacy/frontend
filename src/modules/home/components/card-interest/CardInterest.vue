<template>
  <div
    class="h-12 w-16 text-center relative from-transparent bg-gradient-to-b select-none cursor-pointer rounded-lg shadow-md overflow-hidden"
    :class="gradientColor"
    @click="toggleSelect"
  >
    <LazyImage
      :width="128"
      :height="96"
      alt="will change to api"
      :url="imgUrl"
      :placeholder="imgHash"
      class="h-full object-cover w-full relative interest-image rounded-lg"
    />
    <header class="absolute bottom-1 text-white w-full font-bold">
      {{ interestName }}
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCardInterest from "./useCardInterest";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";

export default defineComponent({
  components: {
    LazyImage
  },
  name: "CardInterest",
  props: {
    imgHash: { type: String },
    imgUrl: { type: String, default: "" },
    interestName: { type: String }
  },
  setup() {
    const { gradientColor, toggleSelect } = useCardInterest();

    return { gradientColor, toggleSelect };
  }
});
</script>

<style scoped>
.interest-image {
  z-index: -1;
}
</style>
