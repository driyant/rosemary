import React from "react";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";

const Category = ({ categories, filterCategories, activeLink }) => {
  return (
    <SimpleGrid minChildWidth="120px" spacing="10px" transition="all 0.5s ease">
      {categories?.length === 0 ? (
        <Text
          textAlign="center"
          fontFamily={"Bebas Neue"}
          fontSize="1.2rem"
          letterSpacing="2px"
        >
          No categories available
        </Text>
      ) : (
        categories?.map((category) => (
          <Box
            key={category.id}
            textAlign="center"
            h="40px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontFamily={"Bebas Neue"}
            fontSize="1.2rem"
            letterSpacing="1.5px"
            cursor="pointer"
            color={activeLink === category ? "#CD916D" : "#000000"}
            _hover={{
              color: "#CD916D",
              transition: "0.5s ease",
            }}
            onClick={() => filterCategories(category)}
          >
            {category}
          </Box>
        ))
      )}
    </SimpleGrid>
  );
};

export default Category;
