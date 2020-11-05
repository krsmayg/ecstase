import React from "react";
import {withRouter} from 'react-router-dom'
import img from "../../assets/svgs/art-gallery.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { signupUser } from "../../actions/auth";
import Layout from "../Layout/Layout";

const SignUp = (props) => {
  const initialValues = {
    email: "",
    password: "",
    name: "",
    passwordConfirm: "",
  };
  const onSubmit = (values) => {
    // console.log("Formik data: ", values)
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Name is too short at least 3"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password is too short - should be 8 chars minimum."),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const handleSignUp = (userData) => {
    props
      .signupUser(userData)
      .then((res) =>
        res.status === (200 || "success")
          ? props.history.push("/dashboard")
          : props.history.push("/")
      );
  };
  return (
    <Layout>
      <div className="login-container">
        <div className="login-data">
          <h1>SignUp.</h1>
          <form onSubmit={formik.handleSubmit} className="login-data__form">
            <div className="login-data__form__input-box">
              <label> Your name</label>
              <input
                {...formik.getFieldProps("name")}
                name="name"
                placeholder="Write name"
                type="name"
                style={
                  formik.touched.name && formik.errors.name
                    ? { borderColor: "red" }
                    : { borderColor: "#7b7b7b" }
                }
              ></input>
              {formik.touched.name && formik.errors.name ? (
                <p className="error-input">{formik.errors.name}</p>
              ) : null}
            </div>
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
            <div className="login-data__form__input-box">
              <label>Password Confirm</label>
              <input
                {...formik.getFieldProps("passwordConfirm")}
                name="passwordConfirm"
                placeholder="Password Confirm"
                type="password"
                style={
                  formik.touched.password && formik.errors.password
                    ? { borderColor: "red" }
                    : { borderColor: "#7b7b7b" }
                }
              ></input>
              {formik.touched.passwordConfirm &&
              formik.errors.passwordConfirm ? (
                <p className="error-input">{formik.errors.passwordConfirm}</p>
              ) : null}
            </div>
            <button
              onClick={() => handleSignUp(formik.values)}
              className="auth-btn"
            >
              Sign up
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

export default connect(null, { signupUser })(withRouter(SignUp));
