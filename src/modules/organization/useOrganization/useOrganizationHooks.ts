import { useResult } from "@vue/apollo-composable";
import { computed, onMounted, ref, watch } from "vue";
import { useUserOrganization } from "../api";
import { CURRENT_ORG_ID } from "./constant";

const useOrganizationHooks = () => {
  const { result, refetch } = useUserOrganization();
  const organizations = useResult(result, null, data =>
    data.currentUser.organizations.map(
      organization => organization.organization
    )
  );

  const currentOrganizationId = ref(-1);

  const currentOrganization = computed(() => {
    return organizations.value?.find(
      org => org.id === currentOrganizationId.value
    );
  });

  onMounted(() => {
    const orgIdFromStorage = Number(
      window.localStorage.getItem(CURRENT_ORG_ID)
    );
    if (orgIdFromStorage > 0) {
      currentOrganizationId.value = orgIdFromStorage;
    }
  });

  watch(organizations, () => {
    if (
      organizations.value &&
      organizations.value.length !== 0 &&
      currentOrganizationId.value === -1
    ) {
      currentOrganizationId.value = organizations.value[0].id;
    }
  });

  watch(currentOrganizationId, () => {
    window.localStorage.setItem(
      CURRENT_ORG_ID,
      `${currentOrganizationId.value}`
    );
  });

  const changeOrganizationId = (id: number) => {
    currentOrganizationId.value = id;
  };

  return {
    organizations,
    currentOrganizationId,
    changeOrganizationId,
    refetch,
    currentOrganization
  };
};

export default useOrganizationHooks;
