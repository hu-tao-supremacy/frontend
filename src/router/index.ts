import { createRouter, createWebHistory } from "vue-router";
import Home from "../modules/home/Home.vue";

const Test = () => import("@/modules/global/TestPage.vue");

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
    }
  ]
});

export default router;
