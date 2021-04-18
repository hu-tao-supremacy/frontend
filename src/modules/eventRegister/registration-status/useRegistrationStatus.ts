import { computed, Ref } from "vue";
export default function useRegistrationStatus(step: Ref<number>) {
  const enableStep1 = computed(() => {
    return step.value === 1 || step.value === 2 || step.value === 3;
  });
  const enableStep2 = computed(() => {
    return step.value === 2 || step.value === 3;
  });
  const enableStep3 = computed(() => {
    return step.value === 3;
  });

  return { enableStep1, enableStep2, enableStep3 };
}
