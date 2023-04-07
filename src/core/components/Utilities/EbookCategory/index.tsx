import React from "react";
import Style from "./EbookCategory.module.scss";
import { Button, Space } from "antd";
import Book from "../../icons/Book";
import Pdf from "../../icons/Pdf";

export const EbookCategory = () => {
  const AllEbook = [
    {
      title: "Risk Calculator Setup Video",
      url: "fdfd",
    },
    {
      title: "Risk Calculator Setup Video",
      url: "fdfd",
    },
  ];
  return (
    <div className={Style.wrapper}>
      <div className={Style.header}>
        <div className="d-flex justify-content-center align-items-center">
          <Book />
          <h3>E-Book</h3>
        </div>
        <p>See All</p>
      </div>
      <div className={Style.body}>
        {AllEbook.map((ebook) => (
          <div className={Style.singlebook}>
            <Pdf />
            <h3>{ebook.title}</h3>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Button type="primary" size="large" block>
                Download
              </Button>
            </Space>
          </div>
        ))}
      </div>
    </div>
  );
};
