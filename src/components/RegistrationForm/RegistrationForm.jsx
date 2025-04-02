//TANIA
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

import { Icons } from "../Icons/Icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { registerThunk } from "../../redux/auth/operations";
import { validationSchemaRegister } from "../../helpers/registrationSchema";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [showPass, setShowPass] = useState(false); // Stare pentru vizibilitatea parolei
    const togglePassVisibility = () => setShowPass(!showPass); // Funcție pentru a alterna vizibilitatea

  const onSubmit = ({ email, username, password }, { resetForm }) => {
    dispatch(registerThunk({ email, username, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchemaRegister}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form className={s.form}>
          <div className={s.modalEllipse}></div>
          <div className={s.registerLogo}>
            <Icons
              name={"logo"}
              width={20}
              height={25}
              className={s.iconLogo}
            />
            <p className={s.regTitle}>Money Guard</p>
          </div>
          <div className={s.boxLabel}>
            <label className={s.label}>
              <div className="inputContainerLogo">
                <Icons
                  name={"name"}
                  width={17}
                  height={17}
                  className={s.iconName}
                />
                <Field
                  type="text"
                  name="username"
                  placeholder="Name"
                  className={s.regInput}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className={s.error}
                />
              </div>
            </label>
            <label className={s.label}>
              <div className="inputContainerLogo">
                <Icons
                  name={"email"}
                  width={17}
                  height={17}
                  className={s.iconName}
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className={s.regInput}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={s.error}
                />
              </div>
            </label>
            <label className={s.label}>
              <div className="inputContainerLogo">
                <Icons
                  name={"password"}
                  width={17}
                  height={17}
                  className={s.iconName}
                />
                <Field
                  type={showPass ? "text" : "password"} // Schimbăm tipul câmpului
                  name="password"
                  placeholder="Password"
                  className={s.regInput}
                />
                <button
                                type="button"
                                className={s.togglePassButton} // Stilizare pentru butonul de vizibilitate
                                onClick={togglePassVisibility}
                              >
                                {showPass ? (
                                  <AiOutlineEyeInvisible size={20} color="var(--white-40)" />
                                ) : (
                                  <AiOutlineEye size={20} color="var(--white-40)" />
                                )}
                              </button>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={s.error}
                />
              </div>
            </label>
            <label className={s.label}>
              <div className="inputContainerLogo">
                <Icons
                  name={"password"}
                  width={17}
                  height={17}
                  className={s.iconName}
                />
                <Field
                  type={showPass ? "text" : "password"} // Schimbăm tipul câmpului
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className={s.regInput}
                />
  <button
                                type="button"
                                className={s.togglePassButton} // Stilizare pentru butonul de vizibilitate
                                onClick={togglePassVisibility}
                              >
                                {showPass ? (
                                  <AiOutlineEyeInvisible size={20} color="var(--white-40)" />
                                ) : (
                                  <AiOutlineEye size={20} color="var(--white-40)" />
                                )}
                              </button>
                <PasswordStrengthBar
                  className={s.bar}
                  scoreWordClassName={s.infoBar}
                  password={values.password}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className={s.lastError}
                />
              </div>
            </label>
          </div>
          <button className={s.but} disabled={isSubmitting} type="submit">
            Register
          </button>
          <Link to="/login" className={s.link}>
            Login
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
