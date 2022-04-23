import Description from "@/pages/description/Description";
import Home from "@/pages/home/Home";
import Password from "@/pages/home/password/Password";
import Profile from "@/pages/profile/Profile";

const publicRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
    routes: [{ path: "/home/profile", component: Profile}],
  },
  {
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    path: "/description",
    component: Description,
    exact: true,
    routes: [{ path: "/description/profile", component: Password}],
  },
  {
    path: "/password",
    component: Password,
    exact: true,
  },
];

export default publicRoutes;
