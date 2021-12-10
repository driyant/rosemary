import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage/Homepage";
import Discover from "../src/pages/Discover/Discover";
import OurMenu from "../src/pages/OurMenu/OurMenu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/discover" element={ <Discover /> } />
        <Route path="/menu" element={ <OurMenu /> } />
      </Routes>
    </>
  );
}

export default App;
