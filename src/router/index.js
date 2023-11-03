import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main";
import Shows from "@/pages/Shows";
import How from "@/pages/How";
import Cost from "@/pages/Cost";
import Blog from "@/pages/Blog";
import Contacts from "@/pages/Contacts";
import About from "@/pages/About";
import Show from "@/pages/Show";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/shows',
    component: Shows
  },
  {
    path: '/shows/:slug',
    component: Show
  },
  {
    path: '/how',
    component: How
  },
  {
    path: '/cost',
    component: Cost
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/about',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})

export default router
