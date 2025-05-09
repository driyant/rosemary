import { Box } from "@chakra-ui/react";

const Header = (props) => {
  return (
    <>
      <Box
        mt="150px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="#FFFFFF"
        bgImage={props.bgImage}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        bgBlendMode="darken"
        bgColor={props.bgColor}
        height="50vh"
      >
        {props.children}
      </Box>
    </>
  );
};

export default Header;
