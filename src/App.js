import { useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Splash from "./pages/Splash";
import Nav from "./components/Nav";
import Home from "./sections/home";
import About from "./sections/about";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Contact from "./sections/contact";
import Portfolio from "./sections/portfolio";
import Skills from "./sections/skills";
import { Switch, Route } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function App() {
  const location = useLocation();
  const options = {
    threshold: 0.3,
    triggerOnce: false,
  };
  const [homeRef, homeInView, homeEntry] = useInView(options);
  const [aboutRef, aboutInView, aboutEntry] = useInView(options);
  const [portfolioRef, portfolioInView, portfolioEntry] = useInView(options);
  const [skillsRef, skillsInView, skillsEntry] = useInView(options);
  const [educationRef, educationInView, educationEntry] = useInView(options);
  const [experienceRef, experienceInView, experienceEntry] = useInView(options);
  const [contactRef, contactInView, contactEntry] = useInView(options);

  //console.log(entry);
  return (
    <div className="app">
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.key}>
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
            <Home homeRef={homeRef} />
            <About aboutRef={aboutRef} />
            <Portfolio portfolioRef={portfolioRef} />
            <Skills skillsRef={skillsRef} />
            <Education educationRef={educationRef} />
            <Experience experienceRef={experienceRef} />
            <Contact contactRef={contactRef} />
          </Route>
          <Route path="/skills"></Route>
          <Route path="/portfolio"></Route>
          <Route path="/about"></Route>
          <Route path="/education"></Route>
          <Route path="/experience"></Route>
          <Route path="/contact"></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
