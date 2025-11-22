import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Category from "@/components/Category";
import Menu from "@/components/Menu";
import SectionService from "@/components/SectionService";
import { Box, Heading, Text, Container, Spinner } from "@chakra-ui/react";
import restaurantImage from "@/assets/restaurant-1.jpg";
import useIndexStore from "@/store";
import { getMenuUrl } from "@/utils/constant";
import WrapperTitle from "@/components/Wrapper";

const OurMenu = () => {
  const categories = useIndexStore((state) => state.categories);
  const menu = useIndexStore((state) => state.menu);
  const setCategories = useIndexStore((state) => state.setCategories);
  const setMenu = useIndexStore((state) => state.setMenu);
  const [filteredMenu, setFilteredMenu] = useState(menu);
  const [activeLink, setActiveLink] = useState("all");
  const [isMenuLoading, setIsMenuLoading] = useState(false);

  const fetchMenu = async () => {
    try {
      setIsMenuLoading(true);
      const resp = await fetch(`${getMenuUrl}`);
      const data = await resp.json();
      if (resp.ok) {
        setMenu(data);
        setFilteredMenu(data);
        const uniqueCategories = [
          "all",
          ...new Set(data.map((item) => item.category.name)),
        ];
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsMenuLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const filterCategories = (category) => {
    // console.log(category);
    if (category === "all") {
      setActiveLink("all");
      setFilteredMenu(menu);
    } else {
      const newMenu = menu.filter((el) => el.category.name === category);
      setFilteredMenu(newMenu);
      setActiveLink(category);
    }
  };

  return (
    <>
      <WrapperTitle title="Our Menu">
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
        <Box
          as="main"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Container my={{ base: "2rem", lg: "5rem" }} maxWidth={{ lg: "90%" }}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexFlow="column nowrap"
            ></Box>

            {categories.length > 0 && (
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
      </WrapperTitle>
    </>
  );
};

export default OurMenu;
