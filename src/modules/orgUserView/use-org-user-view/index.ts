import { useRoute, useRouter } from "vue-router";
import { useOrganizationApi } from "../api";
import { useResult } from "@vue/apollo-composable";

const useOrgUserView = () => {
  const route = useRoute();
  const router = useRouter();
  const organizationId = Number(route.params.id);
  const { result, onError } = useOrganizationApi({
    id: organizationId
  });

  onError(() => {
    router.push("/404");
  });

  const organization = useResult(result, null, data => data.organization);
  const events = useResult(result, null, data => data.organization.events);

  return { organization, events };
};

export default useOrgUserView;
