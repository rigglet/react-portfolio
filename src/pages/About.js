//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

const About = () => {
  return (
    <AboutLayout>
      <h1>About</h1>
    </AboutLayout>
  );
};

const AboutLayout = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
`;

export default About;
