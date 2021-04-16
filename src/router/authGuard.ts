import { AUTH_KEY } from "@/modules/signup/constant";
import { NavigationGuardWithThis } from "vue-router";

const authGuard: NavigationGuardWithThis<undefined> = (_, __, next) => {
  const isSignIn = !!window.localStorage.getItem(AUTH_KEY);
  if (!isSignIn) next("/");
  else next();
};

export default authGuard;
