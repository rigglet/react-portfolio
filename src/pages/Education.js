//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

const Education = () => {
  return (
    <EducationLayout>
      <h1>Education</h1>
    </EducationLayout>
  );
};

const EducationLayout = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
`;

export default Education;
