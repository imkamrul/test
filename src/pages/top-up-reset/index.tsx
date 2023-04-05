import CardIcon from "@/core/components/icons/Card.icon";
import Table from "@/core/components/Table";
import { TablePropTypes } from "@/core/components/Table/Table.types";
import TopUpCard from "@/core/components/TopUpCard";
import PageHeader from "@/core/Molicules/PageHeader";
import { dateFormate } from "@/helpers/utils";
import { topUpReset } from "@/utils/pageData/topupReset/data";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
// import { topUpReset } from "@/utils/topUpReset/data";
import { Col, Row, Tag } from "antd";
import { useState } from "react";

const TopUpReset = () => {
  const settings: TablePropTypes = {
    title: "Top-Up & Reset History",
    headerWidget: <>ddd</>,
    columns: [
      {
        title: "Requested at",
        key: "created_at",
        isVisible: true,
        type: "component",
        width: "15%",
        align: "center",
        generate: (date: string) => {
          const formattedDate = dateFormate(date);
          return <>{formattedDate}</>;
        },
      },
      {
        title: "Request Type",
        key: "request_type",
        isVisible: true,
        width: "15%",
        align: "center",
        type: "component",
        generate: (reqType: number) => {
          return <>{reqType === 1 ? "Top Up" : "Reset"}</>;
        },
      },
      {
        title: "Request Charge",
        key: "amount",
        isVisible: true,
        type: "currency",
        width: "15%",
        align: "center",
      },
      {
        title: "Status",
        key: "status",
        isVisible: true,
        type: "component",
        width: "15%",
        align: "center",
        generate: (value: number) => {
          const iconPreset =
            value === 1 ? (
              <CheckCircleOutlined />
            ) : value === 2 ? (
              <CloseCircleOutlined />
            ) : (
              <SyncOutlined spin />
            );

          const colorPreset =
            value === 1 ? "success" : value === 2 ? "error" : "warning";
          return (
            <Tag color={colorPreset} icon={iconPreset}>
              {value === 1 ? "Success" : value === 2 ? "Rejected" : "Pending"}
            </Tag>
          );
        },
      },
      {
        title: "Action Date",
        key: "approved_at",
        type: "component",
        isVisible: true,
        width: "20%",
        align: "center",
        generate: (approvedAt: string) => {
          return approvedAt ? (
            <>
              Approve at <br /> {dateFormate(approvedAt)}
            </>
          ) : (
            "Request is pending"
          );
        },
      },
      {
        title: "Notes",
        key: "admin_note",
        isVisible: true,
        type: "component",
        width: "20%",
        align: "center",
        generate: (text: string) => {
          return <button>{text}</button>;
        },
      },
    ],
    isColumnsDropdownVisible: false,
    isServersidePagination: true,
    hasBulkOperation: false,
  };

  const [topupResetHistory, setTopupResetHistory] = useState<object[]>([
    {
      created_at: "2023-03-14 08:34:05",
      request_type: 1,
      amount: 20,
      status: 1,
      approved_at: "2023-03-14 08:34:05",
      admin_note: "admin",
    },
    {
      created_at: "2023-03-18 08:34:05",
      request_type: 2,
      amount: 21,
      status: "hello@example.com",
      approved_at: "2023-03-14 08:34:05",
      admin_note: "admin",
    },
  ]);

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
        <Col lg={12} className="mt-4">
          <TopUpCard contents={topUp} />
        </Col>
        <Col lg={12} className="mt-4">
          <TopUpCard contents={reset} />
        </Col>
      </Row>

      <Row>
        <Col lg={24} className="mt-5">
          <Table
            scrollX={10}
            data={topupResetHistory}
            loading={false}
            settings={settings}
          />
        </Col>
      </Row>
    </>
  );
};

export default TopUpReset;
