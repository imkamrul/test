import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import Styles from "./Toggle.module.scss";

export const Toggle = () => {
  const [value4, setValue4] = useState("FAQ");
  const options = [
    { label: "FAQ", value: "FAQ" },
    { label: "Rules", value: "Rules" },
  ];

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio4 checked", value);
    setValue4(value);
  };
  return (
    <div className={Styles.wrapper}>
      <Radio.Group
        size="large"
        options={options}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  );
};
