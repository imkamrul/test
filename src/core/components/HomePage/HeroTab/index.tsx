import React from "react";
import { Typography } from "antd";
import styles from "./HeroTab.module.scss";

const { Title } = Typography;

export interface HeroTabProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const HeroTab: React.FC<HeroTabProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.wrapper}>
      <Title level={3}>
        Welcome to <span className={styles.funded}>Funded</span>Next
      </Title>

      <div className={styles.allTab}>
        <div
          className={`${styles.tab} ${
            activeTab === "active" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("active")}
        >
          <h3>Active Account</h3>
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "inactive" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("inactive")}
        >
          <h3>Inactive Account</h3>
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "breached" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("breached")}
        >
          <h3>Breached Account</h3>
        </div>
      </div>
    </div>
  );
};
