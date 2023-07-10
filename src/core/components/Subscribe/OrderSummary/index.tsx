import CardHeader from "@/core/Molicules/CardHeader";
import { useState } from "react";
import Styles from "./OrderSummary.module.scss";
import { summaryType } from "./OrderSummary.types";

interface OrderSummaryProps {}

export const OrderSummary = (props: OrderSummaryProps) => {
  const [summary, setSummary] = useState<summaryType>({
    plan: "Evaluation-15000 USD",
    price: 99,
    discount: 0,
    total_amount: 99,
  });

  return (
    <>
      <div className={Styles.cardWrapper}>
        <CardHeader
          title="Order Summary"
          icon="https://res.cloudinary.com/dvzadhnmh/image/upload/v1681195096/fundednext-dashboard-v2/order-summary-icon.svg"
        />
        <div className={Styles.cardBody}>
          {/* plan name */}
          <div
            className={`${Styles.summaryItems} d-flex align-items-center justify-content-between`}
          >
            <div className={Styles.propertyName}>Plan</div>
            <div className={Styles.propertyValue}>{summary.plan}</div>
          </div>
          {/* plan name */}
          {/* plan price */}
          <div
            className={`${Styles.summaryItems} d-flex align-items-center justify-content-between`}
          >
            <div className={Styles.propertyName}>Price</div>
            <div className={Styles.propertyValue}>${summary.price}</div>
          </div>
          {/* plan price */}
          {/* plan discount */}
          <div
            className={`${Styles.summaryItems} d-flex align-items-center justify-content-between`}
          >
            <div className={Styles.propertyName}>Discount</div>
            <div className={Styles.propertyValue}>-${summary.discount}</div>
          </div>
          {/* plan discount */}
          {/* plan total */}
          <div
            className={`${Styles.summaryItems} d-flex align-items-center justify-content-between`}
          >
            <div className={Styles.propertyName}>Total</div>
            <div className={Styles.propertyValue}>{summary.total_amount}</div>
          </div>
          {/* plan total */}
        </div>
      </div>
    </>
  );
};
