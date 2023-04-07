import { REQUEST_TYPE } from "@/types/enums/topupReset";
import { Button } from "antd";
import Link from "next/link";
import CardHeader from "./CardHeader";
import Styles from "./TopUpCard.module.scss";

interface TopUpCardProps {
  contents: {
    title: string;
    title_icon: string;
    details: string;
    note: string;
    btn_text: string;
    requestType: REQUEST_TYPE;
  };
}

export const TopUpCard = (props: TopUpCardProps) => {
  const { title, title_icon, details, note, btn_text, requestType } =
    props.contents;
  return (
    <>
      <div className={Styles.cardWrapper}>
        <CardHeader icon={title_icon} title={title} />
        <div className={Styles.cardBody}>
          <p>
            {details}{" "}
            <Link href={"https://fundednext.com/faq"}> Click Here</Link>.
          </p>

          <div className={Styles.cardFooter}>
            <span className={Styles.note}>{note}</span>

            <Button type="primary" size="large">
              {btn_text}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
