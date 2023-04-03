import { Checkbox, Col, Row } from "antd";
import React from "react";
import Styles from "./CalendarFilter.module.scss";

const CalendarFilter = () => {
  const days = [
    {
      name: "Sunday",
    },
    {
      name: "Monday",
    },
    {
      name: "Tuesday",
    },
    {
      name: "Wednesday",
    },
    {
      name: "Thursday",
    },
    {
      name: "Friday",
    },
  ];

  const impacts = [
    {
      name: "Low",
    },
    {
      name: "Medium",
    },
    {
      name: "High",
    },
    {
      name: "Holiday",
    },
  ];
  const restrictions = [
    {
      name: "Restrictions",
    },
    {
      name: "No Restrictions",
    },
  ];

  return (
    <div className={Styles.wrapper}>
      <Row gutter={30}>
        <Col lg={12}>
          <h3>Days</h3>
          <div className={Styles.days}>
            {days.map((day) => (
              <div className={Styles.dayBtn}>{day.name}</div>
            ))}
          </div>
        </Col>
        <Col lg={6}>
          <h3>Impact</h3>
          <div className={Styles.impact}>
            {impacts.map((impact) => (
              <div className={Styles.impactBtn}>
                <Checkbox>{impact.name}</Checkbox>
              </div>
            ))}
          </div>
        </Col>
        <Col lg={6}>
          <h3>Restrictions</h3>
          <div className={Styles.restriction}>
            {restrictions.map((restriction) => (
              <div className={Styles.restrictionBtn}>
                <Checkbox>{restriction.name}</Checkbox>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CalendarFilter;
