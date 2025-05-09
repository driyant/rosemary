import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
