import { useRouter } from "next/router";

interface SubscribeProps {}

const Subscribe = (props: SubscribeProps) => {
  const router = useRouter();
  const { planId } = router.query;
  return <>Subscribe - {planId}</>;
};

Subscribe.layout = "PublicLayout";
export default Subscribe;
