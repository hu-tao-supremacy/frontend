import { useRoute } from "vue-router";
import { useAuthentication } from "./api";

const AUTH_KEY = "token";

export const useAuth = () => {
  const route = useRoute();
  const { authenticate, onDone, onError } = useAuthentication();

  if (route.query.ticket) {
    authenticate({
      input: {
        providerAccessToken: route.query.ticket
      }
    });
  }

  const setToken = (token: string) => {
    window.localStorage.setItem(AUTH_KEY, token);
  };

  onDone(result => {
    const token = result.data.authenticate.accessToken;
    setToken(token);
  });

  onError(error => {
    console.log(error, "err");
  });

  const logout = () => {
    window.localStorage.removeItem(AUTH_KEY);
  };

  return {
    logout,
    authenticate
  };
};
