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
  const [tradingHistory, setTradingHistory] = useState<null>(null);

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
      setTradingHistory(result);
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
      {tradingDetails ? (
        <TradingOverviewTable tradingDetails={tradingDetails} />
      ) : (
        <p>Loading...</p>
      )}
      {tradingHistory ? (
        <TradingHistoryTable tradingHistory={tradingHistory} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TradingOverview;
