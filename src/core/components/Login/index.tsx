import React, { useEffect, useState } from "react";
import { Input, Button, Checkbox, message, Space } from "antd";
import { IFormBuilder } from "../Form/Form.types";
import Form from "../Form";
import AuthHero from "../AuthHero";
import Styles from "./Login.module.scss";
import { AllButton } from "./AllButton";
import { authenticate, setToken, setUseInfo } from "@/services/auth.service";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const loginForm: IFormBuilder = {
    title: "",
    buttonComponent: <AllButton btnLoading={loading} />,
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

  const onSubmit = async (value: any, form: any) => {
    setLoading(true);
    const res = await authenticate(value);
    if (res.data.status == "SUCCESS") {
      message.success(res.data.message);
      setUseInfo(JSON.stringify(res.data.data.user));
      setToken(res.data.data.token.accessToken);
      setLoading(false);
      router.push("/dashboard");
    }
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
