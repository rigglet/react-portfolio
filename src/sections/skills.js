//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

const Skills = () => {
  return (
    <SkillsSection className="section twothirdsheight" id="skills">
      <div className="container section-light">
        {/* <h1>Skills</h1> */}
        <div className="content">
          <div className="gradientRight" />
          <article>Got the skills to pay the bills</article>
        </div>
      </div>
    </SkillsSection>
  );
};

const SkillsSection = styled(motion.div)`
  background: #111111;
  display: flex;
  justify-content: flex-end;
  z-index: 29;
  .container {
    border: 6px;
    border-color: #689ed0;
    border-style: solid none solid solid;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
    border-radius: 100px 0 0 100px;

    h1 {
      z-index: 10;
      position: absolute;
      font-family: "Lato", sans-serif;
      font-weight: 500;
      font-size: 32pt;
      text-transform: uppercase;
    }
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
