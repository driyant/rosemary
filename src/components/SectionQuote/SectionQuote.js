import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import restoDining from "../../images/resto-dining.jpg";

const SectionQuote = () => {
  return (
    <>
      <Box
        as="section"
        h="50vh"
        d={{ base: "flex" }}
        flexFlow={{ base: "column" }}
        justifyContent="space-evenly"
        alignItems="flex-start"
        bgImage={restoDining}
        bgSize="cover"
        bgPos="center"
        px={{ base: "1rem" }}
        color="#FFFFFF"
        pos="relative"
      >
        <Box
          bgGradient="linear(135deg, #A46E50, #D7AB72)"
          opacity="85%"
          w="100%"
          h="100%"
          left="0"
          pos="absolute"
        ></Box>
        <Text 
          fontFamily="var(--Libre-Baskerville)" 
          fontSize="1.5rem"
          zIndex="2"
          mx={{ lg: "auto" }}
        >
          If you're a happy person around food, you can be a professional chef.
          It's fueled by passion.
        </Text>
        <Box
          zIndex="2"
          mx={{ lg: "auto" }}
          textAlign={{ lg: "center" }}
        >
          <Heading
            as="h6"
            textTransform="uppercase"
            fontFamily="var(--Montserrat)"
          >
            John Doe
          </Heading>
          <Text textTransform="uppercase">chef executive</Text>
        </Box>
      </Box>
    </>
  );
};

export default SectionQuote;
