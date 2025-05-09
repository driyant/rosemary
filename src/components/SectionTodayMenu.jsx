import { Box, Image, Text, Heading } from "@chakra-ui/react";
import ButtonSecondary from "@/components/ButtonSecondary";
import chef from "@/assets/chef.jpg";
import menuPlating from "@/assets/menu_plating.jpg";

const SectionTodayMenu = () => {
  return (
    <>
      <Box
        as="header"
        display={{
          base: "flex",
        }}
        flexFlow={{
          base: "column nowrap",
          lg: "row-reverse nowrap",
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
              h={{ base: "173px", md: "250px", lg: "250px" }}
              lazy="loading"
            />
          </Box>
        </Box>
        {/* Box Left  */}
        <Box
          display="flex"
          flexFlow="column"
          width={{ base: "100%", lg: "49%" }}
          px="1rem"
          fontFamily={"Libre Baskerville"}
        >
          <Heading
            fontFamily={"Bebas Neue"}
            color="#CD916D"
            letterSpacing="1.5px"
            fontWeight="500"
          >
            today's menu
          </Heading>
          <Text
            color="#000000"
            fontSize={{ base: "1rem" }}
            marginTop="1rem"
            marginBottom="2.5rem"
            fontFamily={"Libre Baskerville"}
          >
            "Enjoy your delicious dish straight from our chef"
          </Text>
          <Box
            mb="1rem"
            display="flex"
            flexFlow="column nowrap"
            borderBottom="1.5px solid rgba(161, 161, 161, 0.8)"
          >
            <Box
              display="flex"
              flexFlow="row nowrap"
              fontFamily={"Libre Baskerville"}
              fontSize="1rem"
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
            display="flex"
            flexFlow="column nowrap"
            borderBottom="1.5px solid rgba(161, 161, 161, 0.8)"
          >
            <Box
              display="flex"
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
            display="flex"
            flexFlow="column nowrap"
            borderBottom="1.5px solid rgba(161, 161, 161, 0.8)"
          >
            <Box
              display="flex"
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
