import React from "react";
import Style from "./HelpDetails.module.scss";
import { Collapse, Breadcrumb } from "antd";
import Thumbsup from "../../icons/thumbsup";
import Thumbsdown from "../../icons/Thumbsdown";
const { Panel } = Collapse;

export const HelpDetails = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <>
      <div className={Style.breadcrumb}>
        <Breadcrumb
          items={[
            {
              title: "Express",
            },
            {
              title: "Demo",
            },
            {
              title: "Faq",
            },
          ]}
        />
      </div>
      <div className={Style.wrapper}>
        <div className={Style.details}>
          <h3>
            Do I need to wait the full 60 days (8 Trading weeks) for phase-2?
          </h3>
          <p>
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat.Morbi in sem quis dui placerat ornare. Pellentesque odio
            nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat. Morbi in sem quis dui placerat ornare. Pellentesque odio
            nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat.Morbi in sem quis dui placerat ornare. Pellentesque odio
            nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat. Morbi in sem quis dui placerat ornare. Pellentesque odio
            nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat.Morbi in sem quis dui placerat ornare. Pellentesque odio
            nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat.
          </p>

          <div className={Style.helpful}>
            <h4>Was this article helpful</h4>
            <div className={Style.thumbBtn}>
              <span>
                {" "}
                <Thumbsup />
              </span>
              <span>
                <Thumbsdown />
              </span>
            </div>
            <a> https://fundednext.com/faq</a>
          </div>
        </div>
        <div className={Style.sidebar}>
          <Collapse defaultActiveKey={["1"]} onChange={onChange}>
            <Panel header="Express Demo" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="General Questions" key="2">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
};
