import { SingleUSPCard } from "./SingleUSPCard";
import { USPListStatic } from "./utils";

interface USPListProps {}

export const USPList = (props: USPListProps) => {
  const USPListView = USPListStatic.map((item) => {
    return <SingleUSPCard key={item.id} item_content={item} />;
  });
  return <>{USPListView}</>;
};
