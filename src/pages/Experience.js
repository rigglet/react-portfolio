//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

const Experience = () => {
  return (
    <ExperienceLayout>
      <h1>Experience</h1>
    </ExperienceLayout>
  );
};

const ExperienceLayout = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
`;

export default Experience;
