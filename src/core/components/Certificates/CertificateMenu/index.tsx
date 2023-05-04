import { Col } from "antd";
import { useState } from "react";
import Style from "./CertificateMenu.module.scss";
export const CertificateMenu = () => {
  const menuItems = ["All", "Challenges", "Payout"];
  type MenuOption = string;

  const [currentMenu, setCurrentMenu] = useState<MenuOption>("All");
  return (
    <Col span={24} className={Style?.container}>
      {menuItems.map((item, index) => {
        return (
          <p
            key={index}
            className={`${currentMenu === item && Style?.active_menu} `}
            onClick={() => setCurrentMenu(item)}
          >
            {item}
          </p>
        );
      })}
    </Col>
  );
};
