import { Header } from "@/core/components/PublicLayout";

const Public = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="publicLayout">{children}</main>
    </>
  );
};

export default Public;
