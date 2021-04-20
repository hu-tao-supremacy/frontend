import { QuestionGroup } from "./../apollo/types";
import { createRouter, createWebHistory } from "vue-router";
import authGuard from "./authGuard";

const Home = () => import("@/modules/home/Home.vue");
const Test = () => import("@/modules/test/TestPage.vue");
const EventInfo = () => import("@/modules/eventInfo/EventInfoPage.vue");
const Wallet = () => import("@/modules/wallet/WalletPage.vue");
const UserCheckIn = () => import("@/modules/userCheckIn/UserCheckInPage.vue");
const EventRegister = () =>
  import("@/modules/eventRegister/EventRegisterPage.vue");
const EventFeedback = () =>
  import("@/modules/eventFeedback/EventFeedbackPage.vue");
const OrgHome = () => import("@/modules/organization/home/OrgHomePage.vue");
const CreateFeedback = () =>
  import("@/modules/createEventFeedback/CreateEventFeedbackPage.vue");
const Login = () => import("@/modules/login/Login.vue");
const NotFound = () => import("@/modules/not-found/NotFound.vue");
const PageSkeleton = () =>
  import("@/commons/components/page-skeleton/PageSkeleton.vue");
const PageSkeletonOrgTeam = () =>
  import(
    "@/commons/components/page-skeleton/organization/PageSkeletonOrgTeam.vue"
  );

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
          path: "user-checkin/:id",
          component: UserCheckIn,
          beforeEnter: authGuard
        },
        {
          path: "/event-register/:id",
          component: EventRegister,
          beforeEnter: authGuard
        },
        {
          path: "/event-feedback",
          component: EventFeedback
        },
        {
          path: "/create-event-feedback/:id",
          component: CreateFeedback
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
      component: PageSkeletonOrgTeam,
      children: [{ path: "", component: OrgHome }]
    },
    { path: "/login", component: Login },
    {
      path: "/:catchAll(.*)",
      redirect: "/404"
    }
  ]
});

export default router;
