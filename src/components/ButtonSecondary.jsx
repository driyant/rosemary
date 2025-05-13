import { Box } from "@chakra-ui/react";
import { Link } from "react-router";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const MotionButtonSecondary = motion(Box);

const ButtonSecondary = (props) => {
  return (
    <>
      <MotionButtonSecondary
        as="button"
        backgroundColor="rgba(233, 233, 233, 0.8)"
        h="60px"
        p="5px"
        textTransform="uppercase"
        w="200px"
        marginBottom={props.marginBottom}
        marginTop={props.marginTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        data-test-id="button-secondary"
      >
        <Link
          to="/menu"
          style={{
            border: "2px solid grey",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexFlow: "row nowrap",
            fontFamily: "'Bebas Neue'",
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
