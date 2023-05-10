import React from "react";
import { Button, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Styles from "./ActiveAccount.module.scss";

const { Title, Paragraph } = Typography;

export const ActiveAccount: React.FC = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.createAccount}>
        <div>
          <Button size="large">
            Create <span>New Account</span>
            <RightOutlined />
          </Button>
        </div>
        <div className={Styles.dashboardTour}>
          <img
            src="https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1683609031/fundednext-dashboard-v2/batch-demo-dashboard"
            alt="Demo Dashboard"
          />
          <div className={Styles.dashboardTourContent}>
            <div className={Styles.dashboardCard}>
              <Title level={3}>Demo Dashboard - Free Tour Dashboard</Title>
              <Paragraph>
                You are given a demo account to experience the dashboard
              </Paragraph>
            </div>
            <button>Dashboard</button>
          </div>
        </div>
      </div>
      <div className={Styles.slider}>
        <div className={Styles.imgWrapper}>
          <img
            src="https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1683610189/fundednext-dashboard-v2/notice"
            alt="Notice"
          />
        </div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className={Styles.swapper}
        >
          <SwiperSlide>
            <Title level={3}>Profit Share Increased 90%</Title>
            <Paragraph>
              From now on our traders will receive a 90% profit share upon
              getting a real account. For more detail visit
            </Paragraph>
          </SwiperSlide>
          <SwiperSlide>
            <Title level={3}>Profit Share Increased 90%</Title>
            <Paragraph>
              From now on our traders will receive a 90% profit share upon
              getting a real account. For more detail visit
            </Paragraph>
          </SwiperSlide>
          <SwiperSlide>
            <Title level={3}>Profit Share Increased 90%</Title>
            <Paragraph>
              From now on our traders will receive a 90% profit share upon
              getting a real account. For more detail visit
            </Paragraph>
          </SwiperSlide>
        </Swiper>
        <Button className={Styles.btnLearnMore}>
          <Paragraph>Learn More</Paragraph>
        </Button>
      </div>
    </div>
  );
};
