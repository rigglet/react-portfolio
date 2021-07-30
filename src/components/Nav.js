import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import { Link, useLocation } from "react-router-dom";
import { navVariants } from "../styles/animations";
import { HashLink } from "react-router-hash-link";
import { useInView } from "react-intersection-observer";

const Nav = () => {
  const location = useLocation();
  //console.log(location);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  //console.log(entry);
  return (
    <StyledNav
      variants={navVariants}
      initial={location.hash === "" ? "initial" : false}
      animate={location.hash === "" ? "animate" : false}
      ref={ref}
    >
      <h2>{`Header inside viewport ${inView}.`}</h2>
      <Link to="/splash">
        <h1 className="logo">Neil Rigg</h1>
      </Link>
      <div className="menu">
        <HashLink smooth to="/#home">
          <h1>Home</h1>
          {(location.hash === "#home" || location.hash === "") && (
            <StyledLine height="4px" width="100%" bgColor="#313131" />
          )}
        </HashLink>
        <HashLink smooth to="/#about">
          <h1>About</h1>
          {location.hash === "#about" && (
            <StyledLine height="4px" width="100%" bgColor="#313131" />
          )}
        </HashLink>
        <HashLink smooth to="/#portfolio">
          <h1>Portfolio</h1>
          {location.hash === "#portfolio" && (
            <StyledLine height="4px" width="100%" bgColor="#313131" />
          )}
        </HashLink>
        <HashLink smooth to="/#skills">
          <h1>Skills</h1>
          {location.hash === "#skills" && (
            <StyledLine height="4px" width="100%" bgColor="#313131" />
          )}
        </HashLink>
        <HashLink smooth to="/#education">
          <h1>Education</h1>
          {location.hash === "#education" && (
            <StyledLine height="4px" width="100%" bgColor="#313131" />
          )}
        </HashLink>
        <HashLink smooth to="/#experience">
          <h1>Experience</h1>
          {location.hash === "#experience" && (
            <StyledLine height="4px" width="100%" bgColor="#313131" />
          )}
        </HashLink>
        <HashLink smooth to="/#contact">
          <h1>Contact</h1>
          {location.hash === "#contact" && (
            <StyledLine height="4px" width="100%" bgColor="#313131" />
          )}
        </HashLink>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  position: fixed;
  z-index: 11;
  width: 100vw;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-nav-background);
  border-bottom: solid 1px var(--color-nav-hover);

  a {
    text-decoration: none;
  }

  .logo {
    padding: 0.5rem 2rem;
    font-family: "Lobster", cursive;
    color: white;
    font-size: 2rem;
    font-weight: lighter;
    text-decoration: none;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    margin-right: 2rem;

    h1 {
      color: whitesmoke;
      //padding: 0.75rem 3rem 0.25rem 1.5rem;
      padding: 0.15rem 1rem;
      font-weight: lighter;
      font-family: "Inter", sans-serif;
      font-size: 1.2rem;
      font-variant-caps: all-petite-caps;
      text-align: center;

      &:hover {
        color: #689ed0;
      }
    }
  }

  //#### RESPONSIVE SECTION ####
  //320px — 480px: Mobile PORTRAIT
  @media screen and (max-width: 480px) and (orientation: portrait) {
    position: static;
    padding: 0.5rem;
    display: flex;
    width: 100vw;
  }

  //320px — 480px: Mobile LANDSCAPE
  @media screen and (max-width: 850px) and (orientation: landscape) {
    position: static;
    padding: 0.5rem;
    display: flex;
    width: 100vw;
  }

  //481px — 768px: iPads, Tablets
  @media screen and (min-width: 481px) and (max-width: 769px) and (orientation: portrait) {
  }
  //481px — 768px: iPads, Tablets
  //@media screen and (min-width: 481px) and (max-width: 769px) and (orientation: landscape) {}
  //769px — 1024px: Small screens, laptops
  //@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {}
  //769px — 1024px: Small screens, laptops
  //@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {}
  //1025px — 1200px: Desktops, large screens
  @media screen and (min-width: 1024px) and (max-width: 1200px) and (orientation: portrait) {
  }
  //1025px — 1200px: Desktops, large screens
  //@media screen and (min-width: 1024px) and (max-width: 1200px) and (orientation: landscape) {}
  //1201px and more —  Extra large screens, TV
  //@media screen and (min-width: 1201px) and (max-width: 1500px) and (orientation: portrait) {}
  //1201px and more —  Extra large screens, TV
  //@media screen and (min-width: 1201px) and (max-width: 1500px) and (orientation: landscape) {}
  //1501px and more —  Extra large screens, TV
  //@media screen and (min-width: 1501px) and (orientation: portrait) {}
  //1501px and more —  Extra large screens, TV
  @media screen and (min-width: 1921px) and (orientation: landscape) {
  }
`;

export default Nav;
