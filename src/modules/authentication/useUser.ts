import { computed, onMounted, ref } from "vue";
import { AUTH_KEY } from "../home/components/signup/constant";
import { useCurrentUser } from "./api";
import { useResult } from "@vue/apollo-composable";
import { User } from "@/apollo/types";

const EMPTY_USER = {} as User;

/**
 *  useUserHooks is internally working function, Please import useUser from index.ts instead.
 * @returns user ref, logout function, setToken function
 */
const useUserHooks = () => {
  const token = ref("");

  const isSignIn = computed(() => {
    return token.value.length !== 0;
  });

  const { result: currentUser } = useCurrentUser(isSignIn);
  const userResult = useResult(currentUser, EMPTY_USER);
  const user = computed(() => {
    return isSignIn.value ? userResult.value : EMPTY_USER;
  });

  const setToken = (tokenText: string) => {
    window.localStorage.setItem(AUTH_KEY, tokenText);
    token.value = tokenText;
  };

  /**
   * Logout is auth guard gaurantee.
   */
  const logout = () => {
    window.localStorage.removeItem(AUTH_KEY);
    window.location.reload();
  };

  /**
   * Hot logout will not gaurantee auth guard.
   */
  const hotLogout = () => {
    token.value = "";
    window.localStorage.removeItem(AUTH_KEY);
  };

  onMounted(() => {
    if (token.value.length === 0) {
      const currentToken = window.localStorage.getItem(AUTH_KEY);
      if (currentToken) {
        setToken(currentToken);
      }
    }
  });

  return { user, logout, setToken, hotLogout, isSignIn };
};

export default useUserHooks;
