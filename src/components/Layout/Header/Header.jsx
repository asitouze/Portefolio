// import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="h-24 flex flex-row gap-5 items-center justify-between">
      <div className="flex items-center">
        <h1>AS</h1>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <Link to="/"> Home </Link>
        <Link to="about"> About </Link>
        <Link to="Experience"> Experience </Link>
        <Link to="skill"> Skill </Link>
        <Link to="contact"> Contact </Link>
      </div>
    </div>
  );
}
