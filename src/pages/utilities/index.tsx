import {
  EbookCategory,
  ToolsCategory,
  UtilityCategory,
  UtilityHero,
  VideoCategory,
} from "@/core/components/Utilities";
import React from "react";

const UtilityPage = () => {
  return (
    <>
      <UtilityHero />
      <UtilityCategory />
      <VideoCategory />
      <ToolsCategory />
      <EbookCategory />
    </>
  );
};

export default UtilityPage;
