import React from "react";
import Style from "./TradingHistoryTable.module.scss";
import Globe from "../../icons/Globe";
import Swap from "../../icons/Swap";
import Clipboard from "../../icons/Clipboard";
import { Button, Select } from "antd";

export interface TradingHistory {
  current_page: number;
  data: any[]; // Specify the type of the 'data' property as needed
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: any[]; // Specify the type of the 'links' property as needed
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
interface TradingDetailsProps {
  tradingHistory: TradingHistory;
}

export const TradingHistoryTable: React.FC<TradingDetailsProps> = ({
  tradingHistory,
}) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className={Style.wrapper}>
      <div className={Style.heading}>
        <div className={Style.headingLeft}>
          <Globe />
          <h3>Trading History</h3>
          <Swap />
        </div>
        <div className={Style.headingRight}>
          <h4>Sort By:</h4>
          <Select
            defaultValue="Select Type"
            style={{ width: "200px", margin: "0px 20px" }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
          <Button type="primary">Download</Button>
        </div>
      </div>

      <div className={Style.table}>
        <div className={Style.tableHeade}>
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
        {tradingHistory?.data?.map((trade, idx) => (
          <div className={Style.row}>
            <div>
              <p>{idx}</p>
            </div>
            <div>
              <p>{trade?.open_time_str}</p>
            </div>
            <div>
              <p>{trade?.open_price}</p>
            </div>
            <div>
              <p>{trade?.close_time_str}</p>
            </div>
            <div>
              <p>{trade?.close_price}</p>
            </div>
            <div>
              <p>{trade?.lots}</p>
            </div>
            <div>
              <p>{trade?.commission}</p>
            </div>
            <div>
              <p>{trade?.swap}</p>
            </div>
            <div>
              <p>{trade?.symbol}</p>
            </div>
            <div>
              <p>{trade?.type_str}</p>
            </div>
            <div>
              <button className={Style.btnView}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
