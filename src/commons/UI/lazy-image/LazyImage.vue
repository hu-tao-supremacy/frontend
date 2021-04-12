<template>
  <img
    v-show="isloaded"
    :class="className"
    @load="onLoadComplete"
    :src="url"
    :alt="alt"
    :width="width"
    :height="height"
  />
  <canvas
    class="w-full h-full focus:outline-none"
    :class="canvasClass"
    v-show="!isloaded"
    ref="canvasRef"
    :width="canvasWidth"
    :height="canvasHeight"
    tabindex="0"
  ></canvas>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import useLazyImage from "./useLazyImage";

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
      Number,
      required: true
    },
    height: { type: Number, required: true },
    canvasWidth: {
      type: Number,
      default: 32
    },
    canvasHeight: { type: Number, default: 32 },
    alt: { type: String, required: true },
    class: { type: String },
    canvasClass: { type: String }
  },
  setup(props) {
    const { canvasWidth, canvasHeight, placeholder } = toRefs(props);
    const { canvasRef, isloaded, onLoadComplete, className } = useLazyImage(
      canvasWidth,
      canvasHeight,
      placeholder,
      props.class
    );
    return {
      canvasRef,
      isloaded,
      onLoadComplete,
      className
    };
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
