import Password from "@/pages/password/Password";

const adminRoutes = [
  {
    path: "/password",
    component: Password,
    exact: true,
    role: "admin",
    backUrl: "/home",
  },
];

export default adminRoutes;
