import { inject } from "vue";
import { userSymbol } from "./constant";
import useUserHooks from "./useUser";

const useUser = () => inject(userSymbol);

export default useUser as typeof useUserHooks;
