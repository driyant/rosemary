import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Lazy from "../src/components/Lazy/Lazy";

const Homepage = React.lazy(() => import("../src/pages/Homepage/Homepage"));
const Discover = React.lazy(() => import("../src/pages/Discover/Discover"));
const OurMenu = React.lazy(() => import("../src/pages/OurMenu/OurMenu"));
const Contact = React.lazy(() => import("../src/pages/Contact/Contact"));
const Reservation = React.lazy(() =>
  import("../src/pages/Reservation/Reservation")
);
const Page404 = React.lazy(() => import("../src/pages/Page404/Page404"));

function App() {
  return (
    <>
      <Suspense fallback={<Lazy />}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/menu" element={<OurMenu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
