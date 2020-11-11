import React from "react";
import img from "../../assets/svgs/login.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import { withRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
const Login = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required").min(8, "Password is too short"),
  });

  const formik = useFormik({
    initialValues,
    //   onSubmit,
    validationSchema,
  });
  const handleLogin = (userData) => {
    props
      .loginUser(userData)
      .then((res) =>
        res.status === (200 || 'success') ? setTimeout(() => {
          props.history.push("/dashboard/statistic");
        }, 1000) : props.history.push("/")
      );
  };  
  return (
    <Layout>
      {" "}
      <div className="login-container">
        <div className="login-data">
          <h1>Log in.</h1>
          <form onSubmit={formik.handleSubmit} className="login-data__form">
            <div className="login-data__form__input-box">
              <label> Your e-mail</label>
              <input
                {...formik.getFieldProps("email")}
                name="email"
                placeholder="Write email"
                type="email"
                style={
                  formik.touched.email && formik.errors.email
                    ? { borderColor: "red" }
                    : { borderColor: "#7b7b7b" }
                }
              ></input>
              {formik.touched.email && formik.errors.email ? (
                <p className="error-input">{formik.errors.email}</p>
              ) : null}
            </div>
            <div className="login-data__form__input-box">
              <label>Password</label>
              <input
                {...formik.getFieldProps("password")}
                name="password"
                placeholder="Qwerty"
                type="password"
                style={
                  formik.touched.password && formik.errors.password
                    ? { borderColor: "red" }
                    : { borderColor: "#7b7b7b" }
                }
              ></input>
              {formik.touched.password && formik.errors.password ? (
                <p className="error-input">{formik.errors.password}</p>
              ) : null}
            </div>
            <button
              onClick={() => handleLogin(formik.values)}
              className="auth-btn"
            >
              Log in
            </button>
          </form>
        </div>
        <div className="login-piture">
          <img src={img} width="620"></img>
        </div>
      </div>
    </Layout>
  );
};

export default connect(null, { loginUser })(withRouter(Login));
