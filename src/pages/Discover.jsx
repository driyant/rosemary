import { Box, Heading, Text, Image } from "@chakra-ui/react";
import steak from "@/assets/steak.jpg";
import restaurantChef from "@/assets/restaurant_chef.jpg";
import SectionTodayMenu from "@/components/SectionTodayMenu";
import SectionService from "@/components/SectionService";
import SectionQuote from "@/components/SectionQoute";
import Maps from "@/components/Maps";
import WrapperTitle from "@/components/Wrapper";

const Discover = () => {
  return (
    <>
      <WrapperTitle title="Discover">
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
          mt="150px"
        >
          {/* Box Right Imagery */}
          <Box w={{ base: "100%", lg: "49%" }}>
            <Box
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Image
                src={restaurantChef}
                alt="Restaurant Chef"
                objectFit="center"
                objectPosition="cover"
                ml="5rem"
                mt="2rem"
                maxWidth="80%"
                lazy="loading"
              />
            </Box>
            <Box
              pos="relative"
              left="0.2rem"
              bottom={{ base: "50px", md: "130px", lg: "150px" }}
              border="6px solid #FFFFFF"
              w={{ base: "240px", md: "350px", lg: "400px" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            >
              <Image
                src={steak}
                alt="Steak Rosemary"
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
          >
            <Heading
              color="#CD916D"
              letterSpacing="1.5px"
              fontWeight="500"
              textTransform="uppercase"
              fontFamily={"Bebas Neue"}
            >
              rosemary restaurant
            </Heading>
            <Text
              fontFamily={"Libre Baskerville"}
              color="#000000"
              fontSize={{ base: "1.5rem" }}
              my="1rem"
            >
              "A good restaurant is like a vacation; it transports you, and it
              becomes a lot more than just about the food"
            </Text>
            <Text fontFamily={"Libre Baskerville"} mb="1rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
        </Box>
        <SectionQuote />
        <SectionTodayMenu />
        <SectionService />
        <Maps />
      </WrapperTitle>
    </>
  );
};

export default Discover;
