import React from "react";
import Styles from "./ActiveAccount.module.scss";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export const ActiveAccount = () => {
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
          <img src="https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1683609031/fundednext-dashboard-v2/batch-demo-dashboard" />
          <div className={Styles.dashboardTourContent}>
            <div className={Styles.dashboardCard}>
              <h3>Demo Dashboard- free tour dashboard</h3>
              <p>You are given a demo account to experience the dashboard </p>
            </div>
            <button>Dashboard</button>
          </div>
        </div>
      </div>
      <div className={Styles.slider}>
        <div className={Styles.imgWrapper}>
          <img src="https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1683610189/fundednext-dashboard-v2/notice" />
        </div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className={Styles.swapper}
        >
          <SwiperSlide>
            <h3>Profit Share Increased 90%</h3>
            <p>
              From now on our traders will receive a 90% profit share upon
              getting a real account. For more detail visit
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h3>Profit Share Increased 90%</h3>
            <p>
              From now on our traders will receive a 90% profit share upon
              getting a real account. For more detail visit
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h3>Profit Share Increased 90%</h3>
            <p>
              From now on our traders will receive a 90% profit share upon
              getting a real account. For more detail visit
            </p>
          </SwiperSlide>
        </Swiper>
        <button className={Styles.btnLearnMore}>
          <p>Learn More</p>
        </button>
      </div>
    </div>
  );
};
