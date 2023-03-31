import React from "react";
import CalendarFilter from "../CalendarFilter";
import CalendarHero from "../CalendarHero";
import CurrencySection from "../CurrencySection";
import Table from "../Table";

const NewCalendar = () => {
  const settings = {
    title: "",
    columns: [
      {
        title: "IMPACT",
        key: "impact",
      },
      {
        title: "EVENT",
        key: "title",
      },
      {
        title: "CURRENCY",
        key: "country",
      },
      {
        title: "DATE",
        key: "date",
      },
      {
        title: "FORECAST",
        key: "forecast",
      },
      {
        title: "PREVIOUS",
        key: "previous",
      },
    ],
    isServersidePagination: true,
    hasBulkOperation: false,
  };

  const data = [
    {
      IMPACT: "fdfd",
      EVENT: "dfdfd",
      CURRENCY: "fdf",
      DATE: "fdfd",
      FORECAST: "fdfd",
      PREVIOUS: "fdfd",
    },
  ];

  return (
    <>
      <CalendarHero />
      <CurrencySection />
      {/* <CalendarFilter /> */}
      <Table loading={false} settings={settings} data={data} />
    </>
  );
};

export default NewCalendar;
