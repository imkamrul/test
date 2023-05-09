import React from "react";
import Styles from "./NoAccount.module.scss";

export const NoAccount = () => {
  return (
    <div className={Styles.wrapper}>
      <img src="https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/q_auto/f_auto/v1683616297/fundednext-dashboard-v2/no-account.svg" />
      <h3>You have no inactive account</h3>
    </div>
  );
};
