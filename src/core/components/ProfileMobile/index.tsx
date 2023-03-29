import { siteTheme } from "@/utils/siteTheme";
import { Avatar } from "antd";
import Styles from "./ProfileMobile.module.scss";

interface ProfileMobileProps {}

const ProfileMobile = (props: ProfileMobileProps) => {
  return (
    <>
      <div className={Styles.profileWrapper}>
        <Avatar
          style={{
            backgroundColor: siteTheme.colorPrimary,
            verticalAlign: "middle",
          }}
          size="large"
          gap={1}
        >
          {"U"}
        </Avatar>

        <h3>Sajjad Hossain Ripon</h3>
        <span className={Styles.userEmail}>mhsajjadhossain@wearenext.com</span>
      </div>
    </>
  );
};

export default ProfileMobile;
