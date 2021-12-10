import React from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Container,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io";
import { SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <Box as="footer" bgColor="#222222" d="flex" justifyContent="center" alignItems="center">
        <Container color="#FFFFFF" maxWidth={{ lg: "90%" }}>
          <Box
            d="flex"
            flexFlow={{ base: "column", lg: "row" }}
            borderBottom="1.5px solid #333333"
          >
            <Box w={{ base: "100%", lg: "49%" }} marginTop="2.5rem">
              <Text
                letterSpacing="2px"
                textTransform="uppercase"
                color="#CD916D"
                fontFamily="var(--Bebas-Neue)"
                fontSize="1.2rem"
              >
                save 20% in deals
              </Text>
              <Heading
                mt="1rem"
                as="h3"
                fontFamily="var(--Libre-Baskerville)"
                fontWeight="500"
              >
                Our Weekly Newsletter
              </Heading>
            </Box>
            <Box
              mt="4rem"
              d="flex"
              flexFlow="row nowrap"
              justifyContent="space-between"
              mb="4rem"
              w={{ lg: "50%" }}
            >
              <Input
                w="70%"
                borderRadius="0px"
                h="50px"
                placeholder="TYPE YOUR EMAIL"
                textTransform="uppercase"
                borderTop="none"
                borderLeft="none"
                borderRight="none"
                borderBottom="1px solid #F2F2F2"
                fontFamily="var(--Bebas-Neue)"
                letterSpacing="2px"
                variant="flushed"
              />
              <Box
                as="button"
                backgroundColor="#F2F2F2"
                h="50px"
                p="5px"
                textTransform="uppercase"
                w="20%"
              >
                <Button
                  borderRadius="0"
                  style={{
                    border: "2px solid #D3D0CE",
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
                  <BsArrowRight size={22} color="black" />
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            mt="2rem"
            d="grid"
            gridTemplateColumns={{ base: "1fr 1fr", lg: "1fr 1fr 1fr" }}
            gridTemplateRows="auto auto auto"
          >
            <Box>
              <Text
                color="#CD916D"
                fontFamily="var(--Bebas-Neue)"
                letterSpacing="1px"
                fontSize="1.2rem"
              >
                MORE
              </Text>
              <UnorderedList
                listStyleType="none"
                ml="0"
                fontFamily="var(--Libre-Baskerville)"
              >
                <ListItem my="1rem">Our blog</ListItem>
                <ListItem my="1rem">Contact us</ListItem>
                <ListItem my="1rem">Delivery service</ListItem>
                <ListItem my="1rem">Terms of use</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Text
                color="#CD916D"
                fontFamily="var(--Bebas-Neue)"
                letterSpacing="1px"
                fontSize="1.2rem"
              >
                CONTACT US
              </Text>
              <UnorderedList
                listStyleType="none"
                ml="0"
                fontFamily="var(--Libre-Baskerville)"
              >
                <ListItem my="1rem">+00 1111 2222</ListItem>
                <ListItem my="1rem">contact@rosemary.com</ListItem>
                <ListItem my="1rem">1408, Nordic Island, Antartica</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Text
                color="#CD916D"
                fontFamily="var(--Bebas-Neue)"
                letterSpacing="1px"
                fontSize="1.2rem"
              >
                FOLLOW US
              </Text>
              <UnorderedList
                listStyleType="none"
                ml="0"
                fontFamily="var(--Libre-Baskerville)"
              >
                <ListItem my="1rem">2021 &copy; Rosemary</ListItem>
                <ListItem my="1rem">Design by Sicily</ListItem>
                <UnorderedList
                  my="1rem"
                  d="inline-flex"
                  listStyleType="none"
                  ml="0"
                >
                  <ListItem
                    border="1px solid white"
                    h="35px"
                    w="35px"
                    bgColor="#F2F2F2"
                    borderRadius="50%"
                    d="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <CgFacebook color="black" size={18} />
                  </ListItem>
                  <ListItem
                    border="1px solid white"
                    h="35px"
                    w="35px"
                    bgColor="#F2F2F2"
                    borderRadius="50%"
                    d="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                    mx="1rem"
                  >
                    <SiTwitter color="black" size={16} />
                  </ListItem>
                  <ListItem
                    border="1px solid white"
                    h="35px"
                    w="35px"
                    bgColor="#F2F2F2"
                    borderRadius="50%"
                    d="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <IoLogoInstagram color="black" size={20} />
                  </ListItem>
                </UnorderedList>
              </UnorderedList>
            </Box>
          </Box>
          <Box d="flex" justifyContent="center" alignItems="center" w="100%" mt="1rem">
            <Text 
              fontFamily="var(--Libre-Baskerville)"
              fontSize="2rem"
            >
              Rosemary
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
