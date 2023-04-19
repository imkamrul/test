import { Button, Checkbox } from "antd";
import React from "react";
import Styles from "../Login.module.scss";
import Link from "next/link";
import Google from "../../icons/Google";
import Facebook from "../../icons/Facebook";

interface MyButtonProps {
  btnLoading: boolean;
}

export const AllButton = ({ btnLoading }: MyButtonProps) => {
  return (
    <div className={Styles.allBtn}>
      <Button
        type="primary"
        block
        size="large"
        htmlType="submit"
        loading={btnLoading}
      >
        Log In
      </Button>
      <Link href="#">Forget Password?</Link>
      <Button
        type="primary"
        className={Styles.socialBtn}
        size="large"
        icon={<Google />}
      >
        <span className="ml-3"> Log In with Google</span>
      </Button>
      <Button
        type="primary"
        className={`${Styles.socialBtn} mt-4`}
        size="large"
        icon={<Facebook />}
      >
        <span className="ml-3"> Log In with Google</span>
      </Button>
      <p className="mt-5">
        Dont have an account?{" "}
        <Link href="#" className="ml-2">
          Register
        </Link>
      </p>
    </div>
  );
};
