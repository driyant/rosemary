import React from "react";
import {
  Box,
  Image,
  Heading,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import { useBoolean } from "@chakra-ui/hooks";
import bgImage from "@/assets/resort.jpg";
import rosemaryWhite from "@/assets/rosemary-white.png";
import { motion } from "framer-motion";

const MotionText = motion(Text);
const MotionButtonSecondary = motion(ButtonSecondary);
const MotionHeading = motion(Heading);

const Homepage = () => {
  const [isOpen, setIsOpen] = useBoolean();
  return (
    <>
      <Box
        as="header"
        height="100vh"
        bgBlendMode="darken"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgColor="rgba(0, 0, 0, 0.65)"
        overflowX="hidden"
        backgroundImage={bgImage}
        // style={{ backgroundImage: `url(${bgImage})` }}
        pos={{ base: "relative", lg: "static" }}
      >
        {/* Navbar */}
        <Box
          as="nav"
          width="100vw"
          height="150px"
          borderBottom="2px solid rgba(233, 233, 233, 0.8)"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={{ base: "0", lg: "3rem" }}
          overflowX="hidden"
        >
          {/*  Logo wrapper */}
          <Box
            display="flex"
            flexDir="row"
            justifyContent="center"
            alignItems="center"
          >
            <Link
              to="/"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={rosemaryWhite} alt="Rosemary" />
              <Heading fontWeight="600" color="#ffffff">
                Rosemary
              </Heading>
            </Link>
          </Box>
          {/*  End Logo wrapper */}
          {/* Naviation Links */}
          <UnorderedList
            color="white"
            textTransform={{ base: "capitalize", lg: "uppercase" }}
            position={{ base: "absolute", lg: "static" }}
            width={{ base: "100%", lg: "auto" }}
            height={{ base: "100%", lg: "auto" }}
            top="0"
            left="-16px"
            display="flex"
            flexDir={{ base: "column", lg: "row" }}
            justifyContent="center"
            alignItems="center"
            backgroundColor={{ base: "rgba(65, 65, 65)", lg: "transparent" }}
            opacity="87%"
            transform={{
              base: `${isOpen ? "translateX(0)" : "translateX(1000px)"}`,
              lg: "translateX(0)",
            }}
            transition="0.5s ease"
          >
            <ListItem
              fontFamily={{
                base: "var(--Libre-Baskerville)",
                lg: "var(--Bebas-Neue)",
              }}
              listStyleType="none"
              my={{ base: "1.5rem", lg: "auto" }}
              mx={{ base: "auto", lg: "1.5rem" }}
              _hover={{
                color: "#CD916D",
                transition: "0.5s ease",
              }}
              fontSize={{ base: "1.8rem", lg: "1.6rem" }}
              transition="0.5s ease"
              letterSpacing={{ base: "auto", lg: "2px" }}
            >
              <Link to="/discover">discover</Link>
            </ListItem>
            <ListItem
              fontFamily={{
                base: "var(--Libre-Baskerville)",
                lg: "var(--Bebas-Neue)",
              }}
              fontSize={{ base: "1.8rem", lg: "1.6rem" }}
              mx={{ base: "auto", lg: "1rem" }}
              listStyleType="none"
              _hover={{
                transition: "0.5s ease",
                color: "#CD916D",
              }}
              transition="all 0.5s ease"
              my={{ base: "1.5rem", lg: "auto" }}
              letterSpacing={{ base: "auto", lg: "2px" }}
            >
              <Link to="/menu">our menu</Link>
            </ListItem>
            <ListItem
              fontFamily={{
                base: "var(--Libre-Baskerville)",
                lg: "var(--Bebas-Neue)",
              }}
              fontSize={{ base: "1.8rem", lg: "1.6rem" }}
              listStyleType="none"
              _hover={{
                transition: "0.5s ease",
                color: "#CD916D",
              }}
              transition="all 0.5s ease"
              my={{ base: "1.5rem", lg: "auto" }}
              mx={{ base: "auto", lg: "1rem" }}
              letterSpacing={{ base: "auto", lg: "2px" }}
            >
              <Link to="/contact">contact</Link>
            </ListItem>
            <ListItem
              listStyleType="none"
              fontFamily={{
                base: "var(--Libre-Baskerville)",
                lg: "var(--Bebas-Neue)",
              }}
              fontSize={{ base: "1.8rem", lg: "1rem" }}
              borderBottom="1px solid white"
              _hover={{
                transition: "0.5s ease",
                color: "#CD916D",
                borderBottom: "1px solid #CD916D",
              }}
              transition="all 0.5s ease"
              my={{ base: "1.5rem", lg: "auto" }}
              display={{ base: "block", lg: "none" }}
            >
              <Link to="/reservation">book reservation</Link>
            </ListItem>
          </UnorderedList>
          {/* End Naviation Links */}
          {/* Hamburger */}
          <Box
            display={{ base: "flex", lg: "none" }}
            flexDir="row"
            alignItems="center"
            marginTop={{ base: "0.5rem" }}
            marginRight={{ base: "0.875rem" }}
            zIndex="4"
          >
            <Text
              textTransform="uppercase"
              color="white"
              marginRight="0.2rem"
              fontSize="1.3rem"
              letterSpacing="2px"
              lineHeight="1px"
              style={{ fontFamily: "var(--Bebas-Neue)" }}
            >
              {isOpen ? "close" : "menu"}
            </Text>
            <Box
              display="flex"
              flexDir="column"
              justifyContent="space-evenly"
              alignItems="center"
              cursor="pointer"
              height="50px"
              width="50px"
              transition="all 0.5s ease"
              onClick={setIsOpen.toggle}
            >
              <Box
                backgroundColor="white"
                height="1px"
                border="1px solid white"
                width="60%"
                borderRadius="12px"
                transform={isOpen ? "rotate(45deg) translate(7px, 6px)" : ""}
                transition="all 0.5s ease"
              ></Box>
              <Box
                backgroundColor="white"
                height="1px"
                border="1px solid white"
                width="60%"
                borderRadius="12px"
                transform={isOpen ? "rotate(-45deg) translate(6px, -6px)" : ""}
                transition="all 0.5s ease"
              ></Box>
            </Box>
          </Box>
          {/* End Hamburger */}
          <ButtonPrimary>book table</ButtonPrimary>
        </Box>
        {/* End Navbar */}
        <Box
          maxWidth="80%"
          marginTop={{
            base: "7rem",
            md: "20rem",
            lg: "13rem",
          }}
          marginLeft={{ base: "1.4rem", lg: "4.5rem" }}
          display={isOpen ? "none" : "block"}
          transition="all 1s ease-in-out"
        >
          <MotionHeading
            color="#CD916D"
            fontFamily="var(--Bebas-Neue)"
            letterSpacing="1.5px"
            fontWeight="500"
            textTransform="uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            rosemary restaurant
          </MotionHeading>
          <MotionText
            color="white"
            fontFamily={'"Libre Baskerville", serif'}
            fontSize="25px"
            my="1rem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            "A good restaurant is like a vacation; it transports you, and it
            becomes a lot more than just about the food"
          </MotionText>
          <MotionButtonSecondary>check the menu</MotionButtonSecondary>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
