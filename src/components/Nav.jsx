import {
  Box,
  Image,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Link,
} from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/hooks";
import { NavLink as ReachLink } from "react-router";
import ButtonPrimary from "@/components/ButtonPrimary";
import rosemary from "@/assets/rosemary.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useBoolean();
  return (
    <>
      {/* Navbar */}
      <Box
        as="nav"
        width="100vw"
        height="150px"
        top="0"
        bottom="0"
        borderBottom="2px solid rgba(86, 86, 86, 0.8)"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={{ base: "0", lg: "3rem" }}
        overflowX="hidden"
        zIndex="6"
        position="fixed"
        bgColor="#FFFFFF"
      >
        {/*  Logo wrapper */}
        <Box
          display="flex"
          flexDir="row"
          justifyContent="center"
          alignItems="center"
        >
          <Link
            as={ReachLink}
            to="/"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            _hover={{
              textDecor: "none",
            }}
          >
            <Image src={rosemary} alt="Rosemary" h="64px" w="64px" />
            <Heading
              fontWeight="600"
              color="#00000"
              fontFamily={"Libre Baskerville"}
            >
              Rosemary
            </Heading>
          </Link>
        </Box>
        {/*  End Logo wrapper */}
        {/* Naviation Links */}
        <UnorderedList
          color={{ base: "#FFFFFF", lg: "#000000" }}
          textTransform={{ base: "capitalize", lg: "uppercase" }}
          pos={{ base: "fixed", lg: "static" }}
          width={{ base: "100%", lg: "auto" }}
          height={{ base: "100vh", lg: "auto" }}
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
          zIndex="7"
        >
          <ListItem
            fontFamily={{
              base: "var(--Libre-Baskerville)",
              lg: "var(--Bebas-Neue)",
            }}
            listStyleType="none"
            my={{ base: "1.5rem", lg: "auto" }}
            mx={{ base: "auto", lg: "1.5rem" }}
            fontSize={{ base: "1.8rem", lg: "1.6rem" }}
            transition="0.5s ease"
            letterSpacing={{ base: "auto", lg: "2px" }}
          >
            <Link
              as={ReachLink}
              to="/discover"
              textDecor="none"
              _hover={{
                color: "#CD916D",
                transition: "0.5s ease",
              }}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#CD916D" : "",
                  borderBottom: isActive ? "1px solid #CD916D" : "",
                };
              }}
            >
              discover
            </Link>
          </ListItem>
          <ListItem
            fontFamily={{
              base: "var(--Libre-Baskerville)",
              lg: "var(--Bebas-Neue)",
            }}
            fontSize={{ base: "1.8rem", lg: "1.6rem" }}
            mx={{ base: "auto", lg: "1rem" }}
            listStyleType="none"
            transition="all 0.5s ease"
            my={{ base: "1.5rem", lg: "auto" }}
            letterSpacing={{ base: "auto", lg: "2px" }}
          >
            <Link
              as={ReachLink}
              to="/menu"
              _hover={{
                transition: "0.5s ease",
                color: "#CD916D",
              }}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#CD916D" : "",
                  borderBottom: isActive ? "1px solid #CD916D" : "",
                };
              }}
            >
              our menu
            </Link>
          </ListItem>
          <ListItem
            fontFamily={{
              base: "var(--Libre-Baskerville)",
              lg: "var(--Bebas-Neue)",
            }}
            fontSize={{ base: "1.8rem", lg: "1.6rem" }}
            listStyleType="none"
            transition="all 0.5s ease"
            my={{ base: "1.5rem", lg: "auto" }}
            mx={{ base: "auto", lg: "1rem" }}
            letterSpacing={{ base: "auto", lg: "2px" }}
          >
            <Link
              as={ReachLink}
              to="/contact"
              textDecor="none"
              _hover={{
                transition: "0.5s ease",
                color: "#CD916D",
              }}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#CD916D" : "",
                  borderBottom: isActive ? "1px solid #CD916D" : "",
                };
              }}
            >
              contact
            </Link>
          </ListItem>
          <ListItem
            listStyleType="none"
            fontFamily={{
              base: "var(--Libre-Baskerville)",
              lg: "var(--Bebas-Neue)",
            }}
            fontSize={{ base: "1.8rem", lg: "1rem" }}
            transition="all 0.5s ease"
            my={{ base: "1.5rem", lg: "auto" }}
            display={{ base: "block", lg: "none" }}
          >
            <Link
              as={ReachLink}
              to="/reservation"
              _hover={{
                transition: "0.5s ease",
                color: "#CD916D",
                borderBottom: "1px solid #CD916D",
              }}
              textDecor="none"
            >
              book reservation
            </Link>
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
          zIndex="10"
          transition="all 1s ease-in"
        >
          <Text
            textTransform="uppercase"
            color={isOpen ? "#FFFFFF" : "#000000"}
            marginRight="0.2rem"
            fontSize="1.3rem"
            letterSpacing="2px"
            lineHeight="1px"
            style={{ fontFamily: "var(--Bebas-Neue)" }}
            transition="all 1s ease-in"
          >
            {isOpen ? "close" : "menu"}
          </Text>
          <Box
            display="flex"
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
              backgroundColor={isOpen ? "#FFFFFF" : "#000000"}
              h="1px"
              border={isOpen ? "1px solid #FFFFFF" : "1px solid #000000"}
              w="60%"
              borderRadius="12px"
              transform={isOpen ? "rotate(45deg) translate(7px, 6px)" : ""}
              transition="all 0.5s ease-in-out"
            ></Box>
            <Box
              backgroundColor={isOpen ? "#FFFFFF" : "#000000"}
              h="1px"
              border={isOpen ? "1px solid #FFFFFF" : "1px solid #000000"}
              w="60%"
              borderRadius="12px"
              transform={isOpen ? "rotate(-45deg) translate(6px, -6px)" : ""}
              transition="all 0.5s ease-in-out"
            ></Box>
          </Box>
        </Box>
        {/* End Hamburger */}
        <ButtonPrimary>book table</ButtonPrimary>
      </Box>
      {/* End Navbar */}
    </>
  );
};

export default Nav;
