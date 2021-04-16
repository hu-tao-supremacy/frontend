import { Organization } from "@/apollo/types";
import { computed, Ref } from "vue";

export default function useCardOrganization(
  organization?: Ref<Organization | undefined>
) {
  const orgShortNameTextSize = computed(() => {
    if (!organization?.value?.abbreviation) return "";
    return organization?.value?.abbreviation.length > 5
      ? "text-2xl"
      : "text-3xl";
  });

  return {
    orgShortNameTextSize
  };
}
