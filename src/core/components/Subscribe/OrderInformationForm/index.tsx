import CardHeader from "@/core/Molicules/CardHeader";
import Styles from "./OrderInformationForm.module.scss";
interface OrderInformationFormProps {}

export const OrderInformationForm = (props: OrderInformationFormProps) => {
  return (
    <>
      <div className={Styles.cardWrapper}>
        <CardHeader
          title="Order Information"
          icon="https://res.cloudinary.com/dvzadhnmh/image/upload/v1681195096/fundednext-dashboard-v2/order-summary-icon.svg"
        />

        <h2>test content</h2>
      </div>
    </>
  );
};
