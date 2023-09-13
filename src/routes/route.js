import Aboutus from "../components/Aboutus";
import Home from "../components/Home";
import Login from "../components/Login";
import ProtectedRoutes from "./ProtectedRoutes";

export const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/about",
    element: <ProtectedRoutes element={<Aboutus />} />,
  },
  {
    path: "/home",
    element: <ProtectedRoutes element={<Home />} />,
  },
];
