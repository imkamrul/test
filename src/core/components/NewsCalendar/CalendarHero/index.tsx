import React from "react";
import Styles from "./CalendarHero.module.scss";

export const CalendarHero = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <h3>Economic Calendar</h3>
        <p>
          View our interactive economic calendar for important events and
          releases
        </p>
      </div>
    </div>
  );
};
