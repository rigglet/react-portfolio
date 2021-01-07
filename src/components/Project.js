//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

//functions
import { getIcon, getImage } from "../util";

const Project = ({ name, shortDescription, id, mainImg, technologies }) => {
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
      <StyledIcons>
        {technologies.map((tech) => (
          <p>{getIcon(tech)}</p>
        ))}
      </StyledIcons>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.2);
  //margin: 0rem 1rem 3rem 1rem;
  width: 300px;
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
