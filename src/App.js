import { AnimatePresence } from "framer-motion";
import Splash from "./pages/Splash";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import { Switch, Route } from "react-router-dom";
import useScroll from "./components/useScroll";

function App() {
  const [homeRef, homeControls, homeInView] = useScroll();
  const [aboutRef, aboutControls, aboutInView] = useScroll();
  const [portfolioRef, portfolioControls, portfolioInView] = useScroll();
  const [skillsRef, skillsControls, skillsInView] = useScroll();
  const [educationRef, educationControls, educationInView] = useScroll();
  const [experienceRef, experienceControls, experienceInView] = useScroll();
  const [contactRef, contactControls, contactInView] = useScroll();

  return (
    <div className="app">
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch>
          <Route exact path="/splash">
            <Splash />
          </Route>
          <Route exact path="/">
            <Nav
              homeInView={homeInView}
              aboutInView={aboutInView}
              portfolioInView={portfolioInView}
              skillsInView={skillsInView}
              educationInView={educationInView}
              experienceInView={experienceInView}
              contactInView={contactInView}
            />
            <Main
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
