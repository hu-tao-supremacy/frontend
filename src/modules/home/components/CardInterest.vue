<template>
  <div
    class="h-12 w-16 text-center relative from-transparent bg-gradient-to-b select-none cursor-pointer rounded-lg shadow-md"
    :class="gradientColor"
    @click="toggleSelect"
  >
    <img
      :src="imgUrl"
      alt=""
      class="h-full object-cover w-full relative interest-image rounded-lg"
    />
    <header class="absolute bottom-1 text-white w-full font-bold">
      {{ interestName }}
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "CardInterest",
  props :{
    imgUrl: { type: String },
    interestName: { type: String, default: "CU" },
  },
  setup() {
    const isSelected = ref(false);

    function toggleSelect() {
      isSelected.value = !isSelected.value;
    }

    const gradientColor = computed(() => {
      if (isSelected.value) return "to-primary";
      return "to-gray-10-0.75";
    });

    return { gradientColor, toggleSelect };
  }
});
</script>

<style scoped>
.interest-image {
  z-index: -1;
}
</style>
