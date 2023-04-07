import Styles from "./CardHeader.module.scss";
import { CardHeaderProps } from "./CardHeader.types";

const CardHeader = (props: CardHeaderProps) => {
  const { title, children, icon } = props;
  return (
    <div className={`ant-card-head ${Styles.antCardHeadCustom}`}>
      <div className={Styles.cardHeadWrapper}>
        <span>
          <img src={icon} alt="card-header-icon" />
        </span>
        <div className={Styles.cardHeadTitle}>{title}</div>
        <div className="ant-card-head-children">{children}</div>
      </div>
    </div>
  );
};

export default CardHeader;
