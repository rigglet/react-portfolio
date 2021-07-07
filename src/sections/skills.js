import { useState, useEffect } from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";

const Skills = () => {
  // useEffect(() => {
  //   const
  // }, [])

  return (
    <SkillsSection className="section-light fullheight" id="skills">
      <div className="container container-light container-right">
        <div className="gradientRight" />
        <div className="content">
          <div className="header">
            <h1 className="section-heading heading-dark">Skills</h1>
            <StyledLine height="6px" width="100%" bgColor="#f5f5f5" />
          </div>

          <section>Got the skills to pay the bills</section>
        </div>
      </div>
    </SkillsSection>
  );
};

const SkillsSection = styled(motion.div)`
  //edit justify content if switching sides
  justify-content: flex-end;

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    row-gap: 1rem;
    z-index: 1;
    border: 1px solid red;

    section {
      /* font-style: italic;
      font-weight: 200;
      font-size: 16pt;
      text-align: justify;
      text-indent: 2rem;
      font-variant: normal; */
      display: flex;
    }

    section:before,
    section:after {
      content: '"';
      font-weight: bold;
      font-size: 32pt;
      font-style: italic;
      font-family: monospace;
    }
  }
`;

export default Skills;
