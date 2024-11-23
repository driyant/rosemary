import "@fontsource/bebas-neue";
import "@fontsource/libre-baskerville";
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: "Bebas Neue, sans-serif",
    heading: "Libre Baskerville, serif",
  },
  textStyles: {
    h4: {
      fontFamily: "Libre Baskerville, serif",
      fontSize: "1.25rem",
    },
  },
});

export default customTheme;
