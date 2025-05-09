import { Box, Text } from "@chakra-ui/react";

const Menu = ({ menus }) => {
  return (
    <>
      <Box
        display="flex"
        flexFlow="column"
        width={{ base: "100%", lg: "100%" }}
        px="1rem"
        mt="4rem"
        fontFamily={"Bebas Neue"}
      >
        {menus?.length === 0 ? (
          <Text textAlign="center" fontSize="1rem" letterSpacing="2px">
            No data menu available.
          </Text>
        ) : (
          menus?.map((menu) => {
            return (
              <Box
                key={menu.id}
                mb="1rem"
                display="flex"
                flexFlow="column nowrap"
                borderBottom="1.5px solid rgba(161, 161, 161, 0.8)"
              >
                <Box
                  display="flex"
                  flexFlow="row nowrap"
                  fontFamily={"Libre Baskerville"}
                  fontSize="1.1rem"
                >
                  <Box w="80%">
                    <Text> {menu.name}</Text>
                  </Box>
                  <Box w="20%" textAlign="right">
                    $ {menu.price}
                  </Box>
                </Box>
                <Text
                  fontFamily={"Poppins"}
                  fontSize="0.875rem"
                  fontWeight="500"
                  textTransform="uppercase"
                  lineHeight="auto"
                  letterSpacing="1px"
                  color="gray"
                  my="10px"
                >
                  {menu.description}
                </Text>
              </Box>
            );
          })
        )}
      </Box>
    </>
  );
};

export default Menu;
