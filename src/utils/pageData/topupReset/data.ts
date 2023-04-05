import { REQUEST_TYPE } from "@/types/enums/topupReset";
export const topUpReset = {
  topUp: {
    title: "Top-Up",
    title_icon:
      "https://res.cloudinary.com/dvzadhnmh/image/upload/v1680234460/fundednext-dashboard-v2/topup-card-icon.svg",
    details:
      "FundedNext traders will get an opportunity to bring back their account balance to the initial amount. Applicable if you have not violated any of the drawdown rules. Once you top up your account, your trading cycle will also reset. To know more",
    note: "Note: You must close the running trades if you have any",
    btn_text: "Top-Up Request",
    requestType: REQUEST_TYPE.TOP_UP,
  },
  reset: {
    title: "Reset",
    title_icon:
      "https://res.cloudinary.com/dvzadhnmh/image/upload/v1680234709/fundednext-dashboard-v2/reset-card-icon.png",
    details:
      "If a trader violates the rules his/her account will be suspended. But Fundednext will give him/her the opportunity to continue with the program at a discounted price/cost. This re-registration cost is also known as the 'Reset' fee since the trader will be provided with a new account and his trading cycle will be reset. To know more",
    note: "Note: You must close the running trades if you have any",
    btn_text: "Reset Request",
    requestType: REQUEST_TYPE.RESET,
  },
};
