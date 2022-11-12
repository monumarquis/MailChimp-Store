import { Box, Image, Text, Button } from "@chakra-ui/react";
import "./grid1.style.css";

function GridOne(props) {
  console.log("vaibav", props.image);
  return (
    <Box className="grid" position="relative">
      <Box w="100%" className="grid-Image">
        <Image src={props.image} alt="Desktop card" height={500} width="100%" />
        <Text
          position="absolute"
          top="4%"
          left="10%"
          w="80%"
          lineHeight={1.2}
          color="#59514a"
          fontWeight={400}
          fontSize={{ base: "24px", md: "38px", lg: "30px" }}
        >
          {props.heading}
        </Text>
        <Box height="auto" bg={props.bg} pb="20px">
          <Text ml={10} pt={10} fontSize="20px" fontWeight={400} width="80%">
            {props.text}
          </Text>
          <Button
            bg="none"
            display="block"
            border="1px solid black"
            ml={10}
            mt={{ base: "16px", md: "18px", lg: "25px" }}
            fontSize="16px"
            borderRadius="50px"
            w="120px"
            h="50px"
          >
            Learn more
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default GridOne;
