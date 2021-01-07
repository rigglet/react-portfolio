//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//components
import Project from "./Project";
//project data
import { projectData } from "../Data";
//images
//import sudoku from "../img/sudoku.png";

const Projects = () => {
  const data = projectData();
  console.log(data);
  return (
    <StyledProjects>
      {/* <StyledCard>
        <div className="preview">
          <img src={sudoku} alt="project" />
        </div>
        <div className="blurb">
          <h3>{data[0].projectName}</h3>
          <p>{data[0].projectDescription}</p>
        </div>
        <Line />
        <p>HTML</p>
        <p>HTML</p>
      </StyledCard>
      <StyledCard>
        <div className="preview">
          <img src={sudoku} alt="project" />
        </div>
        <div className="blurb">
          <h3>{data[0].projectName}</h3>
          <p>{data[0].projectDescription}</p>
        </div>
        <Line />
        <p>HTML</p>
        <p>HTML</p>
      </StyledCard>
      <StyledCard>
        <div className="preview">
          <img src={sudoku} alt="project" />
        </div>
        <div className="blurb">
          <h3>{data[0].projectName}</h3>
          <p>{data[0].projectDescription}</p>
        </div>
        <Line />
        <p>HTML</p>
        <p>HTML</p>
      </StyledCard>
      <StyledCard>
        <div className="preview">
          <img src={sudoku} alt="project" />
        </div>
        <div className="blurb">
          <h3>{data[0].projectName}</h3>
          <p>{data[0].projectDescription}</p>
        </div>
        <Line />
        <p>HTML</p>
        <p>HTML</p>
      </StyledCard>
      <StyledCard>
        <div className="preview">
          <img src={sudoku} alt="project" />
        </div>
        <div className="blurb">
          <h3>{data[0].projectName}</h3>
          <p>{data[0].projectDescription}</p>
        </div>
        <Line />
        <p>HTML</p>
        <p>HTML</p>
      </StyledCard> */}

      {data.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          name={project.projectName}
          shortDescription={project.shortDescription}
          technologies={project.technologies}
          mainImg={project.mainImg}
        />
      ))}
    </StyledProjects>
  );
};

const StyledProjects = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const StyledCard = styled(motion.div)`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 3rem;
  min-width: 15vw;
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
    height: 20vh;
    object-fit: cover;
    object-position: top;
  }
  h3 {
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
export default Projects;
