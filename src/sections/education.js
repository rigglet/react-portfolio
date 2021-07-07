//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";

const Education = () => {
  return (
    <EducationSection
      className="section fullheight section-dark"
      id="education"
    >
      <div className="header">
        <h1 className="section-heading light">Education</h1>
        <StyledLine height="6px" width="100%" bgColor="#111111" />
      </div>
    </EducationSection>
  );
};

const EducationSection = styled(motion.div)`
  display: flex;
  //flex-direction: column;
  justify-content: space-around;
`;

export default Education;
