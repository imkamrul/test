import { TradingHistoryTable } from "@/core/components/TradingOverview";
import {
  TradingDetails,
  TradingOverviewTable,
} from "@/core/components/TradingOverview/TradingOverviewTable";
import { getToken } from "@/services/auth.service";
import React, { useEffect, useState } from "react";

const TradingOverview = () => {
  const [tradingDetails, setTradingDetails] = useState<TradingDetails | null>(
    null
  );

  const fetchTradingOveriviewData = async (token: string) => {
    let id = 5731;
    try {
      const response = await fetch(
        `https://evaluation.fundednext.com/api/trading-overview?account_id=${id}&type=stats`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const result = await response.json();
      setTradingDetails(result?.data?.stats);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchTradingHistoryData = async (token: string) => {
    let id = 5731;
    try {
      const response = await fetch(
        `https://evaluation.fundednext.com/api/trading-history?account_id=${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const result = await response.json();
      console.log("distory", result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    let retrievedToken = getToken();
    if (retrievedToken) {
      fetchTradingOveriviewData(retrievedToken);
      fetchTradingHistoryData(retrievedToken);
    }
  }, []);
  return (
    <div style={{ padding: "30px" }}>
      <TradingOverviewTable tradingDetails={tradingDetails} />
      <TradingHistoryTable />
    </div>
  );
};

export default TradingOverview;
