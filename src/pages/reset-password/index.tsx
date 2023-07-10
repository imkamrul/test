import { Header } from "@/core/components/ForgetPassword";
import { Card } from "@/core/components/ResetPassowrd";
import React from "react";

const ResetPassword = () => {
  return (
    <>
      <Header />
      <Card />
    </>
  );
};

ResetPassword.layout = "PublicLayout";

export default ResetPassword;
