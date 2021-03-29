import { createRouter, createWebHistory } from "vue-router";

import Home from "@/modules/home/Home.vue";
const Test = () => import("@/modules/authentication/TestPage.vue");
const EventInfo = () => import("@/modules/eventInfo/EventInfoPage.vue");
const Wallet = () => import("@/modules/wallet/WalletPage.vue");
const UserCheckIn = () => import("@/modules/userCheckIn/UserCheckInPage.vue");
const EventRegister = () => import("@/modules/eventRegister/EventRegisterPage.vue");

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
      path: "/event-register",
      component: EventRegister
    },
  ]
});

export default router;
