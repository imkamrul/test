import { Avatar } from "antd";

const ProfileDropdown = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <Avatar
          style={{ backgroundColor: "#070337", verticalAlign: "middle" }}
          size="large"
          gap={1}
        >
          {"U"}
        </Avatar>
        Hello world
      </div>
    </>
  );
};

export default ProfileDropdown;
