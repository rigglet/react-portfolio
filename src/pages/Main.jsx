import { motion } from "framer-motion";
import styled from "styled-components";

import Home from "../sections/home";
import About from "../sections/about";
import Education from "../sections/education";
import Experience from "../sections/experience";
import Contact from "../sections/contact";
import Portfolio from "../sections/portfolio";
import Skills from "../sections/skills";

const Main = ({
  homeRef,
  homeControls,
  aboutRef,
  aboutControls,
  portfolioRef,
  portfolioControls,
  skillsRef,
  skillsControls,
  educationRef,
  educationControls,
  experienceRef,
  experienceControls,
  contactRef,
  contactControls,
  showMenu,
}) => {
  return (
    <MainPage>
      <Home homeRef={homeRef} homeControls={homeControls} showMenu={showMenu} />
      <About
        aboutRef={aboutRef}
        aboutControls={aboutControls}
        showMenu={showMenu}
      />
      <Portfolio
        portfolioRef={portfolioRef}
        portfolioControls={portfolioControls}
        showMenu={showMenu}
      />
      <Skills
        skillsRef={skillsRef}
        skillsControls={skillsControls}
        showMenu={showMenu}
      />
      <Education
        educationRef={educationRef}
        educationControls={educationControls}
        showMenu={showMenu}
      />
      <Experience
        experienceRef={experienceRef}
        experienceControls={experienceControls}
        showMenu={showMenu}
      />
      <Contact
        contactRef={contactRef}
        contactControls={contactControls}
        showMenu={showMenu}
      />
    </MainPage>
  );
};

const MainPage = styled(motion.div)`
  //
`;

export default Main;
