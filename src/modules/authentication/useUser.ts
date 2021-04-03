import { computed, onMounted, reactive, ref, watch } from "vue";
import { AUTH_KEY } from "../home/components/signup/constant";

const EMPTY_USER = {};

/**
 *  useUserHooks is internally working function, Please import useUser from index.ts instead.
 * @returns user ref, logout function, setToken function
 */
const useUserHooks = () => {
  const user = reactive(EMPTY_USER);
  const token = ref("");

  const setToken = (tokenText: string) => {
    window.localStorage.setItem(AUTH_KEY, tokenText);
    token.value = tokenText;
  };

  const logout = () => {
    window.localStorage.removeItem(AUTH_KEY);
    window.location.reload();
  };

  onMounted(() => {
    if (token.value.length === 0) {
      const currentToken = window.localStorage.getItem(AUTH_KEY);
      if (currentToken) {
        setToken(currentToken);
      }
    }
  });

  const isSignIn = computed(() => {
    return token.value.length !== 0;
  });

  return { user, logout, setToken, isSignIn };
};

export default useUserHooks;
