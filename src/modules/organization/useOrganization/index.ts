import { inject } from "vue";
import { userOrganizationSymbol } from "./constant";
import useOrganizationHooks from "./useOrganizationHooks";

const useOrganization = () => inject(userOrganizationSymbol);

export default useOrganization as typeof useOrganizationHooks;
