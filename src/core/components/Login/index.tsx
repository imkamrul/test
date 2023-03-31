import React, { useEffect } from "react";
import { Input, Button, Checkbox, message, Space } from "antd";
import { IFormBuilder } from "../Form/Form.types";
import Form from "../Form";
import AuthHero from "../AuthHero";
import Styles from "./Login.module.scss";
import Link from "next/link";
import Google from "../icons/Google";
import Facebook from "../icons/Facebook";
// import { DownloadOutlined } from "@ant-design/icons";

const Login = () => {
  const loginForm: IFormBuilder = {
    title: "",
    layout: "vertical",
    hideFormButtons: true,
    size: "large",
    controls: [
      {
        label: "E-Mail",
        type: "text",
        name: "email",
        placeHolder: "Put your email here.",
        colSpan: 24,
        active: true,
        validation: [
          {
            required: true,
            message: "Please enter a email",
          },
          {
            type: "email",
            message: "Please enter valid email",
          },
        ],
      },
      {
        label: "Password",
        type: "password",
        name: "password",
        placeHolder: "Put your password here.",
        colSpan: 24,
        active: true,
        validation: [
          {
            required: true,
            message: "Please enter a email",
          },
        ],
      },
    ],
  };

  const onSubmit = (value: any, form: any) => {
    console.log(value, form);
  };

  return (
    <>
      <AuthHero />
      <div className={Styles.loginForm}>
        <div className={Styles.loginHeader}>
          <img src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1680061656/logo-login.svg" />
        </div>
        <div className={Styles.loginBody}>
          <Form loading={false} formBuilder={loginForm} onSubmit={onSubmit} />
          <div className={Styles.allBtn}>
            <Button type="primary" block size="large">
              Log In
            </Button>
            <Link href="#">Forget Password?</Link>
            <Button
              type="primary"
              className={Styles.socialBtn}
              size="large"
              icon={<Google />}
            >
              <span className="ml-3"> Log In with Google</span>
            </Button>
            <Button
              type="primary"
              className={`${Styles.socialBtn} mt-4`}
              size="large"
              icon={<Facebook />}
            >
              <span className="ml-3"> Log In with Google</span>
            </Button>
            <p className="mt-5">
              Dont have an account?{" "}
              <Link href="#" className="ml-2">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.dashboardTour}>
        <h3>Wellcome to Exclusive Dashboard Tour</h3>
        <p>
          Get access to exclusive tour of our platform within 10 seconds, by
          simply submitting the following information.
        </p>
        <img src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1680066478/demo-dashboard.png" />
      </div>
    </>
  );
};

export default Login;
