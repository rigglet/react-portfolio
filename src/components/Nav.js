import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { navVariants } from "../styles/animations";
import { HashLink } from "react-router-hash-link";

const Nav = ({
  homeInView,
  aboutInView,
  portfolioInView,
  skillsInView,
  educationInView,
  experienceInView,
  contactInView,
}) => {
  return (
    <StyledNav
    // variants={navVariants}
    // initial={location.hash === "" ? "initial" : false}
    // animate={location.hash === "" ? "animate" : false}
    >
      <Link to="/splash">
        <h1 className="logo">Neil Rigg</h1>
      </Link>
      <div className="menu">
        <HashLink smooth to="/#home">
          <h1>Home</h1>
          <NavLine
            height="4px"
            bgColor="#313131"
            initial={{
              width: "0%",
            }}
            animate={{
              width:
                //(path === "#home" || path === "") &&
                homeInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
        <HashLink smooth to="/#about">
          <h1>About</h1>
          <NavLine
            height="4px"
            bgColor="#313131"
            initial={{ width: "0%" }}
            animate={{
              width:
                //path === "#about" ||
                aboutInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
        <HashLink smooth to="/#portfolio">
          <h1>Portfolio</h1>
          <NavLine
            height="4px"
            bgColor="#313131"
            initial={{ width: "0%" }}
            animate={{
              width:
                //path === "#portfolio" ||
                portfolioInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
        <HashLink smooth to="/#skills">
          <h1>Skills</h1>
          <NavLine
            height="4px"
            bgColor="#313131"
            initial={{ width: "0%" }}
            animate={{
              width:
                //path === "#skills" ||
                skillsInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
        <HashLink smooth to="/#education">
          <h1>Education</h1>
          <NavLine
            height="4px"
            bgColor="#313131"
            initial={{ width: "0%" }}
            animate={{
              width:
                //path === "#education" ||
                educationInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
        <HashLink smooth to="/#experience">
          <h1>Experience</h1>
          <NavLine
            height="4px"
            bgColor="#313131"
            initial={{ width: "0%" }}
            animate={{
              width:
                //path === "#experience" ||
                experienceInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
        <HashLink smooth to="/#contact">
          <h1>Contact</h1>
          <NavLine
            height="4px"
            bgColor="#313131"
            initial={{ width: "0%" }}
            animate={{
              width:
                //path === "#contact" ||
                contactInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-nav-background);
  border-bottom: solid 2px var(--color-nav-hover);

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

const NavLine = styled(motion.div)`
  border-radius: 1rem;
  background: linear-gradient(
    90deg,
    #1c3b57 0%,
    #65617d 25%,
    #689ed0 50%,
    #c6c6c6 75%,
    ${({ bgColor }) => (bgColor ? bgColor : "#f5f5f5")} 100%
  );
  background: #689ed0;
  height: ${({ height }) => (height ? height : "6px")};
`;

export default Nav;
