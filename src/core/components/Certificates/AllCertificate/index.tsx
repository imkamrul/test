import { Col, Row } from "antd";
import { CertificateTitle } from "../CertificatesTittle";
import { SingleCertificate } from "../SingleCertificate";
import Style from "./AllCertificate.module.scss";
export const AllCertificate = () => {
  const dummyData = [
    {
      certId: 1,
      certName: "Elite Trader",
      category: "Challenge",
      htmlMarkup: "elite",
      url: "https://fundednext.fra1.digitaloceanspaces.com/certificate/1671535310.jpg",
      unlocked: false,
    },
    {
      certId: 2,
      certName: "Crown Trader",
      category: "Challenge",
      htmlMarkup: "crown",
      url: "https://fundednext.fra1.digitaloceanspaces.com/certificate/1671535402.jpg",
      unlocked: true,
    },
    {
      certId: 3,
      certName: "Payout I",
      category: "Payout",
      htmlMarkup: "demoPayout",
      url: "https://fundednext.fra1.digitaloceanspaces.com/certificate/1671535431.jpg",
      unlocked: false,
    },
    {
      certId: 4,
      certName: "Payout II",
      category: "Payout",
      htmlMarkup: "realPayout",
      url: "https://fundednext.fra1.digitaloceanspaces.com/certificate/1671535444.jpg",
      unlocked: false,
    },
  ];
  return (
    <Col span={24}>
      <Row className={Style?.container}>
        <CertificateTitle />
        <div className={Style?.certificateWrapper}>
          {dummyData.map((item) => {
            return <SingleCertificate key={item?.certId} content={item} />;
          })}
        </div>
      </Row>
    </Col>
  );
};
