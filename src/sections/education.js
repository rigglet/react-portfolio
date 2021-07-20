//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import Loader from "../components/Loader";

const Education = () => {
  return (
    <EducationSection className="section-dark fullheight" id="education">
      <div className="container-dark">
        <div className="inner-container">
          <div className="header">
            <h1 className="section-heading heading-light">Education</h1>
            <StyledLine height="6px" width="100%" bgColor="#111111" />
          </div>
          <div className="content">
            <Loader />
          </div>
        </div>
      </div>
    </EducationSection>
  );
};

const EducationSection = styled(motion.div)`
  .inner-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 93vh;

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }
`;

export default Education;
