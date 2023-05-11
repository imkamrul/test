import React, { useState } from "react";
import Styles from "../Card/Card.module.scss";
import { Typography, Button, message } from "antd";
import { IFormBuilder } from "../../Form/Form.types";
import Form from "../../Form";
import { ResetButton } from "../ResetButton";
import { reset } from "@/services/auth.service";

export const Card = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const forgetForm: IFormBuilder = {
    title: "",
    layout: "vertical",
    buttonComponent: <ResetButton btnLoading={loading} />,
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
    ],
  };

  const onSubmit = async (value: any, form: any) => {
    setLoading(true);
    const res = await reset(value);
    if (res.data.status == "SUCCESS") {
      message.info(res.data.status);
    } else {
      message.error(res.data.status);
    }
    setLoading(false);
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.card}>
        <div>
          <img src="https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1683781568/fundednext-dashboard-v2/computer-man" />
        </div>
        <Typography.Title level={5} className="mt-3 mb-2 text-center">
          Forget Password?
        </Typography.Title>
        <Typography.Paragraph className="mb-3 text-center">
          Enter your email address and submit the form to send a reset password
          link to your email address.
        </Typography.Paragraph>

        <div className={Styles.formWrpper}>
          <Form loading={false} formBuilder={forgetForm} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};
