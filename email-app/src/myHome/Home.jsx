import { Box, Heading, Text, Button} from "@chakra-ui/react";
import React, { useState } from "react";

import Desx1 from "../Assets/Desktop_Card1.webp";
import Desx2 from "../Assets/Desktop_Card2.webp";
import Desx3 from "../Assets/Desktop_Card3.webp";
import Desx4 from "../Assets/Desktop_Card4.webp";
import GridOne from "./grid1";
import "./home.style.css";
import VideoPoster from "../Assets/videoposter.webp"
import Video from "../Assets/video.mp4";
import VideoPlayer from 'react-video-js-player';

let Data = [
  {
    id: 1,
    image: Desx1,
    text: "Send the right message at the right time to convert more customers.",
    heading: "Convert with Automations",
    bg: "#d99536",
  },
  {
    id: 2,
    image: Desx2,
    text: "Get AI-assisted suggestions to help make your content more engaging.",
    heading: "Optimize with Ai & Analytics",
    bg: "#e7b75f",
  },
  {
    id: 3,
    image: Desx3,
    text: "Boost customer loyalty by predicting the right ones to target.",
    heading: "Target with Segmentaton",
    bg: "#fdf8ea",
  },
  {
    id: 4,
    image: Desx4,
    text: "Connect more tools, get more data, save time and make better decisions.",
    heading: "Sync with integrations",
    bg: "#ffffff",
  },
];

function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [gridData] = useState(Data);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Box w="100%" height="auto">
      {/* section top  */}
      <Box
        w="90%"
        height="auto"
        margin="auto"
        border="2px solid green"
        mb={{ base: "18px", md: "30px", lg: "60px" }}
      >
        <Heading
          margin="auto"
          fontFamily=""
          fontSize={{ base: "24px", md: "38px", lg: "48px" }}
          w="60%"
          textAlign="center"
        >
          Turn Emails into Revenue
        </Heading>
        <Text
          margin="auto"
          fontWeight={400}
          mt={{ base: "16px", md: "18px", lg: "25px" }}
          fontSize={{ base: "16px", md: "18px", lg: "25px" }}
          w="62%"
          border="1px solid red"
          textAlign="center"
          lineHeight={1.5}
        >
          Win new customers with the #1 email marketing and automations brand*
          that recomends ways to get more opens, clicks and sales.
        </Text>
        <Button
          display="block"
          margin="auto"
          mt={{ base: "16px", md: "18px", lg: "25px" }}
          fontSize="13px"
          borderRadius="50px"
          w="120px"
          h="50px"
          border="1px solid black"
          bg="#ffe01b"
          style={{
            borderBottom: isHovering ? "6px solid black" : "",
            background: isHovering ? "#ffe01b" : "",
            transition: isHovering ? "0.4s" : "",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Sign Up
        </Button>
      </Box>

      {/* gird section  */}
      <Box className="gridData">
        {gridData.map((el, i) => (
          <Box key={i}>
            {console.log("vbh", el.text)}

            <GridOne
              key={el.id}
              image={el.image}
              text={el.text}
              heading={el.heading}
              bg={el.bg}
            />
          </Box>
        ))}
      </Box>


      {/* video section */}
      <Box height="auto" width="100%" bg="#241c15" pt="100px" pb="100px">
        <Box width="80%" height={{base: "50vh", md: "70vh", lg: "90vh" }} margin="auto" border="1px solid red">

      <VideoPlayer
                    controls={true}
                    src={Video}
                    poster={VideoPoster}
                   className="videoplayer"
                />
        </Box>
      </Box>

      {/* pricing sections */}
    </Box>
  );
}

export default Home;



