import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login/index.vue"),
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
