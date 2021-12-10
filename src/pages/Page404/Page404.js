import React from "react";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import SectionService from "../../components/SectionService/SectionService";
import Footer from "../../components/Footer/Footer";
import { Box, Heading , Text } from "@chakra-ui/react";
import nature from "../../images/nature.jpg"

const Page404 = () => {
  return (
    <>
      <Nav />
      <Header bgImage={nature} bgColor="rgba(0, 0, 0, 0.5)">
        <Box textAlign="center" d="flex" flexFlow="column nowrap" maxWidth="80%">
          <Heading
            as="h4"
            fontWeight="500"
            fontFamily="var(--Bebas-Neue)"
            mb="1rem"
            letterSpacing="2px"
          >
            404
          </Heading>
          <Text
            fontSize="1.2rem"
            fontFamily="var(--Libre-Baskerville)"
            alt=" Mickey Gilley"
          >
            Upps, sorry the page you are looking for is not found! 
          </Text>
        </Box>
      </Header>
      <SectionService />
      <Footer />
    </>
  );
};

export default Page404;
