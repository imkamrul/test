import { Button, Checkbox } from "antd";
import React from "react";
import Styles from "../Registration.module.scss";
import Facebook from "../../icons/Facebook";
import Google from "../../icons/Google";
import Link from "next/link";
import { PoweroffOutlined } from "@ant-design/icons";

interface MyButtonProps {
  btnLoading: boolean;
}

export const AllButton = ({ btnLoading }: MyButtonProps) => {
  return (
    <div className={Styles.allBtn}>
      <Button
        type="primary"
        className="mt-4"
        block
        size="large"
        htmlType="submit"
        loading={btnLoading}
      >
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
  );
};
