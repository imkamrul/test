import React from "react";

import Style from "../TradingOverviewTable/TradingOverviewTable.module.scss";
import Clipboard from "../../icons/Clipboard";

export interface TradingDetails {
  average_loss: number;
  average_rrr: number;
  average_wing: number;
  balance: string;
  best_trade: number;
  equity: string;
  gross_loss: number;
  gross_profit: number;
  long_won: number;
  loss_rate: number;
  lots: number;
  profit_factor: number;
  profitability: string;
  short_won: number;
  trades: number;
  win_rate: number;
  worst_trade: number;
}
interface TradingDetailsProps {
  tradingDetails: TradingDetails;
}

export const TradingOverviewTable: React.FC<TradingDetailsProps> = ({
  tradingDetails,
}) => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.tableHeading}>
        <Clipboard />
        <h3>Trading Overview</h3>
      </div>

      <div className={Style.tableBody}>
        <div className={Style.tabBtn}>
          <div className={Style.btn}>
            <h3>Details Stats</h3>
          </div>
          <div className={Style.btn}>
            <h3>Analytics</h3>
          </div>
        </div>

        <div className={Style.table}>
          <div className={Style.tableCard}>
            <div className={Style.tableRow}>
              <h3>Equity</h3>
              <h3>${tradingDetails?.equity}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Balance</h3>
              <h3>${tradingDetails?.equity}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Profitability</h3>
              <h3>{tradingDetails?.profitability}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Avg.Winning Trade </h3>
              <h3>{tradingDetails?.average_wing}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Avg.Losing Trade</h3>
              <h3>{tradingDetails?.average_loss}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Trades</h3>
              <h3>{tradingDetails?.trades}</h3>
            </div>
          </div>
          <div className={Style.tableCard}>
            <div className={Style.tableRow}>
              <h3>Lots</h3>
              <h3>{tradingDetails?.lots}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Avg.RRR</h3>
              <h3>{tradingDetails?.average_rrr}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Win Rate</h3>
              <h3>{tradingDetails?.win_rate}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Loss Rate</h3>
              <h3>{tradingDetails?.loss_rate}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Profit Factor</h3>
              <h3>{tradingDetails?.profit_factor}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Best Trade</h3>
              <h3>{tradingDetails?.best_trade}</h3>
            </div>
          </div>
          <div className={Style.tableCard}>
            <div className={Style.tableRow}>
              <h3>Worst Trade</h3>
              <h3>{tradingDetails?.worst_trade}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Long Won</h3>
              <h3>{tradingDetails?.long_won}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Short Won</h3>
              <h3>{tradingDetails?.short_won}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Gross Profit</h3>
              <h3>{tradingDetails?.gross_profit}</h3>
            </div>
            <div className={Style.tableRow}>
              <h3>Gross Loss</h3>
              <h3>{tradingDetails?.gross_loss}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
