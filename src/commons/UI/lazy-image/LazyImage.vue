<template>
  <img :class="className" @load="onLoadComplete" :src="url" :alt="alt" />
  <!-- <canvas
    class="w-full h-full focus:outline-none"
    v-show="!isloaded"
    ref="canvasRef"
    :width="width"
    :height="height"
    tabindex="0"
  ></canvas> -->
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
// import useLazyImage from "./useLazyImage";

export default defineComponent({
  name: "LazyImage",
  props: {
    url: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: { type: Number, required: true },
    alt: { type: String, required: true },
    class: { type: String }
  },
  setup() {
    // const { width, height, placeholder } = toRefs(props);
    // const { canvasRef, isloaded, onLoadComplete, className } = useLazyImage(
    //   width,
    //   height,
    //   placeholder,
    //   props.class
    // );
    // return {
    //   canvasRef,
    //   isloaded,
    //   onLoadComplete,
    //   className
    // };
  }
});
</script>

<style scoped>
.image-container {
  animation: fadeIn ease 0.2s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
