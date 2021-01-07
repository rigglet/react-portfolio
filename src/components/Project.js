//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//images
import sudoku from "../img/sudoku.png";
import placeholder from "../img/portfolio.png";
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

const Project = ({ name, shortDescription, id, mainImg, technologies }) => {
  const getImage = (imageName) => {
    console.log(imageName);
    switch (imageName) {
      case "sudoku.png":
        return sudoku;
      default:
        return placeholder;
    }
  };

  const getIcon = (iconName) => {
    console.log(iconName);
    switch (iconName) {
      case "HTML":
        return <FaHtml5 className="icon" />;
      case "CSS":
        return <FaCss3Alt className="icon" />;
      case "JS":
        return <FaJsSquare className="icon" />;
      case "REACT":
        return <FaReact className="icon" />;
      case "SASS":
        return <FaSass className="icon" />;
      case "GIT":
        return <FaGit className="icon" />;
      default:
        return <FaGalacticSenate className="icon" />;
    }
  };

  return (
    <StyledCard>
      <div className="preview">
        <img src={getImage(mainImg)} alt="project" />
      </div>
      <div className="blurb">
        <h4>{name}</h4>
        <p>{shortDescription}</p>
      </div>
      <Line />
      {technologies.map((tech) => (
        <p>{getIcon(tech)}</p>
      ))}
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  margin: 0rem 1rem 3rem 1rem;
  width: 20vw;
  height: auto;
  min-width: 20vw;
  max-width: 20vw;
  min-height: 30vh;
  border: 0.05rem white solid;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  background-color: transparent;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    object-position: top;
  }
  h4 {
    color: white;
    padding: 1rem;
  }
  p {
    color: #c6c6c6;
    padding: 1rem;
  }
  .icon {
    color: white;
    padding: 0.25rem;
    height: 50px;
    width: 50px;
  }
`;

const Line = styled(motion.div)`
  width: 100%;
  height: 1px;
  background: white;
`;

export default Project;
