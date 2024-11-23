"use-client";

import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
const MotionButtonSecondary = motion(Box);

const ButtonSecondary = (props) => {
  return (
    <>
      <MotionButtonSecondary
        as="button"
        backgroundColor="rgba(233, 233, 233, 0.8)"
        height="60px"
        p="5px"
        textTransform="uppercase"
        width="200px"
        marginBottom={props.marginBottom}
        marginTop={props.marginTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          href="/menu"
          style={{
            border: "2px solid grey",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexFlow: "row nowrap",
            fontFamily: "var(--Bebas-Neue)",
            letterSpacing: "2px",
            fontWeight: "500",
          }}
        >
          {props.children}
          <BsArrowRight size={22} />
        </Link>
      </MotionButtonSecondary>
    </>
  );
};

export default ButtonSecondary;
