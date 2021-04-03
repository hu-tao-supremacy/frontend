import { computed, Ref } from "vue";
export default function useRegistrationStatus(step: Ref<number>) {
  const step1 = computed(() => {
    return step.value === 1 || step.value === 2 || step.value === 3;
  });
  const step2 = computed(() => {
    return step.value === 2 || step.value === 3;
  });
  const step3 = computed(() => {
    return step.value === 3;
  });

  return { step1, step2, step3 };
}
