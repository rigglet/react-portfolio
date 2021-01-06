import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to="/">
        <h1 className="logo">Neil Rigg</h1>
      </StyledLink>
      <StyledMenu>
        <StyledLink to="/about">
          <h1>About</h1>
          <StyledLine />
        </StyledLink>
        <StyledLink to="/portfolio">
          <h1>Portfolio</h1>
        </StyledLink>
        <StyledLink to="/skills">
          <h1>Skills</h1>
        </StyledLink>
        <StyledLink to="/education">
          <h1>Education</h1>
        </StyledLink>
        <StyledLink to="/experience">
          <h1>Experience</h1>
        </StyledLink>
        <StyledLink to="/contact">
          <h1>Contact</h1>
        </StyledLink>
      </StyledMenu>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  .logo {
    padding: 1rem 3rem;
    font-family: "Lobster", cursive;
    color: white;
    font-size: 2rem;
    font-weight: lighter;
  }
  display: flex;
  justify-content: space-between;
  background-color: #666666;
  min-height: 10vh;
  border-bottom: solid 0.25rem #689ed0;
`;

const StyledMenu = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  h1 {
    padding: 1.5rem 3rem 0.5rem 3rem;
    font-weight: lighter;
    font-family: "Inter", sans-serif;
    font-size: 1.2rem;
  }
`;

const StyledLine = styled.div`
  background: #689ed0;
  height: 3px;
  width: 90%;
`;

export default Nav;
