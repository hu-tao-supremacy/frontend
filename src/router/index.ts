import { createRouter, createWebHistory } from "vue-router";
import authGuard from "./authGuard";

const Home = () => import("@/modules/home/Home.vue");
const Test = () => import("@/modules/test/TestPage.vue");
const EventInfo = () => import("@/modules/eventInfo/EventInfoPage.vue");
const Wallet = () => import("@/modules/wallet/WalletPage.vue");
const UserCheckIn = () => import("@/modules/userCheckIn/UserCheckInPage.vue");
const OrgGreet = () =>
  import("@/modules/organization/greeting/GreetingPage.vue");
const Login = () => import("@/modules/login/Login.vue");
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
          path: "event",
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
        }
      ]
    },
    {
      path: "/org",
      component: PageSkeleton, //Will later change to page skeleton of org page
      children: [{ path: "greeting", component: OrgGreet }]
    },
    { path: "/login", component: Login }
  ]
});

export default router;
