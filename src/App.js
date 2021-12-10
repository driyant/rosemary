import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage/Homepage";
import Discover from "../src/pages/Discover/Discover";
import OurMenu from "../src/pages/OurMenu/OurMenu";
import Contact from "../src/pages/Contact/Contact";
import Page404 from "../src/pages/Page404/Page404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/discover" element={ <Discover /> } />
        <Route path="/menu" element={ <OurMenu /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/*" element={ <Page404 /> } />
      </Routes>
    </>
  );
}

export default App;
