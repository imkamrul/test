import { Button, Checkbox, message } from "antd";
import React, { useState } from "react";
import AuthHero from "../AuthHero";
import Form from "../Form";
import { IFormBuilder } from "../Form/Form.types";
import Styles from "./Registration.module.scss";
import { AllButton } from "./AllButton";
import { registration, setToken, setUseInfo } from "@/services/auth.service";

const Registration: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const registrationForm: IFormBuilder = {
    title: "",
    buttonComponent: <AllButton btnLoading={loading} />,
    layout: "vertical",
    hideFormButtons: true,
    size: "large",
    controls: [
      {
        label: "First Name",
        type: "text",
        name: "first_name",
        placeHolder: "Sara |",
        colSpan: 12,
        active: true,
        validation: [
          {
            required: true,
            message: "Please enter a first name",
          },
        ],
      },
      {
        label: "Last Name",
        type: "text",
        name: "last_name",
        placeHolder: "Nicole |",
        colSpan: 12,
        active: true,
        validation: [
          {
            required: true,
            message: "Please last name",
          },
        ],
      },
      {
        label: "Password",
        type: "password",
        name: "password",
        placeHolder: "2n27232!*04 |",
        colSpan: 12,
        active: true,
        validation: [
          {
            required: true,
            message: "Please enter password",
          },
          {
            min: 6,
            message: "Please enter password",
          },
        ],
      },
      {
        label: "Confirm Password",
        type: "password",
        name: "password_confirmation",
        placeHolder: "*************",
        colSpan: 12,
        active: true,
        validation: [
          {
            required: true,
            message: "Please confirm your password",
          },
          {
            min: 6,
            message: "Password did not match",
          },
        ],
      },
      {
        label: "E-Mail",
        type: "text",
        name: "email",
        placeHolder: "Nicole@gmail.com",
        colSpan: 12,
        active: true,
        validation: [
          {
            type: "email",
            message: "Please enter a valid email",
          },
          {
            required: true,
            message: "Please enter email",
          },
        ],
      },
      {
        label: "Gender",
        type: "select",
        name: "gender",
        placeHolder: "Select Gender",
        colSpan: 12,
        active: true,
        options: [
          {
            value: "0",
            label: "Male",
          },
          {
            value: "1",
            label: "Female",
          },
        ],
        validation: [
          {
            required: true,
            message: "Select Gender",
          },
        ],
      },
    ],
  };

  const onSubmit = async (value: any, form: any) => {
    setLoading(true);
    const res = await registration(value);
    if (res.data.status == "SUCCESS") {
      message.success(res.data.message);
      setUseInfo(JSON.stringify(res.data.data.user));
      setToken(res.data.data.token.accessToken);
      setLoading(false);
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
          <Form
            loading={false}
            formBuilder={registrationForm}
            onSubmit={onSubmit}
          />
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

export default Registration;
