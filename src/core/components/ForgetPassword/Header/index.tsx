import React from "react";
import Style from "../Header/Header.module.scss";
import { Button } from "antd";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/responsive.hooks";

export const Header: React.FC = () => {
  let isTab = useMediaQuery("(max-width: 1080px)");
  return (
    <div className={Style.wrapper}>
      {isTab ? (
        <img src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1683788663/fundednext-dashboard-v2/logo-icon-black.svg" />
      ) : (
        <img src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1680061656/logo-login.svg" />
      )}
      <div className={Style.btnWrapper}>
        <Button type="primary" size="middle" className={Style.btn}>
          <Link href="/register">Register</Link>
        </Button>
        <Button className={`ml-2 ${Style.btn}`}>
          <Link href="/login"> Log In</Link>
        </Button>
      </div>
    </div>
  );
};
