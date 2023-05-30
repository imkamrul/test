import { Col, notification } from "antd";
import { useRouter } from "next/router";
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
  console.log("content :", content);

  const { certName, htmlMarkup, url, unlocked, certId } = content;
  const router = useRouter();
  const handleButtonClick = (id: number, status: boolean): void => {
    const handleErrorMessages = (): void => {
      notification.open({
        message: "Certificate is locked!",
        description:
          "Certificate is locked! Please complete the challenge to unlock the certificate.",
      });
    };
    if (status) {
      router.push(`/certificate/1820794774/4011742131af9`);
      // router.push(`/certificate/${id}`);
    } else {
      handleErrorMessages();
    }
  };
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
        <button
          className={`${Style.certificate_text} ${Style[htmlMarkup]}`}
          onClick={() => handleButtonClick(certId, unlocked)}
        >
          {certName}
        </button>
      </Col>
    </>
  );
};
