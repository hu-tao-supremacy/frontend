<template>
  <div
    class="h-12 w-16 text-center relative select-none cursor-pointer rounded-lg overflow-hidden"
    :class="{ animationSelected: isSelected, animationUnselected: !isSelected }"
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
    const { gradientColor, toggleSelect, isSelected } = useCardInterest(
      props,
      context
    );

    return { gradientColor, toggleSelect, isSelected };
  }
});
</script>

<style scoped>
.animationSelected {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
  animation: slide-up 0.3s ease-out forwards;
}

@keyframes slide-up {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-4px);
  }
}

.animationUnselected {
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  animation: slide-down 0.3s ease-out forwards;
}

@keyframes slide-down {
  from {
    transform: translateY(-4px);
  }

  to {
    transform: translateY(0px);
  }
}
</style>
