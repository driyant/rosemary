import React from 'react';
import { Box, Text, Spinner } from "@chakra-ui/react";

const Lazy = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexFlow="column"
        h="100vh"
        w="100vw"
        bgColor="rgba(0, 0, 0, 0.65)"
      >
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.400'
          size='xl'
        />
        <Text 
          marginTop="1rem"
          fontSize="1.5rem"
          color="white"
          marginLeft="1rem"
        >
          Loading....
        </Text>
      </Box>
    </>
  );
}

export default Lazy;