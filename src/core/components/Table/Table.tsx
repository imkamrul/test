import { DownOutlined, FilterOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Dropdown,
  Menu,
  Pagination,
  Popconfirm,
  Table,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CardHeader from "../../Molicules/CardHeader";
import {
  TableColumnTypes,
  TablePaginationTypes,
  TablePropTypes,
} from "./Table.types";
const { Paragraph } = Typography;

interface PropTypes {
  settings: TablePropTypes;
  data: any[] | undefined | null;
  loading?: boolean;
  handleAction?: (e: any) => any;
  handleAddNewAction?: () => void;
  pagination?: TablePaginationTypes;
  scrollX?: number;
  className?: string;
  topAligned?: boolean;
}

const GenericTable = ({
  settings,
  data,
  loading,
  handleAction,
  handleAddNewAction,
  pagination,
  scrollX,
  className,
  topAligned,
}: PropTypes) => {
  const [colSettings, setColSettings] = useState<TableColumnTypes[]>([]);
  const [selectedColumn, setSelectedColumn] = useState<string[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [pickerArr, setPickerArr] = useState<any[]>([]);
  // const [pagination,setPagination] = useState<any>({'current':1,'pageSize':5});
  const colorPreset = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];
  const router = useRouter();

  useEffect(() => {
    let columns = [...settings.columns];
    let pickedColumns: string[] = [];
    let columnsDup: any[] = [];
    // if (settings.hasRowActions) {
    //     columns.push(actionColumn)
    // }
    columns.forEach((column) => {
      if (column.isVisible) {
        pickedColumns.push(column.key);
      }
    });

    columnsDup = [...columns];
    columns = columns.filter((col) => col.isVisible);
    setColSettings(columns);

    setPickerArr(columnsDup);
    setSelectedColumn(pickedColumns);
  }, []);

  const changeColPicker = (dataIndexes: any[]): void => {
    let columns = [...settings.columns];

    columns = columns.map((column) => {
      if (!dataIndexes.includes(column.key)) {
        return { ...column, isVisible: false };
      } else {
        return { ...column, isVisible: true };
      }
      return column;
    });

    columns = columns.filter((col) => col.isVisible);

    // if (settings.hasRowActions) {
    //     columns.push(actionColumn)
    // }
    setColSettings([...columns]);
  };

  const columnPicker = (
    <Menu style={{ padding: "10px" }}>
      <Checkbox.Group
        defaultValue={selectedColumn || []}
        onChange={(event) => {
          changeColPicker(event);
        }}
      >
        {pickerArr.map((col: any) => {
          return (
            <div key={col.key}>
              <Checkbox disabled={col.alwaysVisible} value={col.key}>
                {col.title}
              </Checkbox>
            </div>
          );
        })}
      </Checkbox.Group>
    </Menu>
  );

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Card>
      <CardHeader
        title={settings.title}
        icon="https://res.cloudinary.com/dvzadhnmh/image/upload/v1680683630/fundednext-dashboard-v2/topup-reset-history-icon.svg"
      >
        {settings.hasBulkOperation &&
          selectedRowKeys.length > 0 &&
          settings.bulkActions?.map((action) => (
            <Button
              style={{ marginRight: "8px" }}
              type={action.btnType}
              danger={action.isDanger}
              size="middle"
              onClick={() => {
                settings.bulkActionEvent &&
                  settings.bulkActionEvent(action.action, selectedRowKeys);
              }}
              key={action.action}
            >
              {action.title}
            </Button>
          ))}

        {settings?.hasAddNewBtn && (
          <Button
            style={{ marginRight: "8px" }}
            type="primary"
            size="middle"
            onClick={() => {
              settings?.addNewBtnEvent && settings.addNewBtnEvent();
              settings?.addNewBtnUrl && router.push(settings.addNewBtnUrl);
            }}
            disabled={settings?.disableAddNewBtn}
          >
            {settings?.addNewBtnTitle ? settings.addNewBtnTitle : "Add New"}
          </Button>
        )}

        {settings?.isColumnsDropdownVisible && (
          <Dropdown
            overlay={columnPicker}
            trigger={["click"]}
            placement="bottomRight"
            arrow
          >
            <Button type="default" size="middle" icon={<FilterOutlined />}>
              Columns <DownOutlined />
            </Button>
          </Dropdown>
        )}

        {settings?.headerWidget && settings?.headerWidget}
      </CardHeader>

      {/*<Table*/}
      {/*    size="small"*/}
      {/*    pagination={settings.isServersidePagination && false}*/}
      {/*    loading={loading || false}*/}
      {/*    rowSelection={settings.hasBulkOperation ? rowSelection : undefined}*/}
      {/*    dataSource={data || []}*/}
      {/*    columns={colSettings}*/}
      {/*    scroll={{ x: scrollX || 1500 }}*/}
      {/*    className={topAligned ? className + ' top-aligned-column' : className}*/}
      {/*/>*/}
      <Table
        size="small"
        pagination={settings.isServersidePagination && false}
        loading={loading || false}
        rowSelection={settings.hasBulkOperation ? rowSelection : undefined}
        dataSource={data || []}
        // columns={colSettings}
        scroll={{ x: scrollX || 1500 }}
        className={topAligned ? className + " top-aligned-column" : className}
        rowKey={(record) => record?.id}
      >
        {colSettings &&
          colSettings.map((col) => (
            <Table.Column
              title={col.title}
              dataIndex={col.key}
              key={col.key}
              width={col?.width || undefined}
              sorter={col?.sorter || undefined}
              fixed={col?.fixed || undefined}
              ellipsis={col?.ellipsis || undefined}
              align={col?.align}
              render={(value, record, index) => (
                <>
                  {(() => {
                    switch (col?.type) {
                      case "boolean":
                        return value ? "Yes" : "No";
                      case "capitalize":
                        return (
                          <span style={{ textTransform: "capitalize" }}>
                            {value}
                          </span>
                        );
                      case "uppercase":
                        return (
                          <span style={{ textTransform: "uppercase" }}>
                            {value}
                          </span>
                        );
                      case "copyable":
                        if (value !== "") {
                          return (
                            <Paragraph copyable className="mb-0 copiable_td">
                              {value}
                            </Paragraph>
                          );
                        } else {
                          return "Not available";
                        }

                      case "expandable":
                        return (
                          <Paragraph
                            ellipsis={{
                              rows: 3,
                              expandable: true,
                              // symbol: 'show',
                            }}
                          >
                            {value}
                          </Paragraph>
                        );
                      case "link":
                        return (
                          <a rel="noreferrer" target="_blank" href={value}>
                            {value}
                          </a>
                        );
                      case "date":
                        return moment(
                          value && value.replace("Z", "+06:00")
                        ).format("DD-MM-YYYY");
                      case "dateTime":
                        return moment(
                          value && value.replace("Z", "+06:00")
                        ).format("hh:mm A DD-MM-YYYY");
                      case "number":
                        return value ? value : 0;
                      case "decimal":
                        return value ? parseFloat(value).toFixed(2) : "0.00";
                      case "currency":
                        return value
                          ? "$" + parseFloat(value).toFixed(2)
                          : "$0.00";
                      case "percentage":
                        return value ? parseFloat(value) + "%" : "0%";
                      case "image":
                        return value ? (
                          <img src={value} width={100} height={100} alt="img" />
                        ) : (
                          "No Image"
                        );
                      case "color":
                        return (
                          <>
                            {value &&
                              value?.split(",")?.map((val: string, i: any) => {
                                return (
                                  <span key={i} className="mr-2">
                                    <svg
                                      style={{
                                        position: "relative",
                                        top: 2,
                                        marginLeft: 5,
                                      }}
                                      width="1em"
                                      height="1em"
                                      fill={`#${val}`}
                                      aria-hidden="true"
                                      focusable="false"
                                      className=""
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z"></path>
                                    </svg>{" "}
                                    #{val}
                                  </span>
                                );
                              })}
                          </>
                        );
                      case "tag":
                        return (
                          <>
                            {value &&
                              Array.isArray(value) &&
                              value.map((val: string, i) => {
                                return (
                                  <Tag key={i} color={colorPreset[i]}>
                                    {val}
                                  </Tag>
                                );
                              })}
                          </>
                        );
                      case "component": {
                        return (
                          <>
                            {col.generate && value ? col.generate(value) : "--"}
                          </>
                        );
                      }
                      default:
                        return value ? value : "--";
                    }
                  })()}
                </>
              )}
            />
          ))}

        {settings?.hasRowActions && (
          <Table.Column
            title="Actions"
            key="actions"
            dataIndex="actions"
            fixed="right"
            width={100}
            render={(text: string, record: any) => (
              <div>
                {settings.rowActions?.map((action, i) => (
                  <Tooltip title={action.title} key={i}>
                    {action?.action === "delete" ? (
                      <Popconfirm
                        title={
                          action?.rowActionTitle || "Are you sure to delete?"
                        }
                        onConfirm={() => {
                          settings.rowActionEvent &&
                            settings.rowActionEvent(action.action, record);
                        }}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button
                          type="text"
                          size="small"
                          key={action.action}
                          icon={
                            action?.btnIcon && action?.btnIcon?.type?.render()
                          }
                          danger={action.isDanger}
                        />
                      </Popconfirm>
                    ) : action?.action === "save" ? (
                      <Popconfirm
                        title={
                          action?.rowActionTitle || "Are you sure to save?"
                        }
                        onConfirm={() => {
                          settings.rowActionEvent &&
                            settings.rowActionEvent(action.action, record);
                        }}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button
                          type="text"
                          size="small"
                          key={action.action}
                          icon={
                            action?.btnIcon && action?.btnIcon?.type?.render()
                          }
                          danger={action.isDanger}
                          style={{ color: "green" }}
                        />
                      </Popconfirm>
                    ) : (
                      <Button
                        type="text"
                        size="small"
                        onClick={() => {
                          settings.rowActionEvent &&
                            settings.rowActionEvent(action.action, record);
                        }}
                        key={action.action}
                        icon={
                          action?.btnIcon && action?.btnIcon?.type?.render()
                        }
                        danger={action.isDanger}
                      />
                    )}
                  </Tooltip>
                ))}
              </div>
            )}
          />
        )}
      </Table>
      {settings.isServersidePagination && (
        <Pagination
          className="text-right"
          size="small"
          onChange={(page: number, size: number) =>
            pagination?.onChange(page, size)
          }
          current={pagination?.current || 1}
          style={{ marginTop: 10 }}
          total={pagination?.total || 0}
          showTotal={(total) => `Total ${total} items`}
        />
      )}
    </Card>
  );
};
export default GenericTable;
