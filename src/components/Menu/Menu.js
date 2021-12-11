import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Menu = ({ menus }) => {
  return (
    <>
      <Box
        d="flex"
        flexFlow="column"
        width={{ base: "100%", lg: "100%" }}
        px="1rem"
        mt="4rem"
      >
        {menus.map((menu) => {
          return (
            <Box
              key={menu.id}
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
                  <Text> {menu.name}</Text>
                </Box>
                <Box w="20%" textAlign="right">
                  $ {menu.price}
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
                {menu.description}
              </Text>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Menu;
