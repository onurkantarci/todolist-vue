import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../components/TodoCount.vue"),
  },
  {
    path: "/todolist",
    name: "TodoListView",
    component: () => import("../components/TodoList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
