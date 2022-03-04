import React from 'react';
import { Box, Text, Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotiontLoading = motion(Text);
const MotionSpinner = motion(Spinner);

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
        <MotionSpinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.400'
          size='xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25}}
        />
        <MotiontLoading 
          marginTop="1rem"
          fontSize="1.5rem"
          color="white"
          marginLeft="1rem"
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5}}
        >
          Loading....
        </MotiontLoading>
      </Box>
    </>
  );
}

export default Lazy;