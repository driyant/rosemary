import React, { useState, useEffect } from "react";
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
  Select,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import beachResort from "../../images/beach_resort.jpg";
import { useToast, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { reservationHandler } from "../../store/action";
import { fetchOpeningHours } from "../../store/action";

const Reservation = () => {
  const dispatch = useDispatch();
  const { openingHours } = useSelector((state) => state);
  const { isLoading } = useSelector((state) => state);
  const [firstname, setFirstname] = useState("");
  const [firstnameIsInvalid, setFirstnameIsInvalid] = useState(false);
  const [lastname, setLastname] = useState("");
  const [lastnameIsInvalid, setLastnameIsInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [person, setPerson] = useState(1);
  const [personIsInvalid, setPersonIsInvalid] = useState(false);
  const [date, setDate] = useState("");
  const [dateIsInvalid, setDateIsInvalid] = useState(false);
  const [time, setTime] = useState(undefined);
  const [timeIsInvalid, setTimeIsInvalid] = useState(false);
  const toast = useToast();

  let today = new Date();
  let selectedDate = new Date(date);

  const firstNameBlur = () => {
    if (firstname === "" || firstname.trim() === "") {
      setFirstnameIsInvalid(true);
    }
  };

  const lastNameBlur = () => {
    if (lastname === "" || lastname.trim() === "") {
      setLastnameIsInvalid(true);
    }
  };

  const emailBlur = () => {
    if (email === "" || email.trim() === "" || !email.includes("@")) {
      setEmailIsInvalid(true);
    }
  };

  const dateBlur = () => {
    if (selectedDate.getDate() < today.getDate()) {
      setDateIsInvalid(true);
    }
  };

  const timeBlur = () => {
    if (!time) setTimeIsInvalid(true);
  };

  useEffect(() => {
    if (firstname !== "" || firstname.trim() !== "") {
      setFirstnameIsInvalid(false);
    }
    if (lastname !== "" || lastname.trim() !== "") {
      setLastnameIsInvalid(false);
    }
    if (email !== "" || email.trim() !== "") {
      setEmailIsInvalid(false);
    }
    if (+person > 0 && +person <= 11) {
      setPersonIsInvalid(false);
    }
    if (selectedDate.getDate() >= today.getDate()) {
      setDateIsInvalid(false);
    }
    if (time !== "" || time.trim() !== "") {
      setTimeIsInvalid(false);
    }
    // eslint-disable-next-line
  }, [firstname, lastname, email, person, date, time]);

  useEffect(() => {
    dispatch(fetchOpeningHours());
    // eslint-disable-next-line
  }, []);

  const showToast = (title, description, status) => {
    toast({
      title: `${title}`,
      description: `${description}`,
      status: `${status}`,
      duration: 9000,
      isClosable: true,
    });
  };

  const resetInput = () => {
    setFirstname("");
    setLastname("");
    setPerson(1);
    setEmail("");
  };

  const invalidInput =
    firstnameIsInvalid ||
    lastnameIsInvalid ||
    emailIsInvalid ||
    personIsInvalid ||
    dateIsInvalid ||
    timeIsInvalid;

  const reservationSubmitHandler = (e) => {
    e.preventDefault();
    if (invalidInput) {
      showToast(
        "Error!",
        `Sorry we can't process, please double check your input!`,
        "error"
      );
      return;
    }
    const reservationData = {
      firstname: firstname,
      lastname: lastname,
      email: email.toLocaleLowerCase(),
      person: Number(person),
      date: date,
      time: time,
    };
    dispatch(reservationHandler(reservationData))
      .then((resp) => {
        if (resp.ok) {
          showToast(
            "Success!",
            `Hi ${reservationData.firstname}, your booking reservation has been sent successfully! Please kindly check your email in inbox/spam if it gets accepted!`,
            "success"
          );
          resetInput();
        }
        if (!resp.ok) {
          showToast("Error!", `${resp.statusText}`, "error");
        }
      })
      .catch((err) => {
        showToast(
          `Sorry 🙁, there is an issue, ${err}`,
          `If this problem still persists you can contact us for your reservation`,
          "error"
        );
      });
  };

  return (
    <>
      <Nav />
      <Header bgImage={beachResort} bgColor="rgba(0, 0, 0, 0.6)">
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
            Reservation
          </Heading>
          <Text
            fontSize="1.2rem"
            fontFamily="var(--Libre-Baskerville)"
            alt="Adam Gopnik"
          >
            Going to a restaurant is one of my keenest pleasures. Meeting
            someplace with old and new friends, ordering wine, eating food,
            surrounded by strangers, I think is the core of what it means to
            live a civilised life.
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
              Book your reservation
            </Heading>
            <Text fontFamily="var(--Libre-Baskerville)" fontSize="1.2rem">
              Rosemary Open :
            </Text>
            <Text
              fontFamily="var(--Libre-Baskerville)"
              fontSize="1.2rem"
              textDecor="underline"
            >
              Mondays - Sunday at 09:00 - 21:00
            </Text>
            <Text
              fontFamily="var(--Libre-Baskerville)"
              fontSize="1.2rem"
              mt="1rem"
            >
              Note :
            </Text>
            <Text
              fontFamily="var(--Libre-Baskerville)"
              fontSize="1.2rem"
              textDecor="underline"
            >
              Number of person maximum 11 persons.
            </Text>
            <Text
              fontFamily="var(--Libre-Baskerville)"
              fontSize="1.2rem"
              w={{ lg: "80%" }}
            >
              If you want to book reservation a group of people, please contact
              rosemary's number or email.
            </Text>
          </Box>
          <FormControl
            w={{ lg: "49%" }}
            as="form"
            onSubmit={reservationSubmitHandler}
          >
            <Stack spacing="20px">
              <Input
                variant="outline"
                placeholder="FIRSTNAME*"
                bgColor="#E2E8F0"
                fontFamily="var(--Bebas-Neue)"
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                textTransform="capitalize"
                isInvalid={firstnameIsInvalid ? true : false}
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                isRequired={true}
                onBlur={firstNameBlur}
              />
              {firstnameIsInvalid && (
                <Text fontFamily="var(--Poppins)" color="red">
                  Please enter the firstname ☝️
                </Text>
              )}
              <Input
                variant="outline"
                placeholder="LASTNAME*"
                bgColor="#E2E8F0"
                fontFamily="var(--Bebas-Neue)"
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                textTransform="capitalize"
                isInvalid={lastnameIsInvalid ? true : false}
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                isRequired={true}
                onBlur={lastNameBlur}
              />
              {lastnameIsInvalid && (
                <Text fontFamily="var(--Poppins)" color="red">
                  Please enter the lastname ☝️
                </Text>
              )}
              <Input
                variant="outline"
                placeholder="EMAIL*"
                textTransform="lowercase"
                bgColor="#E2E8F0"
                fontFamily="var(--Bebas-Neue)"
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                isInvalid={emailIsInvalid ? true : false}
                isRequired={true}
                onBlur={emailBlur}
              />
              {emailIsInvalid && (
                <Text fontFamily="var(--Poppins)" color="red">
                  Please enter a valid email ☝️
                </Text>
              )}
              <NumberInput
                min={1}
                max={11}
                bgColor="#E2E8F0"
                fontFamily="var(--Bebas-Neue)"
                color="#494949"
                onChange={(e) => setPerson(e)}
                isInvalid={personIsInvalid ? true : false}
                isRequired={true}
                value={person}
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
              {personIsInvalid && (
                <Text fontFamily="var(--Poppins)" color="red">
                  Please enter a valid number min 1 person and max 11 persons ☝️
                </Text>
              )}
              <Input
                type="date"
                variant="outline"
                placeholder="date*"
                bgColor="#E2E8F0"
                fontFamily="var(--Bebas-Neue)"
                letterSpacing="2px"
                borderRadius="0"
                color="#494949"
                required
                onChange={(e) => setDate(e.target.value)}
                isInvalid={dateIsInvalid ? true : false}
                isRequired={true}
                onBlur={dateBlur}
              />
              {dateIsInvalid && (
                <Text fontFamily="var(--Poppins)" color="red">
                  Please enter a valid date ☝️, date before today is invalid!
                </Text>
              )}
              <Select
                placeholder="-- Choose Time --"
                bgColor="#E2E8F0"
                fontFamily="var(--Bebas-Neue)"
                letterSpacing="1.5px"
                borderRadius="0"
                color="#494949"
                onChange={(e) => setTime(e.target.value)}
                isInvalid={timeIsInvalid ? true : false}
                isRequired={true}
                onBlur={timeBlur}
              >
                {openingHours.map((hour, index) => {
                  return (
                    <option key={index} value={hour}>
                      {hour}
                    </option>
                  );
                })}
              </Select>
              {timeIsInvalid && (
                <Text fontFamily="var(--Poppins)" color="red">
                  Please enter a valid time ☝️
                </Text>
              )}
              <Box d="flex" justifyContent="flex-end">
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
                    disabled={isLoading ? true : false}
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
      <Footer />
    </>
  );
};

export default Reservation;
