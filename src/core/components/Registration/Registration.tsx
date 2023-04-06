import { Button, Checkbox } from "antd";
import Link from "next/link";
import React from "react";
import AuthHero from "../AuthHero";
import Form from "../Form";
import { IFormBuilder } from "../Form/Form.types";
import Facebook from "../icons/Facebook";
import Google from "../icons/Google";
import Styles from "./Registration.module.scss";

const Registration = () => {
  const registrationForm: IFormBuilder = {
    title: "",
    layout: "vertical",
    hideFormButtons: true,
    size: "large",
    controls: [
      {
        label: "First Name",
        type: "text",
        name: "fName",
        placeHolder: "Sara |",
        colSpan: 12,
        active: true,
        validation: [
          {
            required: true,
            message: "Please enter a email",
          },
        ],
      },
      {
        label: "Last Name",
        type: "text",
        name: "lName",
        placeHolder: "Put your last name",
        colSpan: 12,
        active: true,
        validation: [
          {
            required: true,
            message: "Please enter a email",
          },
        ],
      },
      {
        label: "Password",
        type: "password",
        name: "password",
        placeHolder: "Put your password",
        colSpan: 12,
        active: true,
        validation: [
          {
            required: true,
            message: "Please enter a password",
          },
        ],
      },
      {
        label: "Confirm Password",
        type: "password",
        name: "cmPassowrd",
        placeHolder: "Put your password",
        colSpan: 12,
        active: true,
        validation: [
          {
            required: true,
            message: "Password did not match",
          },
        ],
      },
      {
        label: "E-Mail",
        type: "text",
        name: "email",
        placeHolder: "Put your email",
        colSpan: 12,
        active: true,
        validation: [
          {
            required: true,
            message: "Put your email",
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
          <Form
            loading={false}
            formBuilder={registrationForm}
            onSubmit={onSubmit}
          />
          <div className={Styles.allBtn}>
            <Button type="primary" className="mt-4" block size="large">
              Register
            </Button>

            <p className={Styles.divider}>or</p>

            <Button
              type="primary"
              className={`${Styles.socialBtn} mt-4`}
              size="large"
              icon={<Google />}
            >
              <span className="ml-3"> Register with Google</span>
            </Button>
            <Button
              type="primary"
              className={`${Styles.socialBtn} mt-4`}
              size="large"
              icon={<Facebook />}
            >
              <span className="ml-3"> Register with Facebook</span>
            </Button>

            <div>
              <div className="mt-3">
                <Checkbox>
                  Do you want to receive news about our project? Sign up to our
                  NEWSLETTER.
                </Checkbox>
              </div>
            </div>

            <p className="mt-5">
              Already have an account?
              <Link href="#" className="ml-2">
                Login Now
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

export default Registration;
