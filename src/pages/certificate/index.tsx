import {
  CertificateMenu,
  CertificatesHero,
} from "@/core/components/Certificates";
import { Row } from "antd";

const Certificate = () => {
  return (
    <>
      <Row gutter={30} className="">
        <CertificatesHero />
        <CertificateMenu />
      </Row>
    </>
  );
};

export default Certificate;
Certificate.layoutSettings = {
  pageHeader: {},
  contentWrapperStyle: {
    padding: "65px 15px",
    margin: "0",
    // overflow: "hidden",
  },
};
