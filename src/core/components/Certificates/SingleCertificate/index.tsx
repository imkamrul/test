import { Col } from "antd";
import Style from "./SingleCertificate.module.scss";
interface SingleCertificateProps {
  content: {
    certId: number;
    certName: string;
    category: string;
    htmlMarkup: string;
    url: string;
    unlocked: boolean;
  };
}
export const SingleCertificate = ({ content }: SingleCertificateProps) => {
  const { certName, htmlMarkup, url, unlocked } = content;
  return (
    <>
      <Col
        className={Style?.certificate_layout}
        style={{
          background: unlocked
            ? `linear-gradient(180deg, rgba(0, 0, 0, 0.86) 0%, rgba(250, 250, 250, 0.43) 100%),url("${url}")`
            : `linear-gradient(180deg, rgba(0, 0, 0, 0.86) 0%, rgba(37, 42, 61, 0.86) 100%),url("${url}")`,
        }}
      >
        <img
          src={
            unlocked
              ? "https://res.cloudinary.com/dvzadhnmh/image/upload/v1683260861/fundednext-dashboard-v2/certificate_unlock.svg"
              : "https://res.cloudinary.com/dvzadhnmh/image/upload/v1683260861/fundednext-dashboard-v2/certificate_lock.svg"
          }
          alt=""
        />
        <p className={`${Style.certificate_text} ${Style[htmlMarkup]}`}>
          {certName}
        </p>
      </Col>
    </>
  );
};
