import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/todolist",
    name: "TodoListView",
    component: () => import("../views/TodoListView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
