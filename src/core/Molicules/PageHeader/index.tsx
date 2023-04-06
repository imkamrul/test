import Styles from "./PageHeader.module.scss";

interface PageHeaderProps {
  options: {
    title: string;
    icon: JSX.Element;
  };
}

const PageHeader = (props: PageHeaderProps) => {
  const { title, icon } = props.options;
  return (
    <>
      <div className={`d-flex align-items-center ${Styles.pageHeaderWrapper}`}>
        <span>{icon}</span>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default PageHeader;
