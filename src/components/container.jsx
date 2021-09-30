import { motion } from "framer-motion";
import styled from "styled-components";
import Gradient from "./gradient";

function container({
  full = false,
  half = false,
  light = false,
  dark = false,
  left = false,
  right = false,
  children,
}) {
  return (
    <StyledContainer
      full={full}
      half={half}
      light={light}
      dark={dark}
      left={left}
      right={right}
    >
      <Gradient left={left} right={right} />
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: ${({ full, half }) => (full ? "100vh" : half ? "70vh" : "auto")};
  width: ${({ left, right }) => (left || right ? "90vw" : "100vw")};

  background-color: ${({ light, dark }) =>
    dark
      ? "var(--color-dark-background)"
      : light
      ? "var(--color-light-background)"
      : "var(--color-dark-background)"};

  border-top: ${({ dark, light }) =>
    dark ? "0" : light ? "0.3rem solid var(--container-light-border)" : "0"};

  border-bottom: ${({ dark, light }) =>
    dark ? "0" : light ? "0.3rem solid var(--container-light-border)" : "0"};

  border-left: ${({ right }) =>
    right ? "0.3rem solid var(--container-light-border)" : "0"};
  border-right: ${({ left }) =>
    left ? "0.3rem solid var(--container-light-border)" : "0"};

  border-radius: ${({ left, right }) =>
    left ? "0 100px 100px 0;" : right ? "100px 0 0 100px;" : "0"};
`;

export default container;
