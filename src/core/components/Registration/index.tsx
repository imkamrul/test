import { Button, Checkbox, Typography, Col, Row, message } from "antd";
import React, { useState } from "react";
import AuthHero from "../AuthHero";
import Form from "../Form";
import { IFormBuilder } from "../Form/Form.types";
import Styles from "./Registration.module.scss";
import { AllButton } from "./AllButton";
import { registration, setToken, setUseInfo } from "@/services/auth.service";
import { useMediaQuery } from "@/hooks/responsive.hooks";
const { Title, Paragraph } = Typography;

const Registration: React.FC = () => {
  let isTab = useMediaQuery("(max-width: 1080px)");
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
        colSpan: isTab ? 24 : 12,
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
        colSpan: isTab ? 24 : 12,
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
        colSpan: isTab ? 24 : 12,
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
        colSpan: isTab ? 24 : 12,
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
        colSpan: isTab ? 24 : 12,
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
        colSpan: isTab ? 24 : 12,
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

  console.log(isTab);

  return (
    <>
      <AuthHero />
      <Row>
        <Col lg={10} offset={2} className={Styles.registrationForm}>
          <div className={Styles.registrationHeader}>
            <img src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1680061656/logo-login.svg" />
          </div>
          <div className={Styles.registrationBody}>
            <Form
              loading={false}
              formBuilder={registrationForm}
              onSubmit={onSubmit}
            />
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

export default Registration;
