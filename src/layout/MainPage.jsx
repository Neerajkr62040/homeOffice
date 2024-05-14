import React from "react";
import Header from "./Header";
import DescPage from "./DescPage";
import Footer from "./Footer";

function MainPage({ children, showDesc = false }) {
  return (
    <div className=" relative">
      <Header />
      {showDesc ? <DescPage>{children}</DescPage> : children}

      <Footer />
    </div>
  );
}

export default MainPage;
