//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

const Skills = () => {
  return (
    <SkillsLayout>
      <h1>Skills</h1>
    </SkillsLayout>
  );
};

const SkillsLayout = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
`;

export default Skills;
