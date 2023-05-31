import React from "react";
import Style from "./TradingHistoryTable.module.scss";
import Globe from "../../icons/Globe";
import Swap from "../../icons/Swap";
import Clipboard from "../../icons/Clipboard";

export const TradingHistoryTable: React.FC = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.heading}>
        <Globe />
        <h3>Trading History</h3>
        <Swap />
      </div>
      <div className={Style.table}>
        <div className={Style.row}>
          <div>
            <h3>SN</h3>
          </div>
          <div>
            <h3>Open Time</h3>
          </div>
          <div>
            <h3>Open Price</h3>
          </div>
          <div>
            <h3>Close Time</h3>
          </div>
          <div>
            <h3>Close Price</h3>
          </div>
          <div>
            <h3>Lots</h3>
          </div>
          <div>
            <h3>Commission</h3>
          </div>
          <div>
            <h3>Swap</h3>
          </div>
          <div>
            <h3>Symbol</h3>
          </div>
          <div>
            <h3>Type</h3>
          </div>
          <div>
            <h3>Details</h3>
          </div>
        </div>
        <div className={Style.body}>
          <div>
            <p>SN</p>
          </div>
          <div>
            <p>Open Time</p>
          </div>
          <div>
            <p>Open Price</p>
          </div>
          <div>
            <p>Close Time</p>
          </div>
          <div>
            <p>Close Price</p>
          </div>
          <div>
            <p>Lots</p>
          </div>
          <div>
            <p>Commission</p>
          </div>
          <div>
            <p>Swap</p>
          </div>
          <div>
            <p>Symbol</p>
          </div>
          <div>
            <p>Type</p>
          </div>
          <div>
            <p>Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};
