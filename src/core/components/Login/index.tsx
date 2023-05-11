import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  Checkbox,
  Typography,
  Col,
  Row,
  message,
  Modal,
  Space,
} from "antd";
import { IFormBuilder } from "../Form/Form.types";
import Form from "../Form";
import AuthHero from "../AuthHero";
import Styles from "./Login.module.scss";
import { AllButton } from "./AllButton";
import { authenticate, setToken, setUseInfo } from "@/services/auth.service";
import { useRouter } from "next/router";
const { Title, Paragraph } = Typography;

const Login: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);

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
    setModalOpen(true);

    const res = await authenticate(value);
    if (res.data.status == "SUCCESS") {
      message.success(res.data.message);
      setUseInfo(JSON.stringify(res.data.data.user));
      setToken(res.data.data.token.accessToken);
      setLoading(false);
      setModalOpen(false);
      router.push("/home");
    } else {
      message.error("can't login");
    }
  };

  return (
    <>
      <AuthHero />
      <Row>
        <Col lg={10} offset={2} className={Styles.loginForm}>
          <div className={Styles.loginHeader}>
            <img src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1680061656/logo-login.svg" />
          </div>
          <div className={Styles.loginBody}>
            <Form loading={false} formBuilder={loginForm} onSubmit={onSubmit} />
          </div>
        </Col>
        <Col lg={10} offset={2} className={Styles.dashboardTour}>
          <Title level={3}>Wellcome to Exclusive Dashboard Tour</Title>
          <Title level={5}>
            Get access to exclusive tour of our platform within 10 seconds,{" "}
            <br /> by simply submitting the following information.
          </Title>
          <img src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1680066478/demo-dashboard.png" />
        </Col>
      </Row>
    </>
  );
};

export default Login;
