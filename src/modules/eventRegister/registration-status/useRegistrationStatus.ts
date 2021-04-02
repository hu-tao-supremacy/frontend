import { computed } from "vue";
export default function useRegistrationStatus(step: number) {
  const step1 = computed(() => {
    return step === 1 || step === 2 || step === 3;
  });
  const step2 = computed(() => {
    return step === 2 || step === 3;
  });
  const step3 = computed(() => {
    return step === 3;
  });

  return { step1, step2, step3 };
}
