import Styles from "./TopUpCard.module.scss";

interface CardHeaderProps {
  icon: string;
  title: string;
}

const CardHeader = (props: CardHeaderProps) => {
  const { icon, title } = props;
  return (
    <>
      <div className={Styles.cardHeader}>
        <span>
          <img src={icon} alt="card-header-icon" />
        </span>
        <h3>{title}</h3>
      </div>
    </>
  );
};

export default CardHeader;
