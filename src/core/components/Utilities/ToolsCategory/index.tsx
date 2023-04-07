import React from "react";
import Style from "./ToolsCategory.module.scss";
import Tools from "../../icons/Tools";
import { Button } from "antd";

export const ToolsCategory = () => {
  const AllTools = [
    {
      title: "Risk Calculator Setup Video",
      description:
        "One of the most important tools in a trader's bag is risk management. With a few simple inputs, our risk calculator will help you find the approximate amount of currency units to buy or sell to control your maximum risk per position.",
      url: "fdfd",
    },
    {
      title: "Risk Calculator Setup Video",
      description:
        "One of the most important tools in a trader's bag is risk management. With a few simple inputs, our risk calculator will help you find the approximate amount of currency units to buy or sell to control your maximum risk per position.",
      url: "fdfd",
    },
  ];
  return (
    <div className={Style.wrapper}>
      <div className={Style.header}>
        <div className="d-flex justify-content-center align-items-center">
          <Tools />
          <h3>Tools</h3>
        </div>
        <p>See All</p>
      </div>
      <div className={Style.body}>
        {AllTools.map((tool) => (
          <div className={Style.singleTool}>
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>

            <Button type="primary" size="large">
              Download
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
