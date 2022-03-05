import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import SectionService from "../../components/SectionService/SectionService";
import Footer from "../../components/Footer/Footer";
import {
  Box,
  Heading,
  Text,
  Container,
  Stack,
  Input,
  Textarea,
  FormControl,
} from "@chakra-ui/react";
import { useToast, Spinner } from "@chakra-ui/react";
import nature from "../../images/nature.jpg";

const Contact = () => {
  const [loadingIsShow, setLoadingIsShow] = useState(false);
  const [fullnameInput, setFullnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const toast = useToast();

  const fullnameInputIsValid = fullnameInput.trim() !== "";
  const emailInputIsValid =
    emailInput.trim() !== "" && emailInput.includes("@");
  const subjectInputIsValid = subjectInput.trim() !== "";
  const messageInputIsValid = messageInput.trim() !== "";

  const formIsValid =
    fullnameInputIsValid &&
    emailInputIsValid &&
    subjectInputIsValid &&
    messageInputIsValid;

  const resetInput = () => {
    setFullnameInput("");
    setEmailInput("");
    setSubjectInput("");
    setMessageInput("");
  }

  const showToast = (title, description, status) => {
    toast({
      title: `${title}`,
      description: `${description}`,
      status: `${status}`,
      duration: 9000,
      isClosable: true,
    });
  }

  const formSubmitHandler = () => {
    if (!formIsValid) {
      showToast(
        "Bad Request",
        "Sorry cannot process, form is invalid",
        "error"
      )
      return;
    }
    setLoadingIsShow(true);
    const contactData = {
      name: fullnameInput,
      email: emailInput,
      subject: subjectInput,
      message: messageInput,
    };
    fetch(`${process.env.REACT_APP_API_CONTACT}`, {
      method: "POST",
      body: JSON.stringify(contactData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        showToast(
          "Success",
          `Hi ${contactData.name} 😀, your message has been successfully!.`,
          "success"
        )
        setLoadingIsShow(false);
        resetInput();
      }
      else if (res.status === 429) {
        showToast(
          "Error",
          `Hi ${contactData.name}, cannot process. There was so many requests, try again later! 😤`,
          "error"
        )
        setLoadingIsShow(false);
        resetInput();
      }
      else {
        showToast(
          "Error",
          `There was an issue, you can reach us by sending email manually!`,
          "error"
        )
        setLoadingIsShow(false);
        resetInput();
      }
    }).catch((err) => {
      showToast(
        "Error",
        `Something went wrong! ${err}`,
        "error"
      )
      setLoadingIsShow(false);
      resetInput();
    });
  };

  const enteredFirstname = (e) => {
    setFullnameInput(e.target.value);
  };

  const enteredEmail = (e) => {
    setEmailInput(e.target.value);
  };

  const enteredSubject = (e) => {
    setSubjectInput(e.target.value);
  };

  const enteredMessage = (e) => {
    setMessageInput(e.target.value);
  };

  return (
    <>
      <Nav />
      <Header bgImage={nature} bgColor="rgba(0, 0, 0, 0.5)">
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
            Contact Us
          </Heading>
          <Text
            fontSize="1.2rem"
            fontFamily="var(--Libre-Baskerville)"
            alt="Burt Lancaster"
          >
            I judge a restaurant by the bread and by the coffee.
          </Text>
        </Box>
      </Header>
      <Box as="main" d="flex" justifyContent="center" alignItems="center">
        <Container
          my={{ base: "2rem", lg: "5rem" }}
          maxWidth={{ base: "90%", lg: "85%" }}
          d="flex"
          flexFlow={{ base: "column nowrap", lg: "row nowrap" }}
          px={{ lg: "6rem" }}
        >
          <Box mb="2rem" w={{ lg: "49%" }}>
            <Heading
              as="h5"
              fontSize="1.5rem"
              fontWeight="500"
              fontFamily="var(--Bebas-Neue)"
              letterSpacing="2px"
              color="#CD916D"
              mb="1rem"
            >
              CONTACT ROSEMARY
            </Heading>
            <Text
              fontFamily="var(--Libre-Baskerville)"
              fontSize="1.2rem"
              textDecor="underline"
            >
              +00 1111 2222
            </Text>
            <Text
              fontFamily="var(--Libre-Baskerville)"
              fontSize="1.2rem"
              textDecor="underline"
            >
              {" "}
              contact@rosemary.com
            </Text>
            <Text
              fontFamily="var(--Libre-Baskerville)"
              fontSize="1.2rem"
              textDecor="underline"
            >
              1408, Nordic Island, Antartica
            </Text>
          </Box>
          <FormControl w={{ lg: "49%" }}>
            <Stack spacing="20px">
              <Input
                variant="outline"
                placeholder="FULLNAME*"
                bgColor="#E2E8F0"
                fontFamily="var(--Poppins)"
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                isRequired={true}
                onChange={enteredFirstname}
                value={fullnameInput}
              />
              <Input
                type="email"
                variant="outline"
                placeholder="EMAIL*"
                textTransform="lowercase"
                bgColor="#E2E8F0"
                fontFamily="var(--Poppins)"
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                onChange={enteredEmail}
                value={emailInput}
              />
              <Input
                variant="outline"
                placeholder="SUBJECT*"
                bgColor="#E2E8F0"
                fontFamily="var(--Poppins)"
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                onChange={enteredSubject}
                value={subjectInput}
              />
              <Textarea
                bgColor="#E2E8F0"
                fontFamily="var(--Poppins)"
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                h={{ base: "100px", lg: "150px" }}
                placeholder="YOUR MESSAGE*"
                onChange={enteredMessage}
                value={messageInput}
              />
              <Box d="flex" justifyContent="flex-end">
                <Box
                  h="60px"
                  p="5px"
                  textTransform="uppercase"
                  w="200px"
                  bgGradient="linear(to-r, #A46E50, #C19372)"
                >
                  <Box
                    onClick={formSubmitHandler}
                    as="button"
                    type="submit"
                    disabled={loadingIsShow ? true : false}
                    style={{
                      border: "2px solid rgba(241, 241, 241, 0.8)",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      flexFlow: "row nowrap",
                      fontFamily: "var(--Bebas-Neue)",
                      letterSpacing: "2px",
                      fontWeight: "500",
                      color: "#FFFFFF",
                    }}
                  >
                    {loadingIsShow ? "Processing..." : "Submit"}
                    {loadingIsShow && <Spinner ml="-30px" color='white.500' />}
                  </Box>
                </Box>
              </Box>
            </Stack>
          </FormControl>
        </Container>
      </Box>
      <SectionService />
      <Footer />
    </>
  );
};

export default Contact;
