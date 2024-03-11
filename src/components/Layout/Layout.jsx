// import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
