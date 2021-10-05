import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { navVariants, fadeInOut } from "../styles/animations";
import { HashLink } from "react-router-hash-link";
import Icon from "../components/Icon";

const Nav = ({
  homeInView,
  aboutInView,
  portfolioInView,
  skillsInView,
  educationInView,
  experienceInView,
  contactInView,
  showMenu,
}) => {
  //console.log(showMenu);

  const [showDropMenu, setShowMenu] = useState(false);

  return (
    <StyledNav
    //variants={navVariants}
    //initial="initial"
    //animate={showMenu ? "visible" : "hidden"}
    >
      <Link to="/splash">
        <h1 className="logo">Neil Rigg</h1>
      </Link>

      <motion.div
        className={showDropMenu ? "menu" : "menu mob-menu-hide"}
        // variants={fadeInOut}
        // initial="initial"
        // animate={showDropMenu ? "animate" : false}
      >
        <HashLink
          smooth
          to="/#home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          onClick={() => setShowMenu(false)}
        >
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
        <HashLink
          //smooth
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          to="/#about"
          onClick={() => setShowMenu(false)}
        >
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
        <HashLink
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          to="/#portfolio"
          onClick={() => setShowMenu(false)}
        >
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
        <HashLink
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          to="/#skills"
          onClick={() => setShowMenu(false)}
        >
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
        <HashLink
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          to="/#education"
          onClick={() => setShowMenu(false)}
        >
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
        <HashLink
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          to="/#experience"
          onClick={() => setShowMenu(false)}
        >
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
        <HashLink
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          to="/#contact"
          onClick={() => setShowMenu(false)}
        >
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
      </motion.div>

      {showDropMenu ? (
        <Icon
          icon="CgClose"
          color="white"
          size="30px"
          title="Close"
          className="toggle-button"
          func={setShowMenu}
          showDropMenu={showDropMenu}
        />
      ) : (
        <Icon
          icon="FaHamburger"
          color="white"
          size="30px"
          title="Menu"
          className="toggle-button"
          func={setShowMenu}
          showDropMenu={showDropMenu}
        />
      )}
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  position: fixed;
  //position: ${({ showMenu }) => (showMenu ? "fixed" : "static")};
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  //height: 7vh;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-nav-background);
  border-bottom: solid 2px var(--color-nav-hover);
  transition: ease-out 0.3s all;
  flex-wrap: wrap;

  .toggle-button {
    display: none;
  }

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
    flex-wrap: wrap;

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
    position: fixed;
    padding: 0.5rem;
    height: auto;
    flex-direction: column;

    .logo {
      padding: 0.5rem 0rem;
      font-size: 1.8rem;
    }

    .menu {
      flex-direction: column;
      margin-right: 0rem;
    }
    .menu.mob-menu-hide {
      display: none;
    }

    .toggle-button {
      display: inline-block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
    }
  }

  //320px — 480px: Mobile LANDSCAPE
  @media screen and (max-width: 850px) and (orientation: landscape) {
    position: fixed;
    padding: 0.5rem;
    height: auto;
    flex-direction: column;

    .logo {
      padding: 0.5rem 0rem;
      font-size: 1.8rem;
    }

    .menu {
      flex-direction: column;
      margin-right: 0rem;
    }
    .menu.mob-menu-hide {
      display: none;
    }

    .toggle-button {
      display: inline-block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
    }
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
