import { createRouter, createWebHistory } from "vue-router";

import Home from "@/modules/home/Home.vue";
const Test = () => import("@/modules/authentication/TestPage.vue");
const EventInfo = () => import("@/modules/eventInfo/EventInfoPage.vue");
const Wallet = () => import("@/modules/wallet/WalletPage.vue");
const UserCheckIn = () => import("@/modules/userCheckIn/UserCheckInPage.vue");
const OrgGreet = () =>
  import("@/modules/organization/greeting/GreetingPage.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/test",
      component: Test
    },
    {
      path: "/event",
      component: EventInfo
    },
    {
      path: "/wallet",
      component: Wallet
    },
    {
      path: "/user-checkin",
      component: UserCheckIn
    },
    {
      path: "/org/greet",
      component: OrgGreet
    }
  ]
});

export default router;
