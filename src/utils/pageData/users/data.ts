import { IFormBuilder } from "../../../core/components/Form/Form.types";
import { TablePropTypes } from "../../../core/components/Table/Table.types";
import { roles, userTypes } from "../../index";

export const settings: TablePropTypes = {
  title: "Top-Up & Reset History",
  columns: [
    {
      title: "ID",
      key: "id",
      type: "copyable",
      isVisible: false,
      alwaysVisible: false,
    },
    {
      title: "First Name",
      key: "first_name",
      isVisible: true,
      alwaysVisible: false,
      sorter: (a: any, b: any) => a.first_name - b.first_name,
    },
    {
      title: "Email",
      key: "email",
      isVisible: true,
      alwaysVisible: false,
      sorter: (a: any, b: any) => a.email - b.email,
    },
    {
      title: "Phone",
      key: "phone",
      type: "copyable",
      isVisible: true,
      alwaysVisible: false,
    },
    {
      title: "Role",
      key: "role",
      type: "capitalize",
      isVisible: true,
      alwaysVisible: false,
    },
    {
      title: "Type",
      key: "type",
      type: "capitalize",
      isVisible: true,
      alwaysVisible: false,
    },
    // {
    //   title: 'Last Login Time',
    //   key: 'last_login_date',
    //   type: 'dateTime',
    //   isVisible: true,
    //   alwaysVisible: false,
    //   sorter: (a: any, b: any) => a.last_login_date - b.last_login_date,
    // },
  ],
  hasRowActions: true,
  hasAddNewBtn: false,
  addNewBtnTitle: "Add New",
  isServersidePagination: true,
  hasBulkOperation: false,
};

export const getFormBuilderData = (
  selectedSearchBy: string = ""
): IFormBuilder => {
  return {
    title: "Filter Courses",
    hideTitle: true,
    size: "middle",
    hideFormButtons: true,
    controls: [
      {
        label: "Type",
        type: "select",
        name: "role",
        options: userTypes,
        colSpan: 4,
        active: true,
      },
      {
        label: "Search By",
        type: "select",
        name: "search_by",
        colSpan: 5,
        active: true,
        options: [
          {
            label: "Phone",
            value: "phone",
          },
          {
            label: "Email",
            value: "email",
          },
          {
            label: "User ID",
            value: "id",
          },
        ],
      },
      {
        label: "Search",
        type: "search",
        name: "search",
        colSpan: 8,
        active: true,
        placeHolder: "Search by " + (selectedSearchBy || ""),
      },
    ],
  };
};

export const getEditFormSettings = ({
  formType,
  userType,
  vendor,
  classOptions,
  groupOptions,
  //@ts-ignore
  selectedUserId,
}: {
  formType: string;
  userType: string;
  vendor: string | null;
  classOptions: any;
  groupOptions: any;
}): IFormBuilder => {
  return {
    title: formType === "Add" ? "Add New User" : "Edit User",
    hideTitle: true,
    layout: "vertical",
    size: "middle",
    hideFormButtons: false,
    controls: [
      {
        label: "User Type",
        type: "select",
        name: "type",
        options: [
          { value: "student", label: "Student" },
          { value: "teacher", label: "Teacher" },
          { value: "employee", label: "Employee" },
        ],
        colSpan: 12,
        active: true,
        disabled: formType === "Edit",
        validation: [
          {
            required: true,
            message: "Please choose a user type.",
          },
        ],
      },
      {
        label: "First Name",
        type: "text",
        name: "name",
        placeHolder: "First Name",
        colSpan: 12,
        active: true,
        validation: [
          {
            required: true,
            message: "Please insert your first name.",
          },
        ],
      },
      {
        label: "Email",
        type: "text",
        name: "email",
        placeHolder: "Email",
        colSpan: 12,
        active: true,
        validation: [
          {
            required: userType === "student" ? false : true,
            message: "Please insert your email address.",
          },
        ],
      },
      {
        label: "Phone No.",
        type: "text",
        name: "phone",
        placeHolder: "Phone No.",
        colSpan: 12,
        active: true,
        validation: [
          {
            len: 11,
            message: "Phone number should be 11 digits.",
          },
          {
            required: userType === "student",
            message: "Fill up phone no. of 11 digits",
          },
          {
            pattern: /^(?:\d*)$/,
            message: "Phone number should contain just number",
          },
        ],
      },
      {
        label: "Password",
        type: "password",
        name: "password",
        placeHolder: "Password",
        colSpan: 12,
        active: userType !== "student",
        validation: [
          {
            required: selectedUserId ? false : true,
            message: "Please insert a password.",
          },
        ],
      },
      {
        label: "Role",
        type: "select",
        name: "role",
        options: roles,
        colSpan: 12,
        active: userType === "employee",
      },
      {
        label: "Is Staff",
        type: "select",
        name: "is_staff",
        options: [
          { value: true, label: "True" },
          { value: false, label: "False" },
        ],
        colSpan: 12,
        active: userType === "employee",
      },
      {
        label: "Is Banned",
        type: "select",
        name: "is_banned",
        options: [
          { value: true, label: "True" },
          { value: false, label: "False" },
        ],
        colSpan: 12,
        active: formType === "Edit" && userType === "employee",
      },
      {
        label: "Approved",
        type: "select",
        name: "approved",
        options: [
          { value: true, label: "True" },
          { value: false, label: "False" },
        ],
        colSpan: 12,
        active: userType === "employee" || userType === "teacher",
        validation: [
          {
            required: true,
            message: "Please choose true or false",
          },
        ],
      },
      {
        label: "Fixed Otp",
        type: "text",
        name: "fixed_otp",
        placeHolder: "Fixed Otp",
        colSpan: 12,
        active: formType === "Edit",
      },
      {
        label: "Class",
        type: "select",
        name: "class",
        options: classOptions,
        colSpan: 12,
        active: userType === "student",
        validation: [
          {
            required: userType === "student",
            message: "Please choose a class.",
          },
        ],
      },
      {
        label: "Group",
        type: "select",
        name: "group",
        options: groupOptions,
        colSpan: 12,
        active:
          userType === "student" && vendor !== "ucc" && formType === "Add",
        validation: [
          {
            required: true,
            message: "Please choose a group.",
          },
        ],
      },

      // {
      //     label: 'Subject',
      //     type: 'select',
      //     name: 'subject_code',
      //     placeHolder: 'Select Class',
      //     // options: dataClasses,
      //     colSpan: 24,
      //     active: true,
      // },
    ],
  };
};
