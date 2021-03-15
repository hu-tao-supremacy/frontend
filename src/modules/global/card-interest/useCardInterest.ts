import { ref, computed } from "vue";

export default function useCardInterest() {
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
