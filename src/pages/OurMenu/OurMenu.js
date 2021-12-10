import React from "react";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import SectionService from "../../components/SectionService/SectionService";
import Footer from "../../components/Footer/Footer";
import { Box, Heading, Text, Container, SimpleGrid } from "@chakra-ui/react";
import restaurantImage from "../../images/restaurant-1.jpg";

const OurMenu = () => {
  return (
    <>
      <Nav />
      <Header bgImage={restaurantImage} bgColor="rgba(0, 0, 0, 0.4)">
        <Box
          textAlign="center"
          d="flex"
          flexFlow="column nowrap"
          maxWidth="80%"
        >
          <Heading
            as="h4"
            fontWeight="500"
            fontFamily="var(--Bebas-Neue)"
            mb="1rem"
            letterSpacing="2px"
          >
            Our Menu
          </Heading>
          <Text
            fontSize="1.2rem"
            fontFamily="var(--Libre-Baskerville)"
            alt=" Mickey Gilley"
          >
            If you have good food, people will come to your restaurant.
          </Text>
        </Box>
      </Header>
      <Box as="main" d="flex" justifyContent="center" alignItems="center">
        <Container my={{ base: "2rem", lg: "5rem" }} maxWidth={{ lg: "90%" }}>
          <SimpleGrid
            minChildWidth="120px"
            spacing="10px"
            transition="all 0.5s ease"
          >
            <Box
              textAlign="center"
              h="40px"
              d="flex"
              justifyContent="center"
              alignItems="center"
              fontFamily="var(--Bebas-Neue)"
              fontSize="1.2rem"
              letterSpacing="1.5px"
              cursor="pointer"
              _hover={{
                border: "1px solid #CD916D",
                color: "#CD916D",
                transition: "0.5s ease",
              }}
            >
              ALL
            </Box>
            <Box
              textAlign="center"
              h="40px"
              d="flex"
              justifyContent="center"
              alignItems="center"
              fontFamily="var(--Bebas-Neue)"
              fontSize="1.2rem"
              letterSpacing="1.5px"
              cursor="pointer"
              _hover={{
                border: "1px solid #CD916D",
                color: "#CD916D",
                transition: "0.5s ease",
              }}
            >
              ENTREE
            </Box>
            <Box
              textAlign="center"
              h="40px"
              d="flex"
              justifyContent="center"
              alignItems="center"
              fontFamily="var(--Bebas-Neue)"
              fontSize="1.2rem"
              letterSpacing="1.5px"
              cursor="pointer"
              _hover={{
                border: "1px solid #CD916D",
                color: "#CD916D",
                transition: "0.5s ease",
              }}
            >
              DISHES
            </Box>
            <Box
              textAlign="center"
              h="40px"
              d="flex"
              justifyContent="center"
              alignItems="center"
              fontFamily="var(--Bebas-Neue)"
              fontSize="1.2rem"
              letterSpacing="1.5px"
              cursor="pointer"
              _hover={{
                border: "1px solid #CD916D",
                color: "#CD916D",
                transition: "0.5s ease",
              }}
            >
              APPETIZER
            </Box>
          </SimpleGrid>
          <Menu />
        </Container>
      </Box>
      <SectionService />
      <Footer />
    </>
  );
};

export default OurMenu;
