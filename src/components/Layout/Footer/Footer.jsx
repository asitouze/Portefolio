import { Link } from "react-router-dom";
import linkedin from "../../../assets/vector/linkedin.svg";
import github from "../../../assets/vector/github.svg";
import mail from "../../../assets/vector/mail.svg";

export default function Footer() {
  return (
    <div className="h-24 text-white flex flex-row justify-between items-center md:ml-5 md:mr-5">
      <p>Aurélien SITOUZE</p>
      <div className="flex flex-row md:gap-20 gap-5 items-center">
        <Link
          to="https://www.linkedin.com/in/aur%C3%A9lien-sitouze-711a5823a/"
          className="md:w-20 md:h-20 w-10 h-10"
        >
          <img
            src={linkedin}
            alt="linkedin"
            className="md:w-20 md:h-20 w-10 h-10"
          />
        </Link>
        <Link
          to="mailto:aurelien.sitouze@gmail.com"
          className="md:w-20 md:h-20 w-10 h-10"
        >
          <img src={mail} alt="mail" className="md:w-20 md:h-20 w-10 h-10" />
        </Link>
        <Link
          to="https://github.com/asitouze"
          className="md:w-20 md:h-20 w-10 h-10"
        >
          <img
            src={github}
            alt="github"
            className="md:w-20 md:h-20 w-10 h-10"
          />
        </Link>
      </div>
      <h1>@2024 my portefolio</h1>
    </div>
  );
}
