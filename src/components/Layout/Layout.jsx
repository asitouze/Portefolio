// import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SocialLinks from "../SocialLinks/SocialLinks";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className=" min-h-[calc(100vh-96px-24px)] text-white bg-gradient-to-b from-black to-gray-800">
        {children}
        <SocialLinks />
      </main>
      <Footer />
    </>
  );
}
