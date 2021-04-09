import { onMounted } from "vue-demi";
import { useRoute, useRouter } from "vue-router";
import useUser from "@/modules/authentication";
import { useAuthentication } from "./api";

const useLogin = () => {
  const route = useRoute();
  const router = useRouter();
  const { setToken, user } = useUser();
  const { authenticate, onDone, onError } = useAuthentication();

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

  onDone(result => {
    const token = result.data.authenticate.accessToken;
    setToken(token);
    // wait to connect to backend status
    const isFirstTimeLogin = !user.value.didSetup;
    if (isFirstTimeLogin) {
      router.push(`${route.query.target}?signup=1`);
    } else {
      router.push(route.query.target as string);
    }
  });

  onError(error => {
    console.log(error);
  });

  return {
    authenticate
  };
};

export default useLogin;
