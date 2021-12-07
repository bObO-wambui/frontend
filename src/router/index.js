import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import CreateAccount from "../views/CreateAccount.vue";
import PatientDetails from "../views/PatientDetails.vue";
import Referrals from "../views/Referrals.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "Login" },
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
  {
    path: "/create-account",
    component: CreateAccount,
    name: "CreateAccount",
  },
  {
    path: "/patient-details",
    component: PatientDetails,
    name: "PatientDetails",
  },
  {
    path: "/referrals",
    component: Referrals,
    name: "Referrals",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
