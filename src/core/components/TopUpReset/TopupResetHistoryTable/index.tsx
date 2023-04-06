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
import { UserNoteModal } from "../UserNoteModal";

interface TopupResetHistoryTableProps {}

export const TopupResetHistoryTable = (props: TopupResetHistoryTableProps) => {
  const settings: TablePropTypes = {
    title: "Top-Up & Reset History",
    // headerWidget: <></>,
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
        key: "notes",
        isVisible: true,
        type: "component",
        width: "20%",
        align: "center",
        generate: (notes: any) => {
          return <UserNoteModal notes={notes} />;
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
      notes: JSON.stringify({
        admin_note: "admin",
        note: "hello",
      }),
    },
    {
      created_at: "2023-03-18 08:34:05",
      request_type: 2,
      amount: 21,
      status: "hello@example.com",
      approved_at: "2023-03-14 08:34:05",
      notes: JSON.stringify({
        admin_note: "admin",
        note: "hello",
      }),
    },
  ]);
  return (
    <>
      <Table
        scrollX={10}
        data={topupResetHistory}
        loading={false}
        settings={settings}
      />
    </>
  );
};

// export TopupResetHistoryTable;
