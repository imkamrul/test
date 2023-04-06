import CardIcon from "@/core/components/icons/Card.icon";
import TopUpCard from "@/core/components/TopUpCard";
import PageHeader from "@/core/Molicules/PageHeader";
import { topUpReset } from "@/data/topupReset";
import { Col, Row } from "antd";

const TopUpReset = () => {
  const { topUp, reset } = topUpReset;
  return (
    <>
      <PageHeader
        options={{
          title: "Top-up & Reset",
          icon: <CardIcon />,
        }}
      />

      <Row gutter={30}>
        <Col lg={12}>
          <TopUpCard contents={topUp} />
        </Col>
        <Col lg={12}>
          <TopUpCard contents={reset} />
        </Col>
      </Row>

      <Row>
        <Col lg={24}>
          {/* <Table
        loading={false}
        settings={settings}
        data={cmsUsers}
        pagination={pagination}
        scrollX={1000}
      /> */}
        </Col>
      </Row>
    </>
  );
};

export default TopUpReset;
