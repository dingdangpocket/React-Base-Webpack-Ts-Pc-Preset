import Description from "@/pages/description/Description";
import Home from "@/pages/home/Home";
import Password from "@/pages/password/Password";
import Profile from "@/pages/profile/Profile";

const publicRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
    children: [{ path: "/home/profile", component: Profile, exact: true }],
  },
  {
    path: "/description",
    component: Description,
    exact: true,
  },
  {
    path: "/password",
    component: Password,
    exact: true,
  },
];

export default publicRoutes;
