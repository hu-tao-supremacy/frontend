import { ref } from "vue";

export default function useEventCarousel() {
  const currentIndex = ref(0);
  const transitionAnimation = ref("");
  let slideTimer: number | undefined;
  const testEventProps = [
    { eventTitle: "Event Title 1" },
    { eventTitle: "Event Title 2" },
    { eventTitle: "Event Title 3" },
    { eventTitle: "Event Title 4" }
  ];

  function startTimer() {
    slideTimer = setInterval(function() {
      transitionAnimation.value = "slide-down";
      const nextSlide =
        currentIndex.value + 1 >= testEventProps.length
          ? 0
          : currentIndex.value + 1;
      currentIndex.value = nextSlide;
    }, 5000);
  }
  startTimer();

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
    testEventProps,
    currentIndex,
    transitionAnimation,
    changeSlide
  };
}
