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
}) => {
  return (
    <MainPage>
      <Home homeRef={homeRef} homeControls={homeControls} />
      <About aboutRef={aboutRef} aboutControls={aboutControls} />
      <Portfolio
        portfolioRef={portfolioRef}
        portfolioControls={portfolioControls}
      />
      <Skills skillsRef={skillsRef} skillsControls={skillsControls} />
      <Education
        educationRef={educationRef}
        educationControls={educationControls}
      />
      <Experience
        experienceRef={experienceRef}
        experienceControls={experienceControls}
      />
      <Contact contactRef={contactRef} contactControls={contactControls} />
    </MainPage>
  );
};

const MainPage = styled(motion.div)`
  //
`;

export default Main;
