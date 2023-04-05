import { ColumnsType } from "antd/es/table";

interface CustomTableProps {}

const CustomTable = (props: CustomTableProps) => {
  const columns: ColumnsType = [
    {
      title: "Hello",
      dataIndex: "hello",
    },
    {
      title: "Hello",
      dataIndex: "hello",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
};

export default CustomTable;
