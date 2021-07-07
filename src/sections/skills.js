//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";

const Skills = () => {
  return (
    <SkillsSection className="section fullheight" id="skills">
      <div className="container section-light">
        <div className="header">
          <h1 className="section-heading dark">Skills</h1>
          <StyledLine height="6px" width="100%" bgColor="#f5f5f5" />
        </div>
        <div className="content">
          <div className="gradientRight" />
          <article>Got the skills to pay the bills</article>
        </div>
      </div>
    </SkillsSection>
  );
};

const SkillsSection = styled(motion.div)`
  //background: #111111;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .container {
    border: 6px;
    border-color: #689ed0;
    border-style: solid none solid solid;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
    border-radius: 100px 0 0 100px;
    padding: 2rem;

    .content {
      position: static;
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: space-evenly;
      article {
        z-index: 100;
        font-style: italic;
        font-weight: 200;
        font-size: 16pt;
        text-align: justify;
        text-indent: 2rem;
        font-variant: normal;
      }
      article:before,
      article:after {
        content: '"';
        font-weight: bold;
        font-size: 32pt;
        font-style: italic;
        font-family: monospace;
      }
    }
  }
`;

export default Skills;
