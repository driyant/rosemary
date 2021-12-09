import React from "react";
import { Box } from "@chakra-ui/react";

const ButtonSecondary = (props) => {
  return (
    <>
      <Box
        as="button"
        backgroundColor="rgba(233, 233, 233, 0.8)"
        h="60px"
        p="5px"
        textTransform="uppercase"
        w="200px"
      >
        {props.children}
      </Box>
    </>
  );
};

export default ButtonSecondary;
