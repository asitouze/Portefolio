// import React from 'react'
import NavBar from "./Navbar/NavBar";

export default function Header() {
  return (
    <div className="h-24 flex flex-row gap-5 items-center justify-between text-white p-5 bg-black">
      <div className="flex items-center">
        <h1 className="font-bold font-signature text-4xl">Aurelien</h1>
      </div>
      <NavBar />
    </div>
  );
}
