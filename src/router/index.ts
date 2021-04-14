import { createRouter, createWebHistory } from "vue-router";
import authGuard from "./authGuard";

const Home = () => import("@/modules/home/Home.vue");
const Test = () => import("@/modules/test/TestPage.vue");
const EventInfo = () => import("@/modules/eventInfo/EventInfoPage.vue");
const Wallet = () => import("@/modules/wallet/WalletPage.vue");
const UserCheckIn = () => import("@/modules/userCheckIn/UserCheckInPage.vue");
const EventRegister = () =>
  import("@/modules/eventRegister/EventRegisterPage.vue");
const OrgHome = () => import("@/modules/organization/home/OrgHomePage.vue");
const Login = () => import("@/modules/login/Login.vue");
const NotFound = () => import("@/modules/not-found/NotFound.vue");
const PageSkeleton = () => import("@/commons/components/PageSkeleton.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: PageSkeleton,
      children: [
        {
          path: "",
          component: Home
        },
        {
          path: "test",
          component: Test
        },
        {
          path: "event/:id",
          component: EventInfo
        },
        {
          path: "wallet",
          component: Wallet
        },
        {
          path: "user-checkin",
          component: UserCheckIn,
          beforeEnter: authGuard
        },
        {
          path: "/event-register",
          component: EventRegister
        },

        { path: "/404", component: NotFound }
      ]
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/org",
      component: PageSkeleton, //Will later change to page skeleton of org page
      children: [{ path: "", component: OrgHome }]
    },
    { path: "/login", component: Login }
    // {
    //   path: "/:catchAll(.*)",
    //   redirect: "/404"
    // }
  ]
});

export default router;
