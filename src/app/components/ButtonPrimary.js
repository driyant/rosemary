"use-client";

import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const ButtonPrimary = (props) => {
  return (
    <>
      <Box
        as="button"
        h="60px"
        p="5px"
        textTransform="uppercase"
        width="200px"
        display={{ base: "none", lg: "block" }}
        bgGradient="linear(to-r, #A46E50, #C19372)"
      >
        <Link
          href="/reservation"
          style={{
            border: "2px solid rgba(241, 241, 241, 0.8)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexFlow: "row nowrap",
            letterSpacing: "2px",
            fontWeight: "500",
            color: "#FFFFFF",
          }}
        >
          {props.children}
          <BsArrowRight size={22} />
        </Link>
      </Box>
    </>
  );
};

export default ButtonPrimary;
