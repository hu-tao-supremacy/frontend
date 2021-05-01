<template>
  <div
    class="relative flex flex-col container-width h-full shadow-sm rounded-lg overflow-hidden"
  >
    <section class="w-full h-20 bg-gray-3">
      <div v-show="hasPosterImg" class="w-full h-full">
        <LazyImage
          :width="300"
          :height="160"
          alt="will change to api"
          :url="posterImg"
          class="h-full w-full object-cover"
        />
      </div>
    </section>
    <section
      class="absolute top-1 right-1 w-6 h-6 rounded-lg bg-gray-4"
    ></section>
    <section
      class="flex items-center justify-end p-1 h-10 bg-white overflow-hidden"
    >
      <div class="w-5 h-5 rounded-lg shadow-xs bg-gray-4"></div>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";

export default defineComponent({
  name: "CardRecommendSkeleton",
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

<style scoped>
.container-width {
  width: 300px;
}
</style>
