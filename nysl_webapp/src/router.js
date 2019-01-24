import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Schedule from "./views/Schedule.vue";
import MatchPage from "./views/MatchPage.vue";
import Statistics from "./views/Statistics.vue";
import About from "./views/About.vue";
import ClubPage from "./views/ClubPage.vue";
import Contacts from "./views/Contacts.vue";
import Rules from "./views/Rules.vue";
import Profile from "./views/Profile.vue";
import ResultPage from "./views/ResultPage.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/schedule",
      name: "schedule",
      component: Schedule
    },
    {
      path: "/match/:id",
      name: "match",
      component: MatchPage,
      props: true
    },
    {
      path: "/match/:name",
      name: "teamName",
      component: MatchPage,
      props: true
    },
    {
      path: "/statistics",
      name: "statistics",
      component: Statistics
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/club/:name",
      name: "clubpage",
      component: ClubPage,
      props: true
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    },
    {
      path: "/rules",
      name: "rules",
      component: Rules
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/result/:id",
      name: "result",
      component: ResultPage,
      props: true
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
