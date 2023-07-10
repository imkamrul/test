import React, { useState } from "react";
import Styles from "../Card/Card.module.scss";
import { Typography, Button, message } from "antd";
import { IFormBuilder } from "../../Form/Form.types";
import Form from "../../Form";
import { SubmitButton } from "../SubmitButton";

export const Card = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const forgetForm: IFormBuilder = {
    title: "",
    layout: "vertical",
    buttonComponent: <SubmitButton btnLoading={loading} />,
    hideFormButtons: true,
    size: "large",
    controls: [
      {
        label: "Password",
        type: "password",
        name: "password",
        placeHolder: "2n27232!*04 |",
        colSpan: 24,
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
        colSpan: 24,
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
    ],
  };

  const onSubmit = async (value: any, form: any) => {
    setLoading(true);
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.card}>
        <div>
          <img src="https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1683784481/fundednext-dashboard-v2/lock" />
        </div>
        <Typography.Title level={5} className="mt-3 mb-2 text-center">
          Reset Password
        </Typography.Title>

        <div className={Styles.formWrpper}>
          <Form loading={false} formBuilder={forgetForm} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};
