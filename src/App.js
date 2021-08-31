import { useRef, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Splash from "./pages/Splash";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import { Switch, Route } from "react-router-dom";
import useScroll from "./components/useScroll";
import useHideNav from "./components/useHideNav";

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
    <div className="app" onScroll={() => scrollFnc()} ref={elementRef}>
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
            <Main
              showMenu={showMenu}
              homeRef={homeRef}
              homeControls={homeControls}
              aboutRef={aboutRef}
              aboutControls={aboutControls}
              portfolioRef={portfolioRef}
              portfolioControls={portfolioControls}
              skillsRef={skillsRef}
              skillsControls={skillsControls}
              educationRef={educationRef}
              educationControls={educationControls}
              experienceRef={experienceRef}
              experienceControls={experienceControls}
              contactRef={contactRef}
              contactControls={contactControls}
            ></Main>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
