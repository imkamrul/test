import React from "react";
import Style from "./UtilityHero.module.scss";
import UtilityHeroIcon from "../../icons/UtilityHeroIcon";

export const UtilityHero = () => {
  return (
    <div className={Style.wrapper}>
      <UtilityHeroIcon />
      <h3>Welcome to FundedNext Utilities</h3>
      <p>Now you can download tools, books and watch videos</p>
    </div>
  );
};
