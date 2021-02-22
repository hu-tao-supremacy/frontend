<template>
  <transition :name="transitionAnimation">
    <div v-show="isVisible">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "EventCaruoselSlider",
  props: {
    currentIndex: {
      type: Number
    },
    slideIndex: {
      type: Number
    },
    transitionAnimation: {
      type: String,
      default: "slide-down"
    }
  },
  setup(props) {
    const isVisible = computed(function() {
      if (props.currentIndex === props.slideIndex) return true;
      return false;
    });

    return { isVisible };
  }
});
</script>

<style scoped>
.slide-down-enter-active {
  animation: slide-down-in 0.5s ease-in;
}
.slide-down-leave-active {
  animation: slide-down-out 0.5s ease-in;
}
@keyframes slide-down-in {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-down-out {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%);
  }
}

.slide-up-enter-active {
  animation: slide-yp-in 0.5s ease-in;
}
.slide-up-leave-active {
  animation: slide-yp-out 0.5s ease-in;
}
@keyframes slide-up-in {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-up-out {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%);
  }
}
</style>
