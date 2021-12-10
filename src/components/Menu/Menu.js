import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Menu = () => {
  return (
    <>
      <Box
        d="flex"
        flexFlow="column"
        width={{ base: "100%", lg: "49%" }}
        px="1rem"
        mt="4rem"
      >
        <Box
          mb="1rem"
          d="flex"
          flexFlow="column nowrap"
          borderBottom="1.5px solid rgba(161, 161, 161, 0.8)"
        >
          <Box
            d="flex"
            flexFlow="row nowrap"
            fontFamily="var(--Libre-Baskerville)"
            fontSize="1.1rem"
          >
            <Box w="80%">
              <Text> Chicken Spring Rolls</Text>
            </Box>
            <Box w="20%" textAlign="right">
              $ 24.5
            </Box>
          </Box>
          <Text
            fontFamily="var(--Poppins)"
            fontSize="0.875rem"
            fontWeight="500"
            textTransform="uppercase"
            lineHeight="auto"
            letterSpacing="1px"
            color="gray"
            my="10px"
          >
            Chicken and vegetables
          </Text>
        </Box>
        <Box
          mb="1rem"
          d="flex"
          flexFlow="column nowrap"
          borderBottom="1.5px solid rgba(161, 161, 161, 0.8)"
        >
          <Box
            d="flex"
            flexFlow="row nowrap"
            fontFamily="var(--Libre-Baskerville)"
            fontSize="1.1rem"
          >
            <Box w="80%">
              <Text> Summer Rolls</Text>
            </Box>
            <Box w="20%" textAlign="right">
              $ 28.5
            </Box>
          </Box>
          <Text
            fontFamily="var(--Poppins)"
            fontSize="0.875rem"
            fontWeight="500"
            textTransform="uppercase"
            lineHeight="auto"
            letterSpacing="1px"
            color="gray"
            my="10px"
          >
            our special menu this summer
          </Text>
        </Box>
        <Box
          mb="1rem"
          d="flex"
          flexFlow="column nowrap"
          borderBottom="1.5px solid rgba(161, 161, 161, 0.8)"
        >
          <Box
            d="flex"
            flexFlow="row nowrap"
            fontFamily="var(--Libre-Baskerville)"
            fontSize="1.1rem"
          >
            <Box w="80%">
              <Text> Spaghetti Bolognaise</Text>
            </Box>
            <Box w="20%" textAlign="right">
              $ 18.5
            </Box>
          </Box>
          <Text
            fontFamily="var(--Poppins)"
            fontSize="0.875rem"
            fontWeight="500"
            textTransform="uppercase"
            lineHeight="auto"
            letterSpacing="1px"
            color="gray"
            my="10px"
          >
            Fresh ingredients with special sauce
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Menu;
