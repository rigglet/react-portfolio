import Nav from "./components/Nav";
import Splash from "./pages/Splash";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Splash />
      </BrowserRouter>
    </div>
  );
}

export default App;
