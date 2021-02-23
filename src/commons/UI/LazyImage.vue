<template>
  <img
    v-show="isloaded"
    :class="className"
    @load="onLoadComplete"
    :src="url"
    :alt="alt"
  />
  <canvas
    class="canvas w-full h-full"
    v-show="!isloaded"
    ref="canvasRef"
    :width="width"
    :height="height"
    tabindex="0"
  ></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs } from "vue";
import { decode } from "blurhash";

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
  setup(props) {
    const { width, height, placeholder } = toRefs(props);
    const isloaded = ref(false);
    const canvasRef = ref<HTMLCanvasElement | null>(null);

    onMounted(() => {
      const pixels = decode(placeholder.value, width.value, height.value);

      const ctx = canvasRef?.value?.getContext("2d");
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const imageData = ctx!.createImageData(width.value, height.value);
      imageData?.data.set(pixels);
      ctx?.putImageData(imageData, 0, 0);
    });

    const onLoadComplete = () => {
      console.log("complete");
      isloaded.value = true;
    };

    const className = `image-container ${props.class}`;

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
