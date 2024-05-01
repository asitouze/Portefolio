import { useState } from "react";
import projImg1 from "../../assets/projet/WildMovie.png";
import projImg2 from "../../assets/projet/ReactionFlix.png";
import projImg3 from "../../assets/projet/TheLab.png";

export default function Projet() {
  const [hoveredAtelier, setHoveredAtelier] = useState(null);
  const projet = [
    {
      id: 1,
      title: "Wild Movie",
      description: "Projet 1 HTML/CSS",
      imgUrl: projImg1,
    },
    {
      id: 2,
      title: "Reaction Flix",
      description: "Projet 2 React front",
      imgUrl: projImg2,
    },
    {
      id: 3,
      title: "The Lab",
      description: "Projet 3 React fullStack",
      imgUrl: projImg3,
    },
  ];

  const handleMouseEnter = (projets) => {
    setHoveredAtelier(projets.id);
  };

  const handleMouseLeave = () => {
    setHoveredAtelier(null);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
      <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Projet
        </p>
        <p className="py-6">Projet réalisé en tant que développeur Web.</p>
      </div>

      <div className="w-full flex flex-row justify-around flex-wrap gap-5 ">
        {projet.map((projets) => (
          <div
            key={projets.id}
            className={`relative flex flex-row flex-wrap justify-center items-center shadow-md shadow-white duration-500 py-2 rounded-lg group`}
            onMouseEnter={() => handleMouseEnter(projets)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={projets.imgUrl}
              alt="html"
              className={`w-[450px] h-auto mx-auto rounded-lg transition duration-500 transform ${
                hoveredAtelier === projets.id ? "filter brightness-[0.25]" : ""
              }`}
            />
            {hoveredAtelier === projets.id && (
              <div className="absolute">
                <p className="text-3xl font-bold">{projets.title}</p>
                <p className="text-2xl">{projets.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
