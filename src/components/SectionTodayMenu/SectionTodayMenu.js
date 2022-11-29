import React from "react";
import { Box, Image, Text, Heading } from "@chakra-ui/react";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import chef from "../../images/chef.jpg";
import menuPlating from "../../images/menu_plating.jpg";

const SectionTodayMenu = () => {
  return (
    <>
      <Box
        as="header"
        d={{
          base: "flex",
        }}
        flexFlow={{
          base: "column nowrap",
          lg : "row-reverse nowrap"
        }}
        justifyContent="center"
        alignItems="center"
      >
        {/* Box Right Imagery */}
        <Box w={{ base: "100%", lg: "49%" }}>
          <Box>
            <Image
              src={chef}
              alt="Chef Rosemary"
              objectFit="center"
              objectPosition="cover"
              ml="5rem"
              mt="3rem"
              maxWidth="80%"
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
              src={menuPlating}
              alt="Menu Plating Rosemary"
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
          width={{ base: "100%", lg: "49%" }}
          px="1rem"
        >
          <Heading
            color="#CD916D"
            fontFamily="var(--Bebas-Neue)"
            letterSpacing="1.5px"
            fontWeight="500"
          >
            today's menu
          </Heading>
          <Text
            color="#000000"
            fontFamily="var(--Libre-Baskerville)"
            fontSize={{ base: "1.5rem" }}
            marginTop="1rem"
            marginBottom="2.5rem"
          >
            "Enjoy your delicious dish straight from our chef"
          </Text>
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
          <ButtonSecondary marginBottom="2rem" marginTop="1rem">
            check the menu
          </ButtonSecondary>
        </Box>
      </Box>
    </>
  );
};

export default SectionTodayMenu;
