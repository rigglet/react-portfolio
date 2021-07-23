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

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/splash">
            <Splash />
          </Route>
          <Route exact path="/">
            <Nav />
            <Home />
            <About />
            <Portfolio />
            <Skills />
            <Education />
            <Experience />
            <Contact />
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
