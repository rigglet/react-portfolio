import { motion } from "framer-motion";
import styled from "styled-components";

function section({
  id,
  full = false,
  half = false,
  light = false,
  dark = false,
  left = false,
  right = false,
  children,
}) {
  return (
    <StyledSection
      id={id}
      full={full}
      half={half}
      light={light}
      dark={dark}
      left={left}
      right={right}
    >
      {children}
    </StyledSection>
  );
}

const StyledSection = styled(motion.section)`
  //border: 1px solid red;
  //padding: 2rem;
  background-color: var(--color-dark-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ left, right }) =>
    left ? "flex-start" : right ? "flex-end" : "center"};

  width: "100vw";
  /* height: ${({ full, half }) => (full ? "100vh" : half ? "50vh" : "auto")};
  min-height: ${({ full, half }) =>
    full ? "100vh" : half ? "100vh" : "100vh"}; */
  height: auto;
  min-height: 100vh;
`;

export default section;
