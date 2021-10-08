import Section from "./components/section";
import Container from "./components/container";
import Home from "./sections/home";
import About from "./sections/about";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Contact from "./sections/contact";
import Portfolio from "./sections/portfolio";
import Skills from "./sections/skills";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Splash from "./pages/Splash";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";
import useScroll from "./components/useScroll";
//import useHideNav from "./components/useHideNav";

function App() {
  const [homeRef, homeControls, homeInView] = useScroll();
  const [aboutRef, aboutControls, aboutInView] = useScroll();
  const [portfolioRef, portfolioControls, portfolioInView] = useScroll();
  const [skillsRef, skillsControls, skillsInView] = useScroll();
  const [educationRef, educationControls, educationInView] = useScroll();
  const [experienceRef, experienceControls, experienceInView] = useScroll();
  const [contactRef, contactControls, contactInView] = useScroll();

  //const [elementRef, scrollFnc, hideNav] = useHideNav();

  const elementRef = useRef();
  const [scrollTop, setScrollTop] = useState(window.pageYOffset);
  const [showMenu, setShowMenu] = useState(true);

  //console.log(window.pageYOffset);

  const scrollFnc = () => {
    //const scrollHeight = appRef.current?.scrollHeight;
    const st = elementRef?.current?.scrollTop;
    st > scrollTop ? setShowMenu(true) : setShowMenu(false);
    setScrollTop((prev) => {
      if (prev !== st) return st;
    });
    //console.log(st, scrollTop, showMenu);
    //console.log(showMenu);
  };

  useEffect(() => {
    scrollFnc();
  }, []);

  return (
    <div
      className="app"
      //onScroll={() => scrollFnc()}
      ref={elementRef}
    >
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch>
          <Route exact path="/splash">
            <Splash />
          </Route>
          <Route exact path="/">
            <Nav
              showMenu={showMenu}
              homeInView={homeInView}
              aboutInView={aboutInView}
              portfolioInView={portfolioInView}
              skillsInView={skillsInView}
              educationInView={educationInView}
              experienceInView={experienceInView}
              contactInView={contactInView}
            />

            <Section id="home" snap="start">
              <Container full dark>
                <Home
                  homeRef={homeRef}
                  homeControls={homeControls}
                  showMenu={showMenu}
                />
              </Container>
            </Section>
            <Section id="about" snap="start">
              <Container half light>
                <About
                  aboutRef={aboutRef}
                  aboutControls={aboutControls}
                  showMenu={showMenu}
                />
              </Container>
            </Section>
            {/*
            <Section id="portfolio" snap="start">
              <Container dark>
                <Portfolio
                  portfolioRef={portfolioRef}
                  portfolioControls={portfolioControls}
                  showMenu={showMenu}
                />
              </Container>
            </Section>
            <Section id="skills" snap="start">
              <Container full light>
                <Skills
                  skillsRef={skillsRef}
                  skillsControls={skillsControls}
                  showMenu={showMenu}
                />
              </Container>
            </Section>
            <Section id="education" snap="start">
              <Container full dark>
                <Education
                  educationRef={educationRef}
                  educationControls={educationControls}
                  showMenu={showMenu}
                />
              </Container>
            </Section>
            <Section id="experience" snap="start">
              <Container full light>
                <Experience
                  experienceRef={experienceRef}
                  experienceControls={experienceControls}
                  showMenu={showMenu}
                />
              </Container>
            </Section>
            <Section id="contact" snap="start">
              <Container full dark>
                <Contact
                  contactRef={contactRef}
                  contactControls={contactControls}
                  showMenu={showMenu}
                />
              </Container>
            </Section> */}
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
