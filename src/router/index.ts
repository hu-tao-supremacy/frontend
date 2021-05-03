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
const CreateOrg = () =>
  import("@/modules/organization/createOrg/CreateOrgPage.vue");
const CreateFeedback = () =>
  import("@/modules/createEventFeedback/CreateEventFeedbackPage.vue");
const CreateForm = () =>
  import("@/modules/createEventForm/CreateEventFormPage.vue");
const MemberManagementPage = () =>
  import("@/modules/organization/member-management/MemberManagementPage.vue");
const AttendeeManagementPage = () =>
  import(
    "@/modules/organization/event/attendee-management/AttendeeManagementPage.vue"
  );
const OrgEventDashboardPage = () =>
  import("@/modules/organization/event/dashboard/Dashboard.vue");
const Login = () => import("@/modules/login/Login.vue");
const NotFound = () => import("@/modules/not-found/NotFound.vue");
const PageSkeleton = () =>
  import("@/commons/components/page-skeleton/PageSkeleton.vue");
const PageSkeletonOrgTeam = () =>
  import(
    "@/commons/components/page-skeleton/organization/PageSkeletonOrgTeam.vue"
  );
const PageSkeletonOrgEvent = () =>
  import(
    "@/commons/components/page-skeleton/organization/PageSkeletonOrgEvent.vue"
  );
const OrgInfo = () => import("@/modules/orgInfo/OrgInfo.vue");
const CreateEventPage = () =>
  import("@/modules/organization/createEvent/CreateEventPage.vue");
const OrganizationProvider = () =>
  import(
    "@/modules/organization/useOrganization/components/OrganizationProvider.vue"
  );
const MoreRecommended = () =>
  import(
    "@/modules/viewMore/view-more-recommended/ViewMoreRecommendedPage.vue"
  );
const MoreOrganizations = () =>
  import(
    "@/modules/viewMore/view-more-organization/ViewMoreOrganizationsPage.vue"
  );
const MoreUpcoming = () =>
  import("@/modules/viewMore/view-more-upcoming/ViewMoreUpcomingPage.vue");
const MoreOnline = () =>
  import("@/modules/viewMore/view-more-online/ViewMoreOnlinePage.vue");
const SearchedEvents = () =>
  import("@/modules/viewMore/search/SearchedPage.vue");

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
          path: "event-register/:id",
          component: EventRegister,
          beforeEnter: authGuard
        },
        {
          path: "event-feedback/:id",
          component: EventFeedback
        },
        {
          path: "/org-info/:id",
          component: OrgInfo
        },
        {
          path: "/more-recommended-events",
          component: MoreRecommended
        },
        {
          path: "/more-organizations",
          component: MoreOrganizations
        },
        {
          path: "/more-upcoming-events",
          component: MoreUpcoming
        },
        {
          path: "/more-online-events",
          component: MoreOnline
        },
        {
          path: "/search",
          component: SearchedEvents
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
      component: OrganizationProvider,
      beforeEnter: authGuard,
      children: [
        {
          path: "team",
          component: PageSkeletonOrgTeam,
          children: [
            { path: "", component: OrgHome },
            { path: "create-event", component: CreateEventPage },
            { path: "create-org", component: CreateOrg },
            {
              path: "/create-event-form/:id",
              component: CreateForm
            },
            {
              path: "/member-management/:id",
              component: MemberManagementPage
            }
          ]
        },
        {
          path: "event",
          component: PageSkeletonOrgEvent,
          children: [
            { path: "", redirect: "/404" },
            { path: ":id", component: OrgEventDashboardPage },
            {
              path: "attendee-management/:id",
              component: AttendeeManagementPage
            },
            {
              path: "create-event-feedback/:id",
              component: CreateFeedback
            }
          ]
        },
        {
          path: "",
          redirect: "/404"
        }
      ]
    },
    { path: "/login", component: Login },
    {
      path: "/:catchAll(.*)",
      redirect: "/404"
    }
  ]
});

export default router;
