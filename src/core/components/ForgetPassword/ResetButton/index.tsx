import { Button, Checkbox } from "antd";
import React from "react";
import Link from "next/link";

interface MyButtonProps {
  btnLoading: boolean;
}

export const ResetButton = ({ btnLoading }: MyButtonProps) => {
  return (
    <div>
      <Button
        type="primary"
        block
        size="large"
        htmlType="submit"
        loading={btnLoading}
      >
        Send Reset Email
      </Button>
    </div>
  );
};
