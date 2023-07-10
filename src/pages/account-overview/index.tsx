import { AccountInfo } from "@/core/components/AccountOverview";

const AccountOverview = () => {
  return (
    <>
      <AccountInfo />
    </>
    // <div>
    //   <div
    //     style={{
    //       backgroundImage:
    //         'url("https://res.cloudinary.com/dvzadhnmh/image/upload/v1685095540/fundednext-dashboard-v2/account-overview")',
    //       height: "200px",
    //     }}
    //   >
    //     <div></div>
    //   </div>
    // </div>
  );
};

AccountOverview.layoutSettings = {
  contentWrapperStyle: {
    padding: "100px 30px",
  },
};

export default AccountOverview;
