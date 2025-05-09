import { useState } from "react";
import Header from "@/components/Header";
import SectionService from "@/components/SectionService";
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
import nature from "@/assets/nature.jpg";
import { useFormik } from "formik";
import { contactUrl } from "../utils/constant";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const showToast = (title, description, status) => {
    toast({
      title: `${title}`,
      description: `${description}`,
      status: `${status}`,
      duration: 9000,
      isClosable: true,
    });
  };

  const contactSubmitHandler = async (obj) => {
    try {
      setIsLoading(true);
      const resp = await fetch(contactUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }
      toast({
        title: "Success!",
        description: `Hi ${obj.name}, you message has been sent successfully!`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      formik.resetForm();
    } catch (error) {
      showToast("Error!", `Something went wrong! ${error.message}`, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "Please enter fullname";
    }
    if (!values.email) {
      errors.email = "Please enter email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.subject) {
      errors.subject = "Please enter subject";
    }
    if (!values.message) {
      errors.message = "Please enter message";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      const contactData = {
        name: values.fullname,
        email: values.email,
        subject: values.subject,
        message: values.message,
      };
      contactSubmitHandler(contactData);
    },
  });

  return (
    <>
      <Header bgImage={nature} bgColor="rgba(0, 0, 0, 0.5)">
        <Box
          textAlign="center"
          display="flex"
          flexFlow="column nowrap"
          maxWidth="80%"
        >
          <Heading
            as="h4"
            fontWeight="500"
            mb="1rem"
            letterSpacing="2px"
            fontFamily={"Bebas Neue"}
          >
            Contact Us
          </Heading>
          <Text
            fontSize="1.2rem"
            fontFamily={"Libre Baskerville"}
            alt="Burt Lancaster"
          >
            I judge a restaurant by the bread and by the coffee.
          </Text>
        </Box>
      </Header>
      <Box as="main" display="flex" justifyContent="center" alignItems="center">
        <Container
          my={{ base: "2rem", lg: "5rem" }}
          maxWidth={{ base: "90%", lg: "85%" }}
          display="flex"
          flexFlow={{ base: "column nowrap", lg: "row nowrap" }}
          px={{ lg: "6rem" }}
        >
          <Box mb="2rem" w={{ lg: "49%" }} fontFamily={"Libre Baskerville"}>
            <Heading
              as="h5"
              fontSize="1.5rem"
              fontWeight="500"
              fontFamily={"Bebas Neue"}
              letterSpacing="2px"
              color="#CD916D"
              mb="1rem"
            >
              CONTACT ROSEMARY
            </Heading>
            <Text fontSize="1.2rem" textDecor="underline">
              +00 1111 2222
            </Text>
            <Text fontSize="1.2rem" textDecor="underline">
              {" "}
              contact@rosemary.com
            </Text>
            <Text fontSize="1.2rem" textDecor="underline">
              1408, Nordic Island, Antartica
            </Text>
          </Box>
          <FormControl
            as="form"
            w={{ lg: "49%" }}
            onSubmit={formik.handleSubmit}
          >
            <Stack spacing="20px">
              <Input
                variant="outline"
                placeholder="FULLNAME*"
                bgColor="#E2E8F0"
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                id="fullname"
                name="fullname"
                onChange={formik.handleChange}
                value={formik.values.fullname}
              />
              <Input
                type="email"
                variant="outline"
                placeholder="EMAIL*"
                textTransform="lowercase"
                bgColor="#E2E8F0"
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <Input
                variant="outline"
                placeholder="SUBJECT*"
                bgColor="#E2E8F0"
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                id="subject"
                name="subject"
                onChange={formik.handleChange}
                value={formik.values.subject}
              />
              <Textarea
                bgColor="#E2E8F0"
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                h={{ base: "100px", lg: "150px" }}
                placeholder="YOUR MESSAGE*"
                id="message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              <Box display="flex" justifyContent="flex-end">
                <Box
                  h="60px"
                  p="5px"
                  textTransform="uppercase"
                  w="200px"
                  bgGradient="linear(to-r, #A46E50, #C19372)"
                >
                  <Box
                    as="button"
                    type="submit"
                    disabledisplay={isLoading ? true : false}
                    style={{
                      border: "2px solid rgba(241, 241, 241, 0.8)",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      flexFlow: "row nowrap",
                      fontFamily: "'Bebas Neue'",
                      letterSpacing: "2px",
                      fontWeight: "500",
                      color: "#FFFFFF",
                    }}
                  >
                    {isLoading ? "Processing..." : "Submit"}
                    {isLoading && <Spinner ml="-30px" color="white.500" />}
                  </Box>
                </Box>
              </Box>
            </Stack>
          </FormControl>
        </Container>
      </Box>
      <SectionService />
    </>
  );
};

export default Contact;
