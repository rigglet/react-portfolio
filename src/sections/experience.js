//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import { experienceVariants } from "../styles/animations";

const Experience = () => {
  return (
    <ExperienceSection
      className="section fullheight"
      id="experience"
      variants={experienceVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container section-light">
        <div className="header">
          <h1 className="section-heading">Experience</h1>
          <StyledLine height="6px" width="100%" bgColor="#f5f5f5" />
        </div>
        <div className="content">
          <div className="gradientLeft" />
          <article>Code Challenges</article>
          <p>Codewars API</p>
          <p>Hacker Rank</p>
          <p>Freecode Camp</p>
          <p>Others - DevEd - Udemy</p>
        </div>
      </div>
    </ExperienceSection>
  );
};

const ExperienceSection = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .container {
    border: 6px;
    border-color: #689ed0;
    border-style: solid solid solid none;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    height: 90%;
    border-radius: 0 100px 100px 0;
  }
`;

export default Experience;
