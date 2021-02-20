import { createRouter, createWebHistory } from "vue-router";
import Home from "../modules/home/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home
    }
  ]
});

export default router;
