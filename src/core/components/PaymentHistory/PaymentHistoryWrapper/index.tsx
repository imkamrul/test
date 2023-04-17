import ApprovedHistoryTable from "../ApprovedHistoryTable";
import HistoryType from "../HistoryType";
import PendingPaymentHistory from "../PendingPaymentHistory";
import SectionTitle from "../SectionTitle";

const PaymentHistoryWrapper = () => {
  return (
    <>
      <SectionTitle />
      <HistoryType />
      <ApprovedHistoryTable />
      <PendingPaymentHistory />
    </>
  );
};

export default PaymentHistoryWrapper;
