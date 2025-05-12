// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useNavigate } from "react-router-dom";
import "./App.css";
import me from "./assets/anim.png";
import next from "./assets/vector/r-arrow.svg";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("about");
  };
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center md:flex-row  h-[100vh] px-4">
      <div className=" h-full flex flex-col text-white justify-center ">
        <h1 className="font-bold text-4xl sm:text-7xl">
          Je suis un développeur web
        </h1>
        <p className="text-gray-500 py-4 max-w-md">
          Je m&apos;appelle Aurélien, j&apos;ai 22 ans et je suis passionné par
          le développement web. En tant que développeur fullstack, je navigue
          avec aisance à travers les langages et les technologies. Ma palette de
          compétences comprend HTML, CSS, Node.js, Tailwind et React, que je
          maîtrise avec précision pour créer des expériences web dynamiques et
          innovantes.
        </p>
        <button
          type="button"
          onClick={handleClick}
          className="text-white w-fit px-6 py-3 my-2  bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center rounded-md group"
        >
          En savoir plus
          <img
            src={next}
            alt="next"
            className="h-5 w-5 group-hover:rotate-90 duration-300 ml-1"
          />
        </button>
      </div>
      <div className="h-[65%] text-center">
        <img
          src={me}
          alt="me"
          className="w-[50%] h-auto rounded-2xl mx-auto py-2"
        />
      </div>
    </div>
  );
}

export default App;
