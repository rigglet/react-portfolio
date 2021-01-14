//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

const Experience = () => {
  return (
    <ExperienceLayout>
      <h1>Experience</h1>
      <h3>Code Challendes</h3>
      <p>Codewars API</p>
      <p>Hacker Rank</p>
      <p>Freecode Camp</p>
      <p>Others - DevEd - Udemy</p>
    </ExperienceLayout>
  );
};

const ExperienceLayout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  //overflow-y: hidden;
`;

export default Experience;
