import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Navbar from "../components/Navbar.vue";
import Services from "../components/Services.vue";
import Contacts from "../components/Contacts.vue";
import History from "../components/History";
import page from "../components/page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Navbar",
    name: "Navnar",
    component: Navbar,
  },
  {
    path: "/Services",
    name: "Services",
    component: Services,
  },
  {
    path: "/",
    name: "page",
    component: page,
  },
  {
    path: "/History",
    name: "History",
    component: History,
  },
  {
    path: "/Contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
