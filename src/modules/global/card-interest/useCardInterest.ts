import { ref, computed, SetupContext } from "vue";

export default function useCardInterest(
  props: Readonly<
    {
      interestName: string;
      img: string;
      imgHash: string;
      interestID: number;
    } & {}
  >,
  context: SetupContext<"toggle-select"[]>
) {
  const isSelected = ref(false);

  function toggleSelect() {
    isSelected.value = !isSelected.value;
    context.emit("toggle-select", props.interestID);
  }

  const gradientColor = computed(() => {
    if (isSelected.value) return "to-primary";
    return "to-gray-10-0.75";
  });

  return { gradientColor, toggleSelect, isSelected };
}
