import { dateFormate } from "@/helpers/utils";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import { useState } from "react";
import Table from "../../Table";
import { TablePropTypes } from "../../Table/Table.types";

interface HistoryTableProps {}

const ApprovedHistoryTable = (props: HistoryTableProps) => {
  const settings: TablePropTypes = {
    columns: [
      {
        title: "SN",
        key: "serial",
        isVisible: true,
        type: "number",
        width: "5%",
        align: "center",
      },
      {
        title: "Payment Method",
        key: "method",
        isVisible: true,
        width: "17%",
        align: "center",
      },
      {
        title: "Date",
        key: "approved_at",
        type: "component",
        isVisible: true,
        width: "9%",
        align: "center",
        generate: (approvedAt: string) => {
          return dateFormate(approvedAt);
        },
      },
      {
        title: "Transaction ID",
        key: "transaction_id",
        isVisible: true,
        width: "12%",
        align: "center",
      },
      {
        title: "Transaction Type",
        key: "transaction_type",
        isVisible: true,
        width: "15%",
        align: "center",
      },
      {
        title: "Status",
        key: "status",
        isVisible: true,
        type: "component",
        width: "11%",
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
        title: "Amount",
        key: "amount",
        isVisible: true,
        type: "currency",
        width: "9%",
        align: "center",
      },
      {
        title: "Discount",
        key: "amount",
        isVisible: true,
        type: "currency",
        width: "9%",
        align: "center",
      },
      {
        title: "Total Amount",
        key: "amount",
        isVisible: true,
        type: "currency",
        width: "10%",
        align: "center",
      },
    ],
    isColumnsDropdownVisible: false,
    isServersidePagination: true,
    hasBulkOperation: false,
  };

  const [History, setHistory] = useState<object[]>([
    {
      serial: 1,
      method: "Stripe",
      transaction_type: "top-up",
      created_at: "2023-03-14 08:34:05",
      request_type: 1,
      amount: 20,
      status: 1,
      approved_at: "2023-03-14 08:34:05",
      transaction_id: "pay_wetfwahrfghljkh",
    },
    {
      serial: 2,
      method: "Stripe",
      transaction_type: "reset",
      created_at: "2023-03-18 08:34:05",
      request_type: 2,
      amount: 21,
      status: 3,
      approved_at: "2023-03-14 08:34:05",
      transaction_id: "pay_wetfwahrfghljkh",
    },
    {
      serial: 3,
      method: "Stripe",
      transaction_type: "reset",
      created_at: "2023-03-18 08:34:05",
      request_type: 2,
      amount: 21,
      status: 2,
      approved_at: "2023-03-14 08:34:05",
      transaction_id: "pay_wetfwahrfghljkh",
    },
  ]);
  return (
    <>
      <Table scrollX={10} data={History} loading={false} settings={settings} />
    </>
  );
};
export default ApprovedHistoryTable;
