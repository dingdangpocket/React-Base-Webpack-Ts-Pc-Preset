import Profile from "@/pages/profile/Profile";

const userRoutes = [
  {
    path: "/profile",
    component: Profile,
    exact: true,
    role: "user",
    backUrl: "/home",
  },
];

export default userRoutes;
