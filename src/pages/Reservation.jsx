import SectionService from "@/components/SectionService";
import {
  Box,
  Heading,
  Text,
  Container,
  Stack,
  Input,
  Select,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import beachResort from "@/assets/beach_resort.jpg";
import { useToast, Spinner } from "@chakra-ui/react";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import useIndexStore from "@/store";
import { useFormik } from "formik";
import {
  validate,
  getOpeningHoursUrl,
  submitReservationUrl,
} from "@/utils/constant";

const Reservation = () => {
  const { openingHours, setOpeningHours } = useIndexStore();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const reservationSubmitHandler = async (obj) => {
    try {
      setIsLoading(true);
      const resp = await fetch(submitReservationUrl, {
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
        description: `Hi ${obj.firstname}, your booking reservation has been sent successfully!`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      formik.resetForm();
    } catch (error) {
      toast({
        title: "Error!",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      person: 1,
      date: "",
      time: "",
    },
    validate,
    onSubmit: (values) => {
      const reservationData = {
        firstname: values.firstName,
        lastname: values.lastName,
        email: values.email.toLowerCase(),
        person: Number(values.person),
        date: values.date,
        time: values.time,
      };
      reservationSubmitHandler(reservationData);
    },
  });

  const fetchOpeningHours = async () => {
    try {
      const resp = await fetch(`${getOpeningHoursUrl}`);
      const data = await resp.json();
      if (resp.ok) setOpeningHours(data);
    } catch (error) {
      console.error("Error fetching opening hours:", error);
    }
  };

  useEffect(() => {
    fetchOpeningHours();
  }, []);

  return (
    <>
      <Header bgImage={beachResort} bgColor="rgba(0, 0, 0, 0.6)">
        <Box
          textAlign="center"
          display="flex"
          flexFlow="column nowrap"
          maxWidth="80%"
        >
          <Heading
            as="h4"
            fontWeight="500"
            fontFamily={"Bebas Neue"}
            mb="1rem"
            letterSpacing="2px"
          >
            Reservation
          </Heading>
          <Text
            fontSize="1.2rem"
            fontFamily={"Libre Baskerville"}
            alt="Adam Gopnik"
          >
            Going to a restaurant is one of my keenest pleasures. Meeting
            someplace with old and new friends, ordering wine, eating food,
            surrounded by strangers, I think is the core of what it means to
            live a civilised life.
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
          {/* Left side content (keep existing) */}
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
              Book your reservation
            </Heading>
            <Text>Rosemary Open :</Text>
            <Text textDecor="underline">Mondays - Sunday at 09:00 - 21:00</Text>
            <Text fontSize="1rem" mt="1rem">
              Note :
            </Text>
            <Text textDecor="underline">
              Number of person maximum 11 persons.
            </Text>
            <Text w={{ lg: "80%" }}>
              If you want to book reservation a group of people, please contact
              rosemary's number or email.
            </Text>
          </Box>

          {/* Form Section */}
          <FormControl
            w={{ lg: "49%" }}
            as="form"
            onSubmit={formik.handleSubmit}
          >
            <Stack spacing="20px">
              {/* First Name */}
              <Input
                variant="outline"
                placeholder="FIRSTNAME*"
                bgColor="#E2E8F0"
                fontFamily={"Bebas Neue"}
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                name="firstName"
                id="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <Text fontFamily={"Bebas Neue"} color="red.500">
                  {formik.errors.firstName}
                </Text>
              )}

              {/* Last Name */}
              <Input
                variant="outline"
                placeholder="LASTNAME*"
                bgColor="#E2E8F0"
                fontFamily={"Bebas Neue"}
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                name="lastName"
                id="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <Text fontFamily={"Bebas Neue"} color="red.500">
                  {formik.errors.lastName}
                </Text>
              )}

              {/* Email */}
              <Input
                variant="outline"
                placeholder="EMAIL*"
                textTransform="lowercase"
                bgColor="#E2E8F0"
                fontFamily={"Bebas Neue"}
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <Text fontFamily={"Bebas Neue"} color="red.500">
                  {formik.errors.email}
                </Text>
              )}

              {/* Number of Persons */}
              <NumberInput
                min={1}
                max={11}
                bgColor="#E2E8F0"
                fontFamily={"Bebas Neue"}
                color="#494949"
                name="person"
                value={formik.values.person}
                onChange={(valueString, valueNumber) =>
                  formik.setFieldValue("person", valueNumber)
                }
                onBlur={formik.handleBlur}
              >
                <NumberInputField
                  placeholder="number of person*"
                  letterSpacing="2px"
                  borderRadius="0"
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {formik.touched.person && formik.errors.person && (
                <Text fontFamily={"Bebas Neue"} color="red.500">
                  {formik.errors.person}
                </Text>
              )}

              {/* Date */}
              <Input
                type="date"
                variant="outline"
                placeholder="date*"
                bgColor="#E2E8F0"
                fontFamily={"Bebas Neue"}
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.date && formik.errors.date && (
                <Text fontFamily={"Bebas Neue"} color="red.500">
                  {formik.errors.date}
                </Text>
              )}

              {/* Time Select */}
              <Select
                placeholder="-- Choose Time --"
                bgColor="#E2E8F0"
                fontFamily={"Bebas Neue"}
                letterSpacing="1.5px"
                borderRadius="0"
                color="#494949"
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {openingHours?.map((hour, index) => (
                  <option key={index} value={hour}>
                    {hour}
                  </option>
                ))}
              </Select>
              {formik.touched.time && formik.errors.time && (
                <Text fontFamily={"Bebas Neue"} color="red.500">
                  {formik.errors.time}
                </Text>
              )}

              {/* Submit Button */}
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
                    disabled={isLoading}
                    style={{
                      border: "2px solid rgba(241, 241, 241, 0.8)",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      flexFlow: "row nowrap",
                      fontFamily: "Bebas Neue",
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

export default Reservation;
