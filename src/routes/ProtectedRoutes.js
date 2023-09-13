import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ element }) => {
  const isLoggedIn = localStorage.getItem("isLoggedin");

  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  } else {
    return element;
  }
};

export default ProtectedRoutes;
