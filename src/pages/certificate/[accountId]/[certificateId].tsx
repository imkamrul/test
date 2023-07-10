import { CongratulationBanner } from "@/core/components/SingleCertificate";
import { GetServerSideProps } from "next";

const SingleCertificate = ({ data, accountId, certificateId }: any) => {
  return (
    <>
      <CongratulationBanner
        accountId={accountId}
        certificateId={certificateId}
      />
    </>
  );
};

export default SingleCertificate;
export const getServerSideProps: GetServerSideProps<{ data: any }> = async (
  context
) => {
  const { accountId, certificateId } = context.query;

  let data = null;
  try {
    const url = `
    https://evaluation.fundednext.com/api/user/account-status?login=${accountId}&doc_id=${certificateId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await response.json();
    data = result?.data;
  } catch (error) {
    console.log("error :", error);
  }
  return {
    props: { data, accountId, certificateId },
  };
};
