// import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className=" min-h-[calc(100vh-96px-96px)] text-white ">
        {children}
      </main>
      <Footer />
    </>
  );
}
