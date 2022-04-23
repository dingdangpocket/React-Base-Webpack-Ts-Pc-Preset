import Password from "@/pages/home/password/Password";

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
