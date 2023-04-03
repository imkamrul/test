import React from "react";
import Styles from "./CalendarTable.module.scss";
import Table from "../Table";

const CalendarTable = () => {
  const settings = {
    title: "",
    columns: [
      {
        title: "IMPACT",
        key: "IMPACT",
      },
      {
        title: "EVENT",
        key: "EVENT",
      },
      {
        title: "CURRENCY",
        key: "CURRENCY",
      },
      {
        title: "DATE",
        key: "DATE",
      },
      {
        title: "FORECAST",
        key: "FORECAST",
      },
      {
        title: "PREVIOUS",
        key: "PREVIOUS",
      },
    ],
    isServersidePagination: true,
    hasBulkOperation: false,
  };

  const data = [
    {
      key: "1",
      IMPACT: "test",
      EVENT: "test",
      CURRENCY: "test",
      DATE: "test",
      FORECAST: "test",
      PREVIOUS: "test",
    },
  ];
  return (
    <div className={Styles.wrapper}>
      <Table loading={false} settings={settings} data={data} />
    </div>
  );
};

export default CalendarTable;
