import { onMounted } from "vue-demi";
import { useRoute, useRouter } from "vue-router";
import useUser from "@/modules/authentication";
import { useAuthentication } from "./api";

const useLogin = () => {
  const route = useRoute();
  const router = useRouter();
  const { setToken } = useUser();
  const {
    authenticate,
    onDone: onAuthDone,
    onError: onAuthError
  } = useAuthentication();

  onMounted(() => {
    if (route.query.ticket && route.query.target) {
      authenticate({
        input: {
          providerAccessToken: route.query.ticket
        }
      });
    } else {
      router.push("/");
    }
  });

  onAuthDone(result => {
    const token = result.data.authenticate.accessToken;
    setToken(token);
    router.push(route.query.target as string);
  });

  onAuthError(error => {
    console.log(error);
  });

  return {
    authenticate
  };
};

export default useLogin;
