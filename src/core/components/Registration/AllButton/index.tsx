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
      <div className={Styles.divider}>or</div>
      <Button
        className={`${Styles.socialBtn} mt-4`}
        size="large"
        icon={<Google />}
      >
        <span className="ml-3"> Register with Google</span>
      </Button>
      <Button
        className={`${Styles.socialBtn} mt-4`}
        size="large"
        icon={<Facebook />}
      >
        <span className="ml-3"> Register with Facebook</span>
      </Button>

      {/* <div>
        <div className="mt-3">
          <Checkbox>
            Do you want to receive news about our project? Sign up to our
            NEWSLETTER.
          </Checkbox>
        </div>
      </div> */}

      <div className="mt-5 d-flex" style={{ fontSize: "15px" }}>
        <span>Already have an account? </span>
        <Link className="ml-2" href="/login">
          {" "}
          Login Now
        </Link>
      </div>
    </div>
  );
};
