//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

//Link
import { Link } from "react-router-dom";

//functions
import { getIcon, getImage } from "../util";

const Project = ({ name, shortDescription, id, mainImg, technologies }) => {
  const enterDetails = () => {
    document.body.style.overflowY = "hidden";
  };

  return (
    <StyledCard
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/portfolio/${id}`}>
        <img
          src={getImage(mainImg)}
          alt="project"
          onClick={() => enterDetails()}
        />
      </Link>

      <div className="blurb">
        <h4>{name}</h4>
        <p>{shortDescription}</p>
      </div>
      <Line />
      <StyledIcons>
        {technologies.map((tech) => (
          <p key={tech}>{getIcon(tech)}</p>
        ))}
      </StyledIcons>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  justify-self: center;
  box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.2);
  //margin: 0rem 1rem 3rem 1rem;
  max-width: 85%;
  border: 0.05rem white solid;
  text-align: center;
  border-radius: 1rem;
  /* cursor: pointer; */
  overflow: hidden;
  background-color: transparent;

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    object-position: top;
  }
  .blurb {
    h4 {
      color: white;
      padding: 1rem;
      text-decoration: none;
      &:visited,
      &:active {
        text-decoration: none;
      }
    }
  }
  p {
    color: #c6c6c6;
    padding: 1rem;
    text-decoration: none;
    &:visited,
    &:active {
      text-decoration: none;
    }
  }
`;

const Line = styled(motion.div)`
  width: 100%;
  height: 1px;
  background: white;
`;

const StyledIcons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Project;
