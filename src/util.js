//icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaSass,
  FaGalacticSenate,
  FaNode,
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaRegStar,
  FaWindowClose,
  FaBootstrap,
} from "react-icons/fa";

import { IconContext } from "react-icons";

export const getIcon = (iconName) => {
  //console.log(iconName);
  switch (iconName) {
    case "HTML":
      return (
        <IconContext.Provider value={{ color: "#e44d26" }}>
          <FaHtml5 className="icon" />
        </IconContext.Provider>
      );
    case "NODE":
      return (
        <IconContext.Provider value={{ color: "#026e00" }}>
          <FaNode className="icon" />
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
    case "EXPRESS":
      return (
        <IconContext.Provider value={{ color: "#61dafb" }}>
          <FaSass className="icon" />
        </IconContext.Provider>
      );
    case "MONGODB":
      return (
        <IconContext.Provider value={{ color: "#13aa52" }}>
          <FaSass className="icon" />
        </IconContext.Provider>
      );
    case "BOOTSTRAP":
      return (
        <IconContext.Provider value={{ color: "#7952b3" }}>
          <FaBootstrap className="icon" />
        </IconContext.Provider>
      );
    case "GIT":
      return <FaGithub className="icon" />;
    case "WEB":
      return <FaExternalLinkAlt className="icon" />;
    case "CLOSE":
      return <FaWindowClose className="close" />;
    case "STAR":
      return (
        <IconContext.Provider value={{ color: "#fffb00" }}>
          <FaStar className="icon" />
        </IconContext.Provider>
      );
    case "ESTAR":
      return (
        <IconContext.Provider
          value={{
            color: "rgba(256, 256, 256, 0.5)",
          }}
        >
          <FaRegStar className="icon" />
        </IconContext.Provider>
      );
    default:
      return <FaGalacticSenate className="icon" />;
  }
};
