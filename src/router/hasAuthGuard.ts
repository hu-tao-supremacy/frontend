import { RouteLocationNormalizedLoaded } from "vue-router";
import authGuard from "./authGuard";

const hasAuthGuard = (route: RouteLocationNormalizedLoaded) => {
  return !!route.matched.find(component => component.beforeEnter === authGuard);
};

export default hasAuthGuard;
