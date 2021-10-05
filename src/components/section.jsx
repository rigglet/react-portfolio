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
  border: 1px solid red;
  //scroll-snap-align: start;
  //border-top: 7vh solid var(--container-light-border);

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

  //#### RESPONSIVE SECTION ####
  //320px — 480px: Mobile devices
  @media screen and (max-width: 480px) and (orientation: portrait) {
    //height: auto;
    min-height: 0vh;
    max-height: 100vh;
  }
  //320px — 480px: Mobile devices
  @media screen and (max-width: 850px) and (orientation: landscape) {
    height: auto;
  }
  //481px — 768px: iPads, Tablets
  //@media screen and (min-width: 481px) and (max-width: 769px) and (orientation: portrait) {
  //}
  //481px — 768px: iPads, Tablets
  //@media screen and (min-width: 481px) and (max-width: 769px) and (orientation: landscape) {}
  //769px — 1024px: Small screens, laptops
  //@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {}
  //769px — 1024px: Small screens, laptops
  //@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {}
  //1025px — 1200px: Desktops, large screens
  //@media screen and (min-width: 1024px) and (max-width: 1200px) and (orientation: portrait) {
  //}
  //1025px — 1200px: Desktops, large screens
  //@media screen and (min-width: 1024px) and (max-width: 1200px) and (orientation: landscape) {}
  //1201px and more —  Extra large screens, TV
  //@media screen and (min-width: 1201px) and (max-width: 1500px) and (orientation: portrait) {}
  //1201px and more —  Extra large screens, TV
  //@media screen and (min-width: 1201px) and (max-width: 1500px) and (orientation: landscape) {}
  //1501px and more —  Extra large screens, TV
  //@media screen and (min-width: 1501px) and (orientation: portrait) {}
  //1501px and more —  Extra large screens, TV
  //@media screen and (min-width: 1921px) and (orientation: landscape) {
  //}
`;

export default section;
