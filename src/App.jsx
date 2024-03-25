// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useNavigate } from "react-router-dom";
import "./App.css";
import me from "./assets/me.jpg";
import next from "./assets/vector/r-arrow.svg";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("about");
  };
  return (
    <div className="flex flex-row gap-5 justify-center items-center p-10">
      <div className="flex flex-col text-white gap-6 justify-center items-center">
        <h1 className="font-bold text-4xl"> Je suis un développeur web</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum at
          necessitatibus quibusdam ipsa reprehenderit provident minus eum eos
          exercitationem, iure voluptates nulla, explicabo libero placeat
          corporis ratione maiores nam esse!
        </p>
        <button
          type="button"
          onClick={handleClick}
          className="text-white bg-red-500 flex flex-row gap-5 p-2 rounded-2xl"
        >
          <h2>En savoir plus</h2>
          <img src={next} alt="next" className="h-5 w-5" />
        </button>
      </div>
      <img src={me} alt="me" className="w-60 h-80" />
    </div>
  );
}

export default App;
