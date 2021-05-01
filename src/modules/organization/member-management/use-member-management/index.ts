import { useRoute, useRouter } from "vue-router";
import { useMemberManagementApi } from "../api";
import { useResult } from "@vue/apollo-composable";

const useMemberManagement = () => {
  const route = useRoute();
  const router = useRouter();
  const organizationId = Number(route.params.id);
  const { result, onError } = useMemberManagementApi({
    id: organizationId
  });

  onError(() => {
    router.push("/404");
  });

  const members = useResult(result, null, data =>
    data.organization.userOrganizations.map(userOrg => userOrg.user)
  );

  return { members };
};

export default useMemberManagement;
