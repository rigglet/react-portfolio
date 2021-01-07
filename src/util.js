//icons
import {
  FaGithubSquare,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaReact,
  FaJsSquare,
  FaSass,
  FaGalacticSenate,
} from "react-icons/fa";
import { IconContext } from "react-icons";

//images
import sudoku from "./img/sudoku.png";
import placeholder from "./img/portfolio.png";

export const getIcon = (iconName) => {
  console.log(iconName);
  switch (iconName) {
    case "HTML":
      return (
        <IconContext.Provider value={{ color: "#e44d26" }}>
          <FaHtml5 className="icon" />
        </IconContext.Provider>
      );
    case "CSS":
      return (
        <IconContext.Provider value={{ color: "#264de4" }}>
          <FaCss3Alt className="icon" />
        </IconContext.Provider>
      );
    case "JS":
      return (
        <IconContext.Provider value={{ color: "#f7df1e" }}>
          <FaJsSquare className="icon" />
        </IconContext.Provider>
      );
    case "REACT":
      return (
        <IconContext.Provider value={{ color: "#61dafb" }}>
          <FaReact className="icon" />
        </IconContext.Provider>
      );
    case "SASS":
      return (
        <IconContext.Provider value={{ color: "#c76494" }}>
          <FaSass className="icon" />
        </IconContext.Provider>
      );
    case "GIT":
      return <FaGit className="icon" />;
    default:
      return <FaGalacticSenate className="icon" />;
  }
};

export const getImage = (imageName) => {
  console.log(imageName);
  switch (imageName) {
    case "sudoku.png":
      return sudoku;
    default:
      return placeholder;
  }
};
