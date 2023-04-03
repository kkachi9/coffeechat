// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Test from "@/views/Test.vue";
import Test1 from "@/views/test1.vue";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/test1',
    component: Test1
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
