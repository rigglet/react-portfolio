//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

const Education = () => {
  return (
    <EducationSection
      className="section twothirdsheight section-dark"
      id="education"
    >
      <h1>Education</h1>
    </EducationSection>
  );
};

const EducationSection = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;

export default Education;
