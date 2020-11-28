import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { userGuard } from "@/guards/userGuard";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    beforeEnter: userGuard,
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/addCard",
    name: "addCard",
    beforeEnter: userGuard,
    component: () => import("@/views/AddCard.vue"),
  },
  {
    path: "/viewCards",
    name: "viewCards",
    beforeEnter: userGuard,
    component: () => import("@/views/ViewCards.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
