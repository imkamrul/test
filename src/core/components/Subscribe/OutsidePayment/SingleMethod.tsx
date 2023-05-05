import Link from "next/link";
import { useRouter } from "next/router";
import Styles from "./OutsidePayment.module.scss";
interface SingleMethodProps {
  contents: {
    icon: string;
    name: string;
    method: string;
  };
}

const SingleMethod = (props: SingleMethodProps) => {
  const { icon, name, method } = props.contents;
  const router = useRouter();
  const { planId } = router.query;

  const pathName = true ? `/subscribe/outside/${planId}?method=${method}` : ``;

  return (
    <>
      <Link href={pathName} className={Styles.singleMethod}>
        <span className={Styles.methodImage}>
          <img src={icon} alt={name} />
        </span>
        <span className={Styles.methodName}>BTC</span>
      </Link>
    </>
  );
};

export default SingleMethod;
