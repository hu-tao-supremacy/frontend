import { inject } from "vue";
import { organizationEventSymbol } from "./constant";
import useOrgEventHooks from "./useOrgEventHooks";

const useOrgEvent = () => inject(organizationEventSymbol);

export default useOrgEvent as typeof useOrgEventHooks;
