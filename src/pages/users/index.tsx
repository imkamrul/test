import Filter from "../../core/components/Filter";
import Table from "../../core/components/Table";

import { IFormBuilder } from "@/core/components/Form/Form.types";
import { TablePaginationTypes } from "@/core/components/Table/Table.types";
import {
  getEditFormSettings,
  getFormBuilderData,
  settings,
} from "@/utils/pageData/users/data";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "../../core/components/Form";
// import { getClassesNoMasking } from '@/apis/authContainer'

type PageQueryTypes = {
  pageSize?: number;
  pageNo?: number;
  type?: string;
  search?: string;
  search_by?: string;
};

const Users = () => {
  const [cmsUsers, setCmsUsers] = useState<object[]>([] as object[]);
  const [selectedUserId, setSelectedUserId] = useState<any>(null);
  const [selectedUser, setSelectedUser] = useState<any>({ type: "employee" });
  const [showForm, setShowForm] = useState(false);
  const [selectedSearchBy, setSelectedSearchBy] = useState("email");
  const [formChangedKey, setFormChangedKey] = useState<any[]>([]);
  const [pageQuery, setPageQuery] = useState<PageQueryTypes>({
    pageSize: 10,
    pageNo: 1,
  });

  // const classOptions = getClassesNoMasking();
  const [groupOptions, setGroupOptions] = useState([]);

  settings.rowActions = [
    {
      title: "Edit",
      action: "edit",
      btnIcon: <EditOutlined />,
      btnClass: "btn",
    },
    {
      title: "Delete",
      action: "delete",
      btnIcon: <DeleteOutlined />,
      isDanger: true,
      btnClass: "btn",
    },
  ];

  settings.rowActionEvent = (action, record) => {
    if (action === "edit") {
      setShowForm(true);
      // @ts-ignore
      setSelectedUser({
        name: record?.first_name,
        email: record?.email,
        phone: record?.phone,
        role: record?.role,
        avatar: record?.avatar,
        secret: record?.secret,
        is_staff: record?.is_staff,
        is_banned: record?.is_banned,
        fixed_otp: record?.fixed_otp,
        approved: record?.approved && record.approved === true ? true : false,
        type: record?.type,
        class: record?.class,
        group: record?.group,
      });
      setSelectedUserId(record?.id);
    }

    if (action === "delete") {
    }
  };

  settings.addNewBtnEvent = () => {
    setShowForm(true);
  };

  const handleFilter = (changed: any, values: any) => {
    if (changed?.search_by) {
      setSelectedSearchBy(changed.search_by);
    }
    setPageQuery({ ...pageQuery, type: values?.role, search: values?.search });
  };

  const formConfig: IFormBuilder = getFormBuilderData(selectedSearchBy);

  const onFilter = (changed: any, values: any) => {
    if (changed?.Name) return (formConfig.controls[1].active = true);
    // setFormConfig({ ...formBuilder });
    !changed?.search && handleFilter(changed, values);
  };

  const onSearch = (value: string, name: string) => {};

  const onSubmit = (formValues: any) => {
    const newObj: any = {};
    const variables: any = {};
    formChangedKey.forEach((key) => {
      newObj[key] = formValues[key];
    });
    variables.type = newObj?.type || selectedUser.type;
    newObj?.name && (variables.first_name = newObj.name);
    newObj?.email && (variables.email = newObj.email);
    newObj?.phone && (variables.phone = newObj.phone);
    newObj?.password && (variables.secret = newObj.password);
    newObj?.role && (variables.role = newObj.role);
    newObj?.group && (variables.group = newObj.group);
    newObj?.is_staff && (variables.is_staff = newObj.is_staff);
    newObj?.is_banned && (variables.is_banned = newObj.is_banned);
    // newObj?.approved && (variables.approved = newObj.approved)
    newObj?.fixed_otp && (variables.fixed_otp = newObj.fixed_otp);

    if (newObj?.approved || newObj.approved === false) {
      newObj?.approved === true
        ? (variables.approved = true)
        : (variables.approved = false);
    }
    if (newObj?.fixed_otp === "") {
      variables.fixed_otp = "";
    } else {
      variables.fixed_otp = newObj.fixed_otp;
    }

    if (selectedUserId) {
      variables.user_id = selectedUserId;
      newObj?.class &&
        (newObj.class === "JOB"
          ? (variables.class = "Job")
          : (variables.class = newObj.class));
      // editUserProfile({ variables })
    } else {
      newObj?.class && (variables.class = newObj.class);
      // createCMSUser({ variables })
    }
  };

  useEffect(() => {}, [pageQuery]);

  const pagination: TablePaginationTypes = {
    current: pageQuery?.pageNo as number,
    pageSize: pageQuery?.pageSize as number,
    onChange: (page: number, size: number) => {
      setPageQuery((prev: any) => {
        return {
          ...prev,
          pageNo: page,
          pageSize: size,
        };
      });
    },
    total: 0,
  };

  const [userType, setUserType] = useState("employee");

  const handleChange = (changed: any, values: any) => {
    if (changed?.type) {
      setUserType(changed?.type);
    }

    if (changed?.class) {
    }
  };

  const handleFormFieldChange = (values: any) => {
    setFormChangedKey(values);
  };

  // const defaultfilterValues = useMemo(() => {
  //   return {
  //     search_by: selectedSearchBy,
  //   }
  // }, [])

  const router = useRouter();
  console.log("router :", router);

  const editFormSettings = getEditFormSettings({
    formType: selectedUserId ? "Edit" : "Add",
    userType,
    // classOptions,
    groupOptions,
    //@ts-ignore
    selectedUserId,
  });

  return (
    <>
      <Filter
        onSearch={onSearch}
        // defaultValues={defaultfilterValues}
        onFilter={onFilter}
        formConfig={formConfig}
      />
      <Table
        loading={false}
        settings={settings}
        data={cmsUsers}
        pagination={pagination}
        scrollX={1000}
      />
      <Drawer
        title={selectedUserId ? "Edit User" : "Add New User"}
        width={640}
        closable={true}
        onClose={() => {
          setShowForm(false);
          setSelectedUserId(null);
          setSelectedUser(null);
        }}
        visible={showForm}
      >
        <Form
          onSubmit={onSubmit}
          defaultValues={selectedUser}
          onFieldsChange={(val) => handleFormFieldChange(val)}
          onChange={handleChange}
          onCancel={() => {
            setShowForm(false);
            setSelectedUserId(null);
          }}
          formBuilder={editFormSettings}
          loading={false}
        />
      </Drawer>
    </>
  );
};

export default Users;
