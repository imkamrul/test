import React from "react";
import CalendarFilter from "../CalendarFilter";
import CalendarHero from "../CalendarHero";
import CurrencySection from "../CurrencySection";
import CalendarTable from "../CalendarTable";

const NewCalendar = () => {
  return (
    <>
      <CalendarHero />
      <CurrencySection />
      <CalendarFilter />
      <CalendarTable />
    </>
  );
};

export default NewCalendar;
