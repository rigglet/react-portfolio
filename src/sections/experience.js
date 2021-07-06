//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import { experienceVariants } from "../styles/animations";

const Experience = () => {
  return (
    <ExperienceSection
      className="section twothirdsheight"
      id="experience"
      variants={experienceVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container section-light">
        {/* <h1>Experience</h1> */}
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
  background: #111111;
  display: flex;
  justify-content: flex-start;

  .container {
    border: 6px;
    border-color: #689ed0;
    border-style: solid solid solid none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 100%;
    border-radius: 0 100px 100px 0;
`;

export default Experience;
