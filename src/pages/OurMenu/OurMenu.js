import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Category from "../../components/Category/Category";
import Menu from "../../components/Menu/Menu";
import SectionService from "../../components/SectionService/SectionService";
import Footer from "../../components/Footer/Footer";
import { Box, Heading, Text, Container, Spinner } from "@chakra-ui/react";
import restaurantImage from "../../images/restaurant-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchMenu } from "../../store/action";

const OurMenu = () => {
  const dispatch = useDispatch();
  const { categories, menu, isLoading } = useSelector(state => state);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [activeLink, setActiveLink] = useState("all");

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchMenu()).then(data => setFilteredMenu(data))
  }, []);

  const filterCategories = (category) => {
    if (category === "all") {
      setFilteredMenu(menu);
      setActiveLink("all");
      return;
    }
    const newMenu = menu.filter((menu) => menu.category.name === category);
    setFilteredMenu(newMenu);
    setActiveLink(category);
  };

  return (
    <>
      <Nav />
      <Header bgImage={restaurantImage} bgColor="rgba(0, 0, 0, 0.4)">
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
            Our Menu
          </Heading>
          <Text
            fontSize="1.2rem"
            fontFamily="var(--Libre-Baskerville)"
            alt=" Mickey Gilley"
          >
            If you have good food, people will come to your restaurant.
          </Text>
        </Box>
      </Header>
      <Box as="main" d="flex" justifyContent="center" alignItems="center">
        <Container my={{ base: "2rem", lg: "5rem" }} maxWidth={{ lg: "90%" }}>
          <Box
            d="flex"
            justifyContent="center"
            alignItems="center"
            flexFlow="column nowrap"
          >
            {isLoading && (
              <Box
                mx="auto"
                d="flex"
                flexFlow="column"
                justifyContent="center"
                alignItems="center"
                mb="1.5rem"
              >
                <Spinner mx="auto" color="#CD916D" mb="1rem" size="sm" />
                <Text
                  fontFamily="var(--Bebas-Neue)"
                  fontSize="1.2rem"
                  letterSpacing="2px"
                  mx="auto"
                >
                  Loading Categories.....
                </Text>
              </Box>
            )}
          </Box>
          {!isLoading && (
            <Category
              categories={categories}
              filterCategories={filterCategories}
              activeLink={activeLink}
            />
          )}

          {isLoading && (
            <Box
              mx="auto"
              d="flex"
              flexFlow="column"
              justifyContent="center"
              alignItems="center"
            >
              <Spinner mx="auto" color="#CD916D" mb="1rem" size="md" />
              <Text
                mx="auto"
                fontFamily="var(--Bebas-Neue)"
                fontSize="1.2rem"
                letterSpacing="2px"
              >
                Loading Menu.....
              </Text>
            </Box>
          )}
          {/* {!isLoading && <Menu menus={filteredMenu} />} */}
          <Menu menus={filteredMenu} isLoading={isLoading}/>
        </Container>
      </Box>
      <SectionService />
      <Footer />
    </>
  );
};

export default OurMenu;
