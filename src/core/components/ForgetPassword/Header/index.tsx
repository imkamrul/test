import React from "react";
import Style from "../Header/Header.module.scss";
import { Button } from "antd";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <div className={Style.wrapper}>
      <img src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1680061656/logo-login.svg" />
      <div>
        <Button
          type="primary"
          size="middle"
          style={{ width: "160px", height: "40px" }}
          className=""
        >
          <Link href="/register">Register</Link>
        </Button>
        <Button style={{ width: "160px", height: "40px" }} className="ml-4">
          <Link href="/login"> Log In</Link>
        </Button>
      </div>
    </div>
  );
};
