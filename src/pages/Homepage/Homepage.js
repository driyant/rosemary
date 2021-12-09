import React from "react";
import {
  Box,
  Image,
  Heading,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ButtonSecondary from "../../components/ButtonSecondary/ButtonSecondary";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import { useBoolean } from "@chakra-ui/hooks";
import { BsArrowRight } from "react-icons/bs";
import bgImage from "../../images/resort.jpg";
import rosemaryWhite from "../../images/rosemary-white.png";

const Homepage = () => {
  const [isOpen, setIsOpen] = useBoolean();
  return (
    <>
      <Box
        as="header"
        h="100vh"
        bgBlendMode="darken"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgColor="rgba(0, 0, 0, 0.65)"
        overflowX="hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
        pos={{ base: "relative", lg: "static" }}
      >
        {/* Navbar */}
        <Box
          as="nav"
          w="100vw"
          h="150px"
          borderBottom="2px solid rgba(233, 233, 233, 0.8)"
          d="flex"
          justifyContent="space-between"
          alignItems="center"
          px={{ base: "0", lg: "2rem" }}
          // pos={{base : 'relative', lg: "static"}}
          overflowX="hidden"
        >
          {/*  Logo wrapper */}
          <Box
            d="flex"
            flexDir="row"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={rosemaryWhite} alt="Rosemary" />
            <Heading fontWeight="600" color="#ffffff">
              Rosemary
            </Heading>
          </Box>
          {/*  End Logo wrapper */}
          {/* Naviation Links */}
          <UnorderedList
            color="white"
            textTransform={{ base: "capitalize", lg: "uppercase" }}
            pos={{ base: "absolute", lg: "static" }}
            w={{ base: "100%", lg: "auto" }}
            h={{ base: "100%", lg: "auto" }}
            top="0"
            left="-16px"
            d="flex"
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
              fontFamily={{base : "var(--Libre-Baskerville)", lg: "var(--Bebas-Neue)"}}
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
              fontFamily={{base : "var(--Libre-Baskerville)", lg: "var(--Bebas-Neue)"}}
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
              fontFamily={{base : "var(--Libre-Baskerville)", lg: "var(--Bebas-Neue)"}}
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
              fontFamily={{base : "var(--Libre-Baskerville)", lg: "var(--Bebas-Neue)"}}
              fontSize={{ base: "1.8rem", lg: "1rem" }}
              borderBottom="1px solid white"
              _hover={{
                transition: "0.5s ease",
                color: "#CD916D",
                borderBottom: "1px solid #CD916D",
              }}
              transition="all 0.5s ease"
              my={{ base: "1.5rem", lg: "auto" }}
              d={{ base: "block", lg: "none" }}
            >
              <Link to="/reservation">book reservation</Link>
            </ListItem>
          </UnorderedList>
          {/* End Naviation Links */}
          {/* Hamburger */}
          <Box
            d={{ base: "flex", lg: "none" }}
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
              d="flex"
              flexDir="column"
              justifyContent="space-evenly"
              alignItems="center"
              cursor="pointer"
              h="50px"
              w="50px"
              transition="all 0.5s ease"
              onClick={setIsOpen.toggle}
            >
              <Box
                backgroundColor="white"
                h="1px"
                border="1px solid white"
                w="60%"
                borderRadius="12px"
                transform={isOpen ? "rotate(45deg) translate(7px, 6px)" : ""}
                transition="all 0.5s ease"
              ></Box>
              <Box
                backgroundColor="white"
                h="1px"
                border="1px solid white"
                w="60%"
                borderRadius="12px"
                transform={isOpen ? "rotate(-45deg) translate(6px, -6px)" : ""}
                transition="all 0.5s ease"
              ></Box>
            </Box>
          </Box>
          {/* End Hamburger */}
          <ButtonPrimary>
            book table
          </ButtonPrimary>
        </Box>
        {/* End Navbar */}
        <Box
          maxWidth="80%"
          marginTop={{ base: "14rem", md: "20rem" }}
          marginLeft="1rem"
          d={isOpen ? "none" : "block"}
          transition="all 1s ease-in-out"
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
            color="white"
            fontFamily="var(--Libre-Baskerville)"
            fontSize="28px"
            my="1rem"
          >
            "A good restaurant is like a vacation; it transports you, and it
            becomes a lot more than just about the food"
          </Text>
          <ButtonSecondary>
            <Link
              to="/menu"
              style={{
                border: "2px solid grey",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexFlow: "row nowrap",
                fontFamily: "var(--Bebas-Neue)",
                letterSpacing: "2px",
                fontWeight: "500",
              }}
            >
              check the menu
              <BsArrowRight size={22} />
            </Link>
          </ButtonSecondary>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
