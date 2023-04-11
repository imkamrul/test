import Styles from "./USPList.module.scss";
import { singleUSPPropType } from "./USPList.types";

interface SingleUSPCardProps {
  item_content: singleUSPPropType;
}

export const SingleUSPCard = (props: SingleUSPCardProps) => {
  const { icon, title, body } = props.item_content;
  return (
    <>
      <div className={Styles.singleUSPCard}>
        <div className={Styles.icon}>{icon}</div>
        <div className={Styles.contents}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
};
