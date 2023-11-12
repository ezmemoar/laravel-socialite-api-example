import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: import("../layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "index",
        component: import("../views/Index.vue"),
      },
      {
        path: "/login/:provider?",
        name: "login",
        component: import("../views/Login.vue"),
      },
    ],
  },
];
