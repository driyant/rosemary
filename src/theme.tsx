import { extendTheme } from "@chakra-ui/react";
import "@fontsource/bebas-neue";
import "@fontsource/libre-baskerville";
import "@fontsource-variable/montserrat";
import "@fontsource/poppins";

const theme = extendTheme({
  fonts: {
    heading: '"Libre Baskerville", serif',
    body: '"Bebas Neue", sans-serif',
    components: {
      Text: {
        baseStyle: {
          fontFamily: '"Libre Baskerville", serif',
        },
      },
    },
  },
});

export default theme;