import { ref } from "vue";
import { Banner } from "@/commons/Interfaces/index";

export default function useEventCarousel(events: Banner[]) {
  const currentIndex = ref(0);
  const transitionAnimation = ref("");
  let slideTimer: number | undefined;

  function startTimer() {
    slideTimer = window.setInterval(function() {
      transitionAnimation.value = "slide-down";
      const nextSlide =
        currentIndex.value + 1 >= events.length ? 0 : currentIndex.value + 1;
      currentIndex.value = nextSlide;
    }, 5000);
  }

  function resetTimer() {
    clearInterval(slideTimer);
    startTimer();
  }

  function changeSlide(slideIndex: number) {
    if (slideIndex === currentIndex.value) return;
    else if (slideIndex > currentIndex.value)
      transitionAnimation.value = "slide-down";
    else transitionAnimation.value = "slide-up";
    currentIndex.value = slideIndex;
    resetTimer();
  }

  return {
    currentIndex,
    transitionAnimation,
    changeSlide
  };
}
