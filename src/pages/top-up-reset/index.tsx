import {
  TopUpCard,
  TopupResetHistoryTable,
} from "@/core/components/TopUpReset";
import CardIcon from "@/core/components/icons/Card.icon";

import { topUpReset } from "@/utils/pageData/topupReset/data";
// import { topUpReset } from "@/utils/topUpReset/data";
import { Col, Row } from "antd";

const TopUpReset = () => {
  const { topUp, reset } = topUpReset;

  return (
    <>
      <Row gutter={30}>
        <Col lg={12} className="mt-4">
          <TopUpCard contents={topUp} />
        </Col>
        <Col lg={12} className="mt-4">
          <TopUpCard contents={reset} />
        </Col>
      </Row>

      <Row>
        <Col lg={24} className="mt-5">
          <TopupResetHistoryTable />
        </Col>
      </Row>
    </>
  );
};

TopUpReset.layoutSettings = {
  pageHeader: {
    title: "Top-up & Reset ",
    icon: <CardIcon />,
  },
  contentWrapperStyle: {},
};

export default TopUpReset;
