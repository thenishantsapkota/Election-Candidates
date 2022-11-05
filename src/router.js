import { createRouter, createWebHistory } from "vue-router";
import Candidates from "./components/Candidates.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Candidates,
      props: {
        apiUrl: "https://server-three-xi.vercel.app/api/national",
        electionType: "National",
      },
    },
    {
      path: "/province",
      component: Candidates,
      props: {
        apiUrl: "https://server-three-xi.vercel.app/api/province",
        electionType: "Province",
      },
    },
  ],
});
