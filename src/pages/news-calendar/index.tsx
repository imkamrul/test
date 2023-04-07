import {
  CalendarFilter,
  CalendarHero,
  CalendarTable,
  CurrencySection,
} from "@/core/components/NewsCalendar";
import React from "react";

const Newscalendar = () => {
  return (
    <>
      <CalendarHero />
      <CurrencySection />
      <CalendarFilter />
      <CalendarTable />
    </>
  );
};

export default Newscalendar;
