//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <PortfolioLayout>
      <h1>Projects</h1>
      <Projects />
    </PortfolioLayout>
  );
};

const PortfolioLayout = styled(motion.div)`
  padding: 2rem;
  /* position: absolute;
  top: 7%;
  left: 0; */
`;

export default Portfolio;
