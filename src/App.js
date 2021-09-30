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
    // <div className="app" onScroll={() => scrollFnc()} ref={elementRef}>
    <div className="app">
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch>
          <Route exact path="/splash">
            <Splash />
          </Route>
          <Route exact path="/">
            {/* <Nav
              showMenu={showMenu}
              homeInView={homeInView}
              aboutInView={aboutInView}
              portfolioInView={portfolioInView}
              skillsInView={skillsInView}
              educationInView={educationInView}
              experienceInView={experienceInView}
              contactInView={contactInView}
            /> */}

            <Section>
              <Container full dark>
                <Home
                  homeRef={homeRef}
                  homeControls={homeControls}
                  showMenu={showMenu}
                />
              </Container>
            </Section>
            <Section>
              <Container half light>
                <About
                  aboutRef={aboutRef}
                  aboutControls={aboutControls}
                  showMenu={showMenu}
                />
              </Container>
            </Section>
            <Section left>
              <Container half light left>
                <h1>About</h1>
              </Container>
            </Section>
            <Section>
              <Container light>
                <h1>NEW</h1>
              </Container>
            </Section>

            <Home
              homeRef={homeRef}
              homeControls={homeControls}
              showMenu={showMenu}
            />
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
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
