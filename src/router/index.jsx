import { createBrowserRouter } from "react-router";
import Homepage from "@/pages/Homepage";
import Discover from "@/pages/Discover";
import RootLayout from "@/components/RootLayout";
import OurMenu from "@/pages/OurMenu";
import Contact from "@/pages/Contact";
import Reservation from "@/pages/Reservation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/discover",
        element: <Discover />,
      },
      {
        path: "/menu",
        element: <OurMenu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
    ],
  },
]);

export default router;
