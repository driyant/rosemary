import React from 'react';
import Nav from "../../components/Nav/Nav";
import {
  Box, 
  Heading,
  Text,
  Image
} from "@chakra-ui/react";
import ButtonSecondary from "../../components/ButtonSecondary/ButtonSecondary";
import SectionQuote from '../../components/SectionQuote/SectionQuote';
import steak from "../../images/steak.jpg";
import restaurantChef from "../../images/restaurant_chef.jpg";
import SectionTodayMenu from '../../components/SectionTodayMenu/SectionTodayMenu';
import SectionService from '../../components/SectionService/SectionService';
import Maps from "../../components/Maps/Maps";
import Footer from "../../components/Footer/Footer";

const Discover = () => {
  return (
    <>
      <Nav />
      <Box 
        as="header"
        d={{ 
          base: "flex"
         }}
        flexFlow={{
          base: "column nowrap",
          lg: "row-reverse nowrap"
        }}
        justifyContent="center"
        alignItems="center"
        mt="150px"
      >
        {/* Box Right Imagery */}
        <Box
          w={{base : "100%", lg : "49%"}}
        >
          <Box>
            <Image 
              src={restaurantChef} 
              alt="Restaurant Chef"
              objectFit="center"
              objectPosition="cover"
              ml="5rem"
              mt="1rem"
            />
          </Box>
          <Box
            pos="relative"
            left="0.2rem"
            bottom={{ base: "50px", md: "130px", lg: "150px" }}
            border="6px solid #FFFFFF"
            w={{ base: "240px", md: "350px", lg: "400px" }}
          >
            <Image 
              src={steak} 
              alt="Steak Rosemary"
              objectFit="center"
              objectPosition="cover"
              w="100%"
              h={{ base: "173px", md: "250px", lg : "250px" }}
            />
          </Box>
        </Box>
        {/* Box Left  */}
        <Box
          d="flex"
          flexFlow="column"
          width={{base : "100%", lg : "49%"}}
          px="1rem"
        >
          <Heading
            color="#CD916D"
            fontFamily="var(--Bebas-Neue)"
            letterSpacing="1.5px"
            fontWeight="500"
          >
            rosemary restaurant
          </Heading>
          <Text
            color="#000000"
            fontFamily="var(--Libre-Baskerville)"
            fontSize={{ base: "1.5rem" }}
            my="1rem"
          >
            "A good restaurant is like a vacation; it transports you, and it
            becomes a lot more than just about the food"
          </Text>
          <Text
            fontFamily="var(--Libre-Baskerville)"
            fontSize="1rem"
            mb="1rem"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <ButtonSecondary marginBottom="2rem">
            check the menu
          </ButtonSecondary>
        </Box>
      </Box>
      <SectionQuote />
      <SectionTodayMenu />
      <SectionService />
      <Maps />
      <Footer />
    </>
  );
}

export default Discover;
