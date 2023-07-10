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
      <Link href="#" className="mt-3 mb-3">
        Forget Password?
      </Link>
      <div className={Styles.divider}>or</div>
      <Button className={Styles.socialBtn} size="large" icon={<Google />}>
        <span className="ml-3"> Log In with Google</span>
      </Button>
      <Button
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
