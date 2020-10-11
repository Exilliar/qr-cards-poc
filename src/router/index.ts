import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/addCard",
    name: "addCard",
    component: () => import("@/views/AddCard.vue"),
  },
  {
    path: "/viewCards",
    name: "viewCards",
    component: () => import("@/views/ViewCards.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
