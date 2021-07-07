//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import { experienceVariants } from "../styles/animations";

const Experience = () => {
  return (
    <ExperienceSection
      className="section-light fullheight"
      id="experience"
      variants={experienceVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container-light container-left">
        <div className="gradientLeft" />
        <div className="content">
          <div className="header">
            <h1 className="section-heading heading-dark">Experience</h1>
            <StyledLine height="6px" width="100%" bgColor="#f5f5f5" />
          </div>
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

const ExperienceSection = styled(motion.div)``;

export default Experience;
