import { useState } from "react";
import ApprovedHistoryTable from "../ApprovedHistoryTable";
import HistoryType from "../HistoryType";
import PendingPaymentHistory from "../PendingPaymentHistory";
import SectionTitle from "../SectionTitle";

const PaymentHistoryWrapper = () => {
  const [currentStep, setCurrentStep] = useState<string>("approved");
  return (
    <>
      <SectionTitle />
      <HistoryType currentStep={currentStep} setCurrentStep={setCurrentStep} />
      {currentStep === "approved" ? (
        <ApprovedHistoryTable />
      ) : (
        <PendingPaymentHistory />
      )}
    </>
  );
};

export default PaymentHistoryWrapper;
