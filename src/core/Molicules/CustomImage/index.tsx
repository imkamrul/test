/* eslint-disable @next/next/no-img-element */
import { CustomImageProps } from "./CustomImage.types";
const CustomImage = (prop: CustomImageProps) => {
  const { imageName, alt, customClass } = prop;
  let fullPath =
    "https://res.cloudinary.com/dvzadhnmh/image/upload/v1680768441/fundednext-dashboard-v2/" +
    imageName;
  return (
    <>
      <img
        src={fullPath}
        alt={alt || "not found"}
        className={customClass || ""}
      />
    </>
  );
};

export default CustomImage;
