import { computed, onMounted, ref, watch } from "vue";
import { AUTH_KEY } from "../home/components/signup/constant";
import { useCurrentUser } from "./api";
import { useResult } from "@vue/apollo-composable";
import { User } from "@/apollo/types";
import isEmpty from "@/commons/utils/isEmpty";
import { useRouter } from "vue-router";

const EMPTY_USER = {} as User;

/**
 *  useUserHooks is internally working function, Please import useUser from index.ts instead.
 * @returns user ref, logout function, setToken function
 */
const useUserHooks = () => {
  const token = ref("");
  const router = useRouter();
  const hasToken = computed(() => {
    return token.value.length !== 0;
  });

  const { result: currentUser } = useCurrentUser(hasToken);
  const user = useResult(currentUser, EMPTY_USER);

  const isSignIn = computed(() => {
    return !isEmpty(user.value);
  });

  watch(user, () => {
    console.log(user.value, "user");
    if (user.value.didSetup === false) {
      router.push("/?signup=1");
    }
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
