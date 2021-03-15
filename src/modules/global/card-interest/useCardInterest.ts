import { ref, computed, SetupContext } from "vue";

export default function useCardInterest(
  props: Readonly<
    {
      interestName: string;
      imgUrl: string;
    } & {}
  >,
  context: SetupContext
) {
  const isSelected = ref(false);

  function toggleSelect() {
    isSelected.value = !isSelected.value;
    context.emit("toggle-select", props.interestName);
  }

  const gradientColor = computed(() => {
    if (isSelected.value) return "to-primary";
    return "to-gray-10-0.75";
  });

  return { gradientColor, toggleSelect };
}
