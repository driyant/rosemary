import React from 'react';
import { Box, Text, Heading } from "@chakra-ui/react";
import { TiLeaf } from 'react-icons/ti';
import { GiAlarmClock } from 'react-icons/gi';
import { HiOutlineBadgeCheck } from 'react-icons/hi';

const SectionService = () => {
  return (
    <>
      <Box
        d="flex"
        flexFlow={{ base: "column", lg : "row" }}
        justifyContent="center"
        alignItems="center"
        bgColor="#EEEEEE"
        py="4rem"
        px={{ lg: "4rem" }}
      >
        <Box
          d="flex"
          flexFlow="column nowrap"
          justifyContent="center"
          alignItems="center"
          maxWidth="70%"
          fontFamily="var(--Libre-Baskerville)"
          my="1rem"
          h={{lg: "350px"}}
        >
          <HiOutlineBadgeCheck color="#CD916D" size={48}/>
          <Heading as="h6" fontSize={{ base: "1rem", md: "1.5rem" }} my="1rem">High Quality</Heading>
          <Text textAlign="center" fontSize="0.875rem" w={{ lg: "70%"}}>We put only the best quality ingriedients in every dish and plate we serve.</Text>
        </Box>
        <Box
          d="flex"
          flexFlow="column nowrap"
          justifyContent="center"
          alignItems="center"
          maxWidth="70%"
          fontFamily="var(--Libre-Baskerville)"
          my="1rem"
          mx={{ lg: "1rem" }}
          h={{lg: "350px"}}
        >
          <TiLeaf color="#CD916D" size={48}/>
          <Heading as="h6" fontSize={{ base: "1rem", md: "1.5rem" }} my="1rem">Royal Taste</Heading>
          <Text textAlign="center" fontSize="0.875rem" w={{ lg: "70%"}}>We are dedicated to serve only the finest and tastiest food to our customers.</Text>
        </Box>
        <Box
          d="flex"
          flexFlow="column nowrap"
          justifyContent="center"
          alignItems="center"
          maxWidth="70%"
          fontFamily="var(--Libre-Baskerville)"
          my="1rem"
          h={{lg: "350px"}}
        >
          <GiAlarmClock color="#CD916D" size={48}/>
          <Heading as="h6" fontSize={{ base: "1rem", md: "1.5rem" }}  my="1rem">Quick Service</Heading>
          <Text textAlign="center" fontSize="0.875rem" w={{ lg: "70%"}}>Worry not about waiting too long for your dish, We got that covered for you!</Text>
        </Box>
      </Box>
    </>
  );
}

export default SectionService;
