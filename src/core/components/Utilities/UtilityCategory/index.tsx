import React from "react";
import Style from "./UtilityCategory.module.scss";

export const UtilityCategory = () => {
  const categorites = [
    {
      name: "All",
    },
    {
      name: "Videos",
    },
    {
      name: "Tools",
    },
    {
      name: "E-books",
    },
  ];
  return (
    <div className={Style.wrapper}>
      {categorites.map((category) => (
        <div className={Style.item}>
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
};
