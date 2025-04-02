import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className={`min-h-[calc(100vh-60px)]`}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
