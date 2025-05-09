import React, { use, useEffect, useState } from "react";
import Header from "@/components/Header";
import Category from "@/components/Category";
import Menu from "@/components/Menu";
import SectionService from "@/components/SectionService";
import { Box, Heading, Text, Container, Spinner } from "@chakra-ui/react";
import restaurantImage from "@/assets/restaurant-1.jpg";
import useIndexStore from "@/store";
import { baseUrl, getCategoriesUrl, getMenuUrl } from "@/utils/constant";

const OurMenu = () => {
  const categories = useIndexStore((state) => state.categories);
  const menu = useIndexStore((state) => state.menu);
  const setCategories = useIndexStore((state) => state.setCategories);
  const setMenu = useIndexStore((state) => state.setMenu);
  const [filteredMenu, setFilteredMenu] = useState(menu);
  const [activeLink, setActiveLink] = useState("all");
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [isMenuLoading, setIsMenuLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      setIsCategoryLoading(true);
      const resp = await fetch(`${getCategoriesUrl}`);
      const data = await resp.json();
      if (resp.ok) {
        const newCategories = ["all", ...data.map((el) => el.name)];
        setCategories(newCategories);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsCategoryLoading(false);
    }
  };

  const fetchMenu = async () => {
    try {
      setIsMenuLoading(true);
      const resp = await fetch(`${getMenuUrl}`);
      const data = await resp.json();
      if (resp.ok) setMenu(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsMenuLoading(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        // await Promise.all([fetchCategories(), fetchMenu()]);
        fetchCategories().then(() => fetchMenu());
      } catch (error) {
        console.error("Failed to load initial data:", error);
      }
    };
    loadData();
  }, []);

  const filterCategories = (category) => {
    if (category === "all") {
      setFilteredMenu(menu);
      setActiveLink("all");
    } else {
      const newMenu = menu.filter((el) => el.category.name === category);
      setFilteredMenu(newMenu);
      setActiveLink(category);
    }
  };

  return (
    <>
      <Header bgImage={restaurantImage} bgColor="rgba(0, 0, 0, 0.4)">
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
            fontSize="2rem"
            mb="1rem"
            letterSpacing="2px"
          >
            Our Menu
          </Heading>
          <Text
            fontSize="1.2rem"
            fontFamily={"Libre Baskerville"}
            alt=" Mickey Gilley"
          >
            If you have good food, people will come to your restaurant.
          </Text>
        </Box>
      </Header>
      <Box as="main" display="flex" justifyContent="center" alignItems="center">
        <Container my={{ base: "2rem", lg: "5rem" }} maxWidth={{ lg: "90%" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexFlow="column nowrap"
          >
            {isCategoryLoading && (
              <Box
                mx="auto"
                display="flex"
                flexFlow="column"
                justifyContent="center"
                alignItems="center"
                mb="1.5rem"
              >
                <Spinner mx="auto" color="#CD916D" mb="1rem" size="sm" />
                <Text
                  fontFamily={"Bebas Neue"}
                  fontSize="1.2rem"
                  letterSpacing="2px"
                  mx="auto"
                >
                  Loading Categories.....
                </Text>
              </Box>
            )}
          </Box>

          {!isCategoryLoading && (
            <Category
              categories={categories}
              filterCategories={filterCategories}
              activeLink={activeLink}
            />
          )}

          {isMenuLoading && (
            <Box
              mx="auto"
              display="flex"
              flexFlow="column"
              justifyContent="center"
              alignItems="center"
            >
              <Spinner mx="auto" color="#CD916D" mb="1rem" size="md" />
              <Text
                mx="auto"
                fontFamily={"Bebas Neue"}
                fontSize="1.2rem"
                letterSpacing="2px"
              >
                Loading Menu.....
              </Text>
            </Box>
          )}
          {!isMenuLoading && <Menu menus={filteredMenu} />}
          {/* <Menu
            menus={!filteredMenu ? menu : filteredMenu}
            isMenuLoading={isMenuLoading}
          /> */}
        </Container>
      </Box>
      <SectionService />
    </>
  );
};

export default OurMenu;
