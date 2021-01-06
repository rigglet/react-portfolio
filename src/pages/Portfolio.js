//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <PortfolioLayout>
      <h1>Portfolio</h1>
    </PortfolioLayout>
  );
};

const PortfolioLayout = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
`;

export default Portfolio;
