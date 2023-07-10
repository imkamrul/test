import React from "react";
import { Button, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Styles from "./Account.module.scss";
import { NoAccount } from "../NoAccount";

const { Title, Paragraph } = Typography;

export interface AccountProps {
  accounts: any[];
  activeTab: string;
}

export const Account: React.FC<AccountProps> = ({ accounts, activeTab }) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.createAccount}>
        {activeTab == "active" && (
          <div>
            <Button size="large" className={Styles.accountBtn}>
              Create{" "}
              <span
                style={{
                  color: "#635BFF",
                  marginLeft: "2px",
                }}
              >
                {" "}
                New Account
              </span>
              <RightOutlined />
            </Button>
          </div>
        )}

        {accounts?.length != 0 ? (
          accounts?.map((account) => {
            return (
              <div className={Styles.dashboardTour}>
                <img
                  src="https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1683609031/fundednext-dashboard-v2/batch-demo-dashboard"
                  alt="Demo Dashboard"
                />
                <div className={Styles.dashboardTourContent}>
                  <div className={Styles.dashboardCard}>
                    <h3>{account?.type}</h3>
                    <div className={Styles.activeAccountCard}>
                      <div className={Styles.borderRight}>
                        <p>Sever Type: {account?.trading_server_type}</p>
                        <p>One Time Fee: 4343</p>
                      </div>
                      <div>
                        <p>Balance: {account?.balance}</p>
                        <p>Equity: {account?.equity}</p>
                      </div>
                    </div>
                  </div>
                  <button>Dashboard</button>
                </div>
              </div>
            );
          })
        ) : activeTab == "active" ? (
          <div className={Styles.dashboardTour}>
            <img
              src="https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1683609031/fundednext-dashboard-v2/batch-demo-dashboard"
              alt="Demo Dashboard"
            />
            <div className={Styles.dashboardTourContent}>
              <div className={Styles.dashboardCard}>
                <h3>Demo Dashboard - Free Tour Dashboard</h3>
                <Paragraph>
                  You are given a demo account to experience the dashboard
                </Paragraph>
              </div>
              <button>Dashboard</button>
            </div>
          </div>
        ) : (
          <NoAccount />
        )}
      </div>

      {activeTab == "active" && (
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
              <div className={Styles.singleSlider}>
                <h3>Profit Share Increased 90%</h3>
                <p>
                  From now on our traders will receive a 90% profit share upon
                  getting a real account. For more detail visit
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={Styles.singleSlider}>
                <h3>Profit Share Increased 90%</h3>
                <p>
                  From now on our traders will receive a 90% profit share upon
                  getting a real account. For more detail visit
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={Styles.singleSlider}>
                <h3>Profit Share Increased 90%</h3>
                <p>
                  From now on our traders will receive a 90% profit share upon
                  getting a real account. For more detail visit
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <Button className={Styles.btnLearnMore}>
            <p>Learn More</p>
          </Button>
        </div>
      )}
    </div>
  );
};
