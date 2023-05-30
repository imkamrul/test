import React from "react";

const AccountOverview = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dvzadhnmh/image/upload/v1685095540/fundednext-dashboard-v2/account-overview")',
          height: "200px",
        }}
      >
        <div></div>
      </div>
    </div>
  );
};

AccountOverview.layoutSettings = {
  contentWrapperStyle: {
    paddingLeft: "0",
  },
};

export default AccountOverview;
