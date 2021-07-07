//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";

const Education = () => {
  return (
    <EducationSection className="section-dark fullheight" id="education">
      <div className="container-dark">
        <div className="content">
          <div className="header">
            <h1 className="section-heading heading-light">Education</h1>
            <StyledLine height="6px" width="100%" bgColor="#111111" />
          </div>
        </div>
      </div>
    </EducationSection>
  );
};

const EducationSection = styled(motion.div)`
  .content {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 93vh;
  }
`;

export default Education;
