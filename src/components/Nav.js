import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeInOut, navVariants } from "../styles/animations";
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
  //showDropMenu manages state of mobile dropdown menu
  const [showDropMenu, setShowMenu] = useState(false);
  const navMenuButton = {
    initial: {
      rotate: [0, 0, 0, 0],
      transition: {
        duration: 0.75,
      },
    },
    // animate: {
    //   x: "0vw",
    //   transition: {
    //     duration: 0.75,
    //   },
    // },
    animate: {
      //scale: [1, 1, 1, 1, 1],
      rotate: [90, 90, 90, 90],
      //borderRadius: ["20%", "20%", "50%", "50%", "20%"],

      transition: {
        duration: 0.5,
        //delay: 1,
        type: "spring",
        mass: 0.5,
        damping: 5,
        //repeat: Infinity,
      },
    },
    hover: {
      //scale: 1.1,
    },
  };
  return (
    <StyledNav
      variants={navVariants}
      initial="hidden"
      animate={showMenu ? "visible" : false}
    >
      <Link to="/splash">
        <h1 className="logo">Neil Rigg</h1>
      </Link>

      <motion.div className={showDropMenu ? "menu" : "menu mob-menu-hide"}>
        <HashLink
          className="link"
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
              width: homeInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
        <HashLink
          className="link"
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
              width: aboutInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
        <HashLink
          className="link"
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
              width: portfolioInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
        <HashLink
          className="link"
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
              width: skillsInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
        <HashLink
          className="link"
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
              width: educationInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
        <HashLink
          className="link"
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
              width: experienceInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
        <HashLink
          className="link"
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
              width: contactInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
      </motion.div>

      {showDropMenu ? (
        // <motion.div
        //   className="anim-button"
        //   variants={navMenuButton}
        //   initial="initial"
        //   animate={showDropMenu ? "animate" : "initial"}
        //   >
        //   </motion.div>
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
  flex-wrap: wrap;
  transition: all 1s ease-in-out;

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

      will-change: transform;
      transition: transform 0.5s;
      &:hover {
        color: #689ed0;
      }
      &:active {
        transition: transform 100ms ease;
        transform: translateY(1px);
      }
    }
  }

  //#### RESPONSIVE SECTION ####
  //320px — 480px: Mobile PORTRAIT
  @media screen and (max-width: 480px) and (orientation: portrait) {
    position: fixed;
    padding: 0.5rem;
    flex-direction: column;

    .logo {
      padding: 0.5rem 0rem;
      font-size: 1.8rem;
    }

    .menu {
      flex-direction: column;
      flex-wrap: nowrap;
      margin-right: 0rem;
      height: 35vh;
      transition: all 0.3s ease-in-out;
      overflow: hidden;
      h1 {
        will-change: transform;
        transition: transform 0.5s;
        &:hover {
          color: #689ed0;
          transform: scale(1.1);
        }
        &:active {
          transition: transform 100ms ease;
          transform: translateY(1px);
        }
      }
    }
    .menu.mob-menu-hide {
      height: 0vh;
      overflow: hidden;
      //visibility: hidden;

      .link {
        height: 0px;
      }
    }

    .toggle-button {
      display: inline-block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      will-change: transform;
      transition: transform 0.5s;
      &:hover {
        transition: transform 125ms ease;
        //transform: translateY(-2px);
        transform: scale(1.1);
      }
      &:active {
        transition: transform 100ms ease;
        transform: translateY(1px);
      }
    }
  }

  //320px — 480px: Mobile LANDSCAPE
  @media screen and (max-width: 850px) and (orientation: landscape) {
    position: fixed;
    padding: 0.5rem;
    flex-direction: column;

    .logo {
      padding: 0.5rem 0rem;
      font-size: 1.8rem;
    }

    .menu {
      flex-direction: column;
      flex-wrap: nowrap;
      margin-right: 0rem;
      height: 35vh;
      transition: all 0.3s ease-in-out;
      overflow: hidden;
      h1 {
        will-change: transform;
        transition: transform 0.5s;
        &:hover {
          color: #689ed0;
          transform: scale(1.1);
        }
        &:active {
          transition: transform 100ms ease;
          transform: translateY(1px);
        }
      }
    }
    .menu.mob-menu-hide {
      height: 0vh;
      overflow: hidden;
      //visibility: hidden;

      .link {
        height: 0px;
      }
    }

    .toggle-button {
      display: inline-block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      will-change: transform;
      transition: transform 0.5s;
      &:hover {
        transition: transform 125ms ease;
        //transform: translateY(-2px);
        transform: scale(1.1);
      }
      &:active {
        transition: transform 100ms ease;
        transform: translateY(1px);
      }
    }
  }

  //481px — 768px: iPads, Tablets
  @media screen and (min-width: 481px) and (max-width: 769px) and (orientation: portrait) {
    position: fixed;
    padding: 0.5rem;
    flex-direction: column;

    .logo {
      padding: 0.5rem 0rem;
      font-size: 1.8rem;
    }

    .menu {
      flex-direction: column;
      flex-wrap: nowrap;
      margin-right: 0rem;
      height: 35vh;
      transition: all 0.3s ease-in-out;
      overflow: hidden;
      h1 {
        will-change: transform;
        transition: transform 0.5s;
        &:hover {
          color: #689ed0;
          transform: scale(1.1);
        }
        &:active {
          transition: transform 100ms ease;
          transform: translateY(1px);
        }
      }
    }
    .menu.mob-menu-hide {
      height: 0vh;
      overflow: hidden;
      //visibility: hidden;

      .link {
        height: 0px;
      }
    }

    .toggle-button {
      display: inline-block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      will-change: transform;
      transition: transform 0.5s;
      &:hover {
        transition: transform 125ms ease;
        transform: translateY(-2px);
        transform: scale(1.1);
      }
      &:active {
        transition: transform 100ms ease;
        transform: translateY(1px);
      }
    }
  }
  //481px — 768px: iPads, Tablets
  @media screen and (min-width: 481px) and (max-width: 769px) and (orientation: landscape) {
    position: fixed;
    padding: 0.5rem;
    flex-direction: column;

    .logo {
      padding: 0.5rem 0rem;
      font-size: 1.8rem;
    }

    .menu {
      flex-direction: column;
      flex-wrap: nowrap;
      margin-right: 0rem;
      height: 35vh;
      transition: all 0.3s ease-in-out;
      overflow: hidden;
      h1 {
        will-change: transform;
        transition: transform 0.5s;
        &:hover {
          color: #689ed0;
          transform: scale(1.1);
        }
        &:active {
          transition: transform 100ms ease;
          transform: translateY(1px);
        }
      }
    }
    .menu.mob-menu-hide {
      height: 0vh;
      overflow: hidden;

      .link {
        height: 0px;
      }
    }

    .toggle-button {
      display: inline-block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      will-change: transform;
      transition: transform 0.5s;
      &:hover {
        transition: transform 125ms ease;
        transform: translateY(-2px);
        transform: scale(1.1);
      }
      &:active {
        transition: transform 100ms ease;
        transform: translateY(1px);
      }
    }
  }
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
