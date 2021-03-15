import { ref, computed } from "vue";

export default function useCardInterest() {
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
