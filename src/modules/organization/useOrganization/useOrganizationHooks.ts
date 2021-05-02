import { useResult } from "@vue/apollo-composable";
import { ref, watch } from "vue";
import { useUserOrganization } from "../api";

const useOrganizationHooks = () => {
  const { result } = useUserOrganization();
  const organizations = useResult(
    result,
    null,
    data => data.currentUser.organizations
  );
  const currentOrganizationId = ref(-1);

  watch(organizations, () => {
    if (organizations.value) {
      currentOrganizationId.value = organizations.value[0].organization.id;
    }
  });

  const changeOrganizationId = (id: number) => {
    currentOrganizationId.value = id;
  };

  return { organizations, currentOrganizationId, changeOrganizationId };
};

export default useOrganizationHooks;
