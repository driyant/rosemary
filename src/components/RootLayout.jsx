import { Outlet, useLocation } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";
import { useLayoutEffect } from "react";

const RootLayout = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
