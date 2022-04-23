import Description from "@/pages/description/Description";
import Home from "@/pages/home/Home";

const publicRoutes = [
  {
    path: "/description",
    component: Description,
    exact: true,
  },
  {
    path: "/",
    component: Home,
    exact: true,
  },
];

export default publicRoutes;
