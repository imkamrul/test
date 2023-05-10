import React from "react";
import { Typography } from "antd";
import styles from "./HeroTab.module.scss";

const { Title } = Typography;

export const HeroTab: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Title level={3}>
        Welcome to <span className={styles.funded}>Funded</span>Next
      </Title>

      <div className={styles.allTab}>
        <div className={styles.tab}>
          <Title level={3}>Active Account</Title>
        </div>
        <div className={styles.tab}>
          <Title level={3}>Inactive Account</Title>
        </div>
        <div className={styles.tab}>
          <Title level={3}>Breached Account</Title>
        </div>
      </div>
    </div>
  );
};
