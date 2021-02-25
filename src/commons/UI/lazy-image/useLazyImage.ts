import { decode } from "blurhash";
import { computed, onMounted, Ref, ref } from "vue";

const useLazyImage = (
  width: Ref<number>,
  height: Ref<number>,
  placeholder: Ref<string>,
  classValue?: string
) => {
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
    isloaded.value = true;
  };

  const className = computed(() => `image-container ${classValue}`);

  return {
    canvasRef,
    isloaded,
    onLoadComplete,
    className
  };
};

export default useLazyImage;
