import React from "react";
import { Box } from "@chakra-ui/react";

const Header = (props) => {
  return (
    <>
      <Box
        mt="150px"
        d="flex"
        justifyContent="center"
        alignItems="center"
        color="#FFFFFF"
        bgImage={props.bgImage}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        bgBlendMode="darken"
        bgColor={props.bgColor}
        h="50vh"
      >
        {props.children}
      </Box>
    </>
  );
};

export default Header;
