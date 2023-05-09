import React from "react";
import Styles from "./HeroTab.module.scss";

export const HeroTab = () => {
  return (
    <div className={Styles.wrapper}>
      <h3>
        Welcome to <span className={Styles.funded}>Funded</span>Next
      </h3>

      <div className={Styles.allTab}>
        <div className={Styles.tab}>
          <h4>Active Account</h4>
        </div>
        <div className={Styles.tab}>
          <h4>Inactive Account</h4>
        </div>
        <div className={Styles.tab}>
          <h4>Breached Account</h4>
        </div>
      </div>
    </div>
  );
};
