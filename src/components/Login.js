import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styles from "./Login.module.css";
import { useLogin } from "../utils/hooks/useLogin";
import { loginInitialValues, loginValidation } from "../utils/validation";

const Login = () => {
  const { showPassword, togglePasswordVisibility, handleSubmit } = useLogin();
  const initialValues = loginInitialValues();
  const validationSchema = loginValidation();
  return (
    <div className={styles.login_main_div}>
      <div className={`container justify`}>
        <div className="row justify-content-center">
          <div className={`col-md-6 ${styles.container}`}>
            <h2 className="mt-5 mb-4 text-center">Login</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="w-75  mx-auto pb-3">
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control "
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="mt-3">
                    Password:
                  </label>
                  <div className="input-group">
                    <Field
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="form-control "
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{
                          borderRadius: "0",
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                        }}
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <AiFillEyeInvisible
                            className={styles.custom_btn_color}
                          />
                        ) : (
                          <AiFillEye className={styles.custom_btn_color} />
                        )}
                      </button>
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <button type="submit" className="btn btn-warning mt-3 ">
                  Login
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
