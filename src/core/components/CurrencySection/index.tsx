import { Button } from "antd";
import React from "react";
import Styles from "./CurrencySection.module.scss";

const currency = [
  {
    name: "ALL",
    flag: "https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1680243211/fundednext-dashboard-v2/ALL",
  },
  {
    name: "NZD",
    flag: "https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1680244643/fundednext-dashboard-v2/NZD",
  },
  {
    name: "AUD",
    flag: "https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1680244644/fundednext-dashboard-v2/AUD",
  },
  {
    name: "CAD",
    flag: "https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1680244645/fundednext-dashboard-v2/CAD",
  },
  {
    name: "EUR",
    flag: "https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1680244644/fundednext-dashboard-v2/EUR",
  },
  {
    name: "GBP",
    flag: "https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1680244643/fundednext-dashboard-v2/GBP",
  },
  {
    name: "USD",
    flag: "https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1680244644/fundednext-dashboard-v2/USD",
  },
  {
    name: "CHF",
    flag: "https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1680244645/fundednext-dashboard-v2/CHF",
  },
  {
    name: "JPY",
    flag: "https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1680244643/fundednext-dashboard-v2/JPY",
  },
  {
    name: "CNY",
    flag: "https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1680244645/fundednext-dashboard-v2/CNY",
  },
];

const CurrencySection = () => {
  return (
    <div className={Styles.wrapper}>
      {currency.map((item) => (
        <div className={Styles.currencyBtn}>
          <img src={item.flag} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CurrencySection;
