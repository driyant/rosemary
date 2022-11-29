import React, { useState } from "react";
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
import styles from "./Footer.module.css";
import { useToast, Spinner } from "@chakra-ui/react";
import { sendEmailSubscriber } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state);
  const [newsletterInput, setNewsletterInput] = useState("");
  const toast = useToast();
  const showToast = (title, description, status) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 9000,
      isClosable: true,
    });
  };
  const newsletterInputIsValid =
    newsletterInput.trim() !== "" && newsletterInput.includes("@");
  const newsletterSubmitHandler = () => {
    if (!newsletterInputIsValid) {
      showToast(
        "BAD REQUEST!",
        "Sorry cannot process, email should not be empty!",
        "error"
      );
      return;
    }
    const newslettersData = {
      email: newsletterInput,
    };
    dispatch(sendEmailSubscriber(newslettersData))
      .then((resp) => {
        if (!resp.ok) {
          showToast("Error!", `${resp.statusText}`, 'error');
          setNewsletterInput("");
          return;
        }
        if (resp.ok) {
          showToast("Success!", "Thank you, enjoy 20% discount 😀", "success");
          setNewsletterInput("");
          return;
        }
      })
      .catch((err) => {
        showToast("Error!", `Something went wrong! ${err}`, 'error');
        setNewsletterInput("");
      });
  };

  return (
    <>
      <Box
        as="footer"
        bgColor="#222222"
        d="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Container color="#FFFFFF" maxWidth={{ md: "88%", lg: "90%" }}>
          <Box
            d="flex"
            flexFlow={{ base: "column", lg: "row" }}
            borderBottom="1.5px solid #333333"
            py={{ lg: "2rem" }}
            mt={{ md: "1.5rem" }}
          >
            <Box
              w={{ base: "100%", lg: "49%" }}
              marginTop="2.5rem"
              py={{ lg: "1rem" }}
              px={{ lg: "0.5rem" }}
            >
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
                fontSize={{ base: "1.5rem", md: "1.7rem" }}
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
              pt={{ md: "1rem" }}
            >
              <Input
                className={styles.newsletter}
                w={{ base: "70%", md: "75%", lg: "80%" }}
                borderRadius="0px"
                h="50px"
                type="email"
                placeholder="TYPE YOUR EMAIL"
                textTransform="uppercase"
                borderTop="none"
                borderLeft="none"
                borderRight="none"
                borderBottom="1px solid #F2F2F2"
                fontFamily="var(--Bebas-Neue)"
                letterSpacing="2px"
                variant="flushed"
                color="#FFFFFF"
                isRequired={true}
                onChange={(e) => setNewsletterInput(e.target.value)}
                value={newsletterInput}
              />
              <Box
                backgroundColor="#F2F2F2"
                h="50px"
                p="5px"
                textTransform="uppercase"
                w={{ md: "15%", lg: "10%" }}
              >
                <Button
                  // isDisabled={progessIsShow ? true : false}
                  onClick={newsletterSubmitHandler}
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
                  {isLoading ? (
                    <Spinner color="black" />
                  ) : (
                    <BsArrowRight size={22} color="black" />
                  )}
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
                <ListItem my="1rem">Design Inspired by Sicily</ListItem>
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
          <Box
            d="flex"
            justifyContent="center"
            alignItems="center"
            w="100%"
            mt="1rem"
          >
            <Text
              fontFamily="var(--Libre-Baskerville)"
              fontSize="2rem"
              mb="1.5rem"
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
