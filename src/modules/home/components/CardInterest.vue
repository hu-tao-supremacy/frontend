<template>
  <div
    class="h-12 text-center relative from-transparent bg-gradient-to-b select-none"
    :class="gradientColor"
    @click="toggleSelect"
  >
    <img
      :src="imgUrl"
      alt=""
      class="h-full object-cover w-full relative interest-image"
    />
    <caption class="absolute bottom-1 text-white w-full font-bold">
      {{
        interestName
      }}
    </caption>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {
    const imgUrl = "https://picsum.photos/400";
    const interestName = "Music & Festival";
    const isSelected = ref(false);

    function toggleSelect() {
      isSelected.value = !isSelected.value;
    }

    const gradientColor = computed(() => {
      if (isSelected.value) return "to-primary";
      return "to-gray-10-0.75";
    });
    return { imgUrl, interestName, gradientColor, toggleSelect };
  }
});
</script>

<style scoped>
.interest-image {
  z-index: -1;
}
</style>
