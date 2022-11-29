import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import styles from "./Category.module.css";

const Category = ({ categories, filterCategories, activeLink }) => {
  return (
    <>
      <SimpleGrid
        minChildWidth="120px"
        spacing="10px"
        transition="all 0.5s ease"
      >
        {categories.map((category, index) => {
          return (
            <Box
              className={ activeLink === category ? `${styles.active}` : "" }
              key={index}
              textAlign="center"
              h="40px"
              d="flex"
              justifyContent="center"
              alignItems="center"
              fontFamily="var(--Bebas-Neue)"
              fontSize="1.2rem"
              letterSpacing="1.5px"
              cursor="pointer"
              _hover={{
                color: "#CD916D",
                transition: "0.5s ease",
              }}
              onClick={() => filterCategories(category)}
            >
              {category}
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Category;
