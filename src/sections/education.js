//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
//import Loader from "../components/Loader";
import Icon from "../components/Icon";

const Education = ({ educationRef }) => {
  return (
    <EducationSection className="section-dark fullheight" id="education">
      <div className="container-dark" ref={educationRef}>
        <div className="inner-container">
          <div className="section-header">
            <div className="section-title-content">
              <Icon
                icon="IoSchool"
                size="30px"
                color="whitesmoke"
                title="Education icon"
              />
              <h1 className="section-heading heading-light">Education</h1>
            </div>
            <StyledLine height="6px" width="100%" bgColor="#111111" />
          </div>

          <div className="content">
            <div className="certificate">
              <h4>GCSE</h4>
              <h3>IT</h3>
              <p>Overview of content</p>
            </div>

            <div className="certificate">
              <h4>A-level</h4>
              <h3>A-level computing</h3>
              <p>Overview of content</p>
            </div>

            <div className="certificate">
              <h4>Degree</h4>
              <h3>Computer Systems and Networks (BSc)</h3>
              <p>Overview of content</p>
              <p>Software systems design</p>
              <p>Programming (C++)</p>
              <p>OOP Programming (Java)</p>
              <p>Computer architecture</p>
              <p>Computer science fundamentals</p>
              <p>Web services using SOAP</p>
              <p>Web development (.NET / PHP)</p>
              <p>Networks</p>
            </div>

            <div className="certificate">
              <h4>Online courses?</h4>
              <p>Overview of content</p>
              <p>timeline here too?</p>
            </div>
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
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      width: 100%;
    }
  }
`;

export default Education;
