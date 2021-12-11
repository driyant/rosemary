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
import { useToast, Spinner } from '@chakra-ui/react';

const DUMMY_TIME_DATA = [
  { value: "09:00", label: "09:00" },
  { value: "10:00", label: "10:00" },
  { value: "11:00", label: "11:00" },
  { value: "12:30", label: "12:00" },
  { value: "13:00", label: "13:00" },
  { value: "14:30", label: "14:00" },
  { value: "15:00", label: "15:00" },
  { value: "16:30", label: "16:00" },
  { value: "17:00", label: "17:00" },
  { value: "18:30", label: "18:00" },
  { value: "19:00", label: "19:00" },
  { value: "20:30", label: "20:00" },
  { value: "21.00", label: "21:00" },
];

const Reservation = () => {
  const [firstname,setFirstname] = useState("");
  const [firstnameIsInvalid, setFirstnameIsInvalid] = useState(false);
  const [lastname, setLastname] = useState("");
  const [lastnameIsInvalid, setLastnameIsInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [person,setPerson] = useState(0);
  const [personIsInvalid, setPersonIsInvalid] = useState(false);
  const [date,setDate] = useState("");
  const [dateIsInvalid, setDateIsInvalid] = useState(false);
  const [time, setTime] = useState("");
  const [timeIsInvalid, setTimeIsInvalid] = useState(false);
  const [loadingIsShow, setLoadingIsShow] = useState(false);
  const toast = useToast();


  let today = new Date();
  let todayNow = today.toISOString().substring(0,10);

  useEffect(() => {
    if (firstname !== "") {
      setFirstnameIsInvalid(false);
    }
  }, [firstname]);

  useEffect(() => {
    if (lastname !== "") {
      setLastnameIsInvalid(false)
    }
  }, [lastname]);

  useEffect(() => {
    if (email !== "" && email.includes("@")) {
      setEmailIsInvalid(false)
    }
  },[email]);

  useEffect(() => {
    if (person > 0 && person <= 11) {
      setPersonIsInvalid(false);
    }
  }, [person]);

  useEffect(() => {
    if (date  !== "" && date > todayNow) {
      setDateIsInvalid(false);
    }
  }, [date]);

  useEffect(() => {
    if (time !== "") {
      setTimeIsInvalid(false);
    }
  }, [time]);

  const reservationSubmitHandler = (e) => {
    e.preventDefault();
    if (firstname === "") {
      setFirstnameIsInvalid(true);
      return;
    } else if (lastname === "") {
      setLastnameIsInvalid(true);
      return;
    } else if (email === "") {
      setEmailIsInvalid(true);
      return;
    } else if (Number(person)  <= 0 || Number(person) >= 11) {
      setPersonIsInvalid(true);
      return;
    } else if (date < todayNow || date === "") {
      setDateIsInvalid(true);
      return;
    } else if (time === "") {
      setTimeIsInvalid(true);
      return;
    }
    setLoadingIsShow(true);
    const reservationData = {
      "firstname" : firstname,
      "lastname" : lastname,
      "email" : email.toLocaleLowerCase(),
      "person" : Number(person),
      "date" : date,
      "time" : time
    }   
    fetch(`${process.env.REACT_APP_RESERVATION}`, {
      method: "POST",
      body : JSON.stringify(reservationData),
      headers: {
        "Content-Type" : "application/json"
      }
    }).then((res) => {
      if (res.ok) {
        toast({
          title: 'Thank you 😀',
          description: `Hi ${reservationData.firstname}, your booking reservation has been sent successfully! Please kindly check your email in inbox/spam if it gets accepted!`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        setFirstname("");
        setLastname("");
        setPerson("");
        setEmail("");
        setLoadingIsShow(false);
        e.target.reset();
        return;
      }
      if (res.status===409) {
        toast({
          title: 'Sorry 🙁',
          description: "Booking date or time already exist! Please change the date or time ",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        setLoadingIsShow(false);
        return;
      }
      if (!res.ok) {
        toast({
          title: 'Sorry 🙁, there is an issue, ',
          description: `If this problem still persists you can contact us for your reservation.`,
          status: 'error',
          duration: 9000,
          isClosable: true
        });
        setLoadingIsShow(false);
      }
    }).catch((err) => {
      toast({
        title: 'Sorry 🙁, there is an issue, ',
        description: `If this problem still persists you can contact us for your reservation. ${err}`,
        status: 'error',
        duration: 9000,
        isClosable: true
      });
      setLoadingIsShow(false);
    })
  }
  return (
    <>
      <Nav />
      <Header bgImage={beachResort} bgColor="rgba(0, 0, 0, 0.5)">
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
              Number of person only maximum 11 persons.
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
          <FormControl w={{ lg: "49%" }} as="form" onSubmit={reservationSubmitHandler}>
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
                onChange={(e) =>  setFirstname(e.target.value)}
                value={firstname}
                isRequired={true}
              />
              { firstnameIsInvalid && <Text fontFamily="var(--Poppins)" color="red">Please enter the firstname ☝️</Text>}
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
              />
              { lastnameIsInvalid && <Text fontFamily="var(--Poppins)" color="red">Please enter the lastname ☝️</Text>}
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
              />
              { emailIsInvalid && <Text fontFamily="var(--Poppins)" color="red">Please enter a valid email ☝️</Text>}
              <NumberInput
                min={0}
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
              { personIsInvalid && <Text fontFamily="var(--Poppins)" color="red">Please enter a valid number min 1 person and max 11 persons ☝️</Text>}
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
                isInvalid={dateIsInvalid ? true: false}
                isRequired={true}
              />
              { dateIsInvalid && <Text fontFamily="var(--Poppins)" color="red">Please enter a valid date ☝️</Text>}
              <Select
                placeholder="-- Choose Time --"
                bgColor="#E2E8F0"
                fontFamily="var(--Bebas-Neue)"
                letterSpacing="1.5px"
                borderRadius="0"
                color="#494949"
                onChange={(e) =>setTime(e.target.value)}
                isInvalid={timeIsInvalid ? true : false}
                isRequired={true}
              >
                {DUMMY_TIME_DATA.map((time) => {
                  return <option key={time.value}>{time.label}</option>;
                })}
              </Select>
              { timeIsInvalid && <Text fontFamily="var(--Poppins)" color="red">Please enter a valid time ☝️</Text>}
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
                   
                    Submit
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

export default Reservation;
