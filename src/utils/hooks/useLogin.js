import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../helper";
import Swal from "sweetalert2";
import { admin_credentials } from "../constant";

export const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    if (
      values.email !== admin_credentials.email ||
      values.password !== admin_credentials.password
    ) {
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Provide valid email and password",
        confirmButtonColor: "#f5a302",
      });
    } else {
      setIsLogin(true);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  useEffect(() => {
    if (isLogin) {
      localStorage.setItem("isLoggedin", "true");
      navigate("/home");
    }
    isLoggedIn() && navigate("/home");
  }, [isLogin, navigate]);
  return {
    isLogin,
    setIsLogin,
    showPassword,
    setShowPassword,
    togglePasswordVisibility,
    handleSubmit,
  };
};
