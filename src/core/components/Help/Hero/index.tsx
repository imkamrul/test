import React from "react";
import Style from "./Hero.module.scss";
import QuestionMark from "../../icons/QuestionMark";

export const Hero = () => {
  return (
    <div className={Style.wrapper}>
      <QuestionMark />
      <h3>Frequently asked questions based on your current plan</h3>
    </div>
  );
};
