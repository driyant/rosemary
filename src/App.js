import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage/Homepage";
import Discover from "../src/pages/Discover/Discover";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/discover" element={ <Discover /> } />
      </Routes>
    </>
  );
}

export default App;
