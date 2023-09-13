import * as Yup from "yup";

//-----------------------------------------------LOGIN FORM VALIDATION
export const loginInitialValues = () => {
  return {
    email: "",
    password: "",
  };
};
export const loginValidation = () => {
  const obj = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  return obj;
};

//------------------------------------------------------------------------
