import { computed, onMounted, ref, watch } from "vue";
import { AUTH_KEY } from "../signup/constant";
import { useCurrentUser } from "./api";
import { useResult } from "@vue/apollo-composable";
import { User } from "@/apollo/types";
import isEmpty from "@/commons/utils/isEmpty";
import { useRoute, useRouter } from "vue-router";
import hasAuthGuard from "@/router/hasAuthGuard";

const EMPTY_USER = {} as User;

/**
 *  useUserHooks is internally working function, Please import useUser from index.ts instead.
 * @returns user ref, logout function, setToken function
 */
const useUserHooks = () => {
  const token = ref("");
  const router = useRouter();
  const route = useRoute();
  const hasToken = computed(() => {
    return token.value.length !== 0;
  });

  const { result, refetch, onError } = useCurrentUser(hasToken);
  const userResult = useResult(result, EMPTY_USER, data => data.currentUser);
  const user = computed(() => {
    return hasToken.value ? userResult.value : EMPTY_USER;
  });

  const isSignIn = computed(() => {
    return !isEmpty(user.value);
  });

  watch(user, () => {
    if (user.value.didSetup === false) {
      router.push(`${route.path}?signup=1`);
    }
  });

  const setToken = (tokenText: string) => {
    window.localStorage.setItem(AUTH_KEY, tokenText);
    token.value = tokenText;
  };

  const logout = () => {
    window.localStorage.removeItem(AUTH_KEY);
    if (hasAuthGuard(route)) {
      window.location.reload();
    } else {
      token.value = "";
    }
  };

  onError(() => {
    logout();
  });

  onMounted(() => {
    if (token.value.length === 0) {
      const currentToken = window.localStorage.getItem(AUTH_KEY);
      if (currentToken) {
        setToken(currentToken);
      }
    }
  });

  return { user, logout, setToken, isSignIn, refetch };
};

export default useUserHooks;
