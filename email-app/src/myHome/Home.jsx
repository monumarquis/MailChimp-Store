import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Integrations from "./integrations";
import Desx1 from "../Assets/Desktop_Card1.webp";
import Desx2 from "../Assets/Desktop_Card2.webp";
import Desx3 from "../Assets/Desktop_Card3.webp";
import Desx4 from "../Assets/Desktop_Card4.webp";
import Auto1 from "../Assets/autometion1.png";
import Auto2 from "../Assets/autometion2.png";
import Auto3 from "../Assets/autometion3.png";
import Auto4 from "../Assets/autometion4.png";
import Auto5 from "../Assets/autometion5.png";
import Auto6 from "../Assets/autometion6.png";
import Mobile from "../Assets/mobile.png";
import Laptop from "../Assets/laptop.png";
import Laptop2 from "../Assets/laptop2.png";
import Mobile2 from "../Assets/mobile2.png";
import GridOne from "./grid1";
import Pricing from "./Pricing";
import "./home.style.css";
import VideoPoster from "../Assets/videoposter.webp";
import Video from "../Assets/video.mp4";
import VideoPlayer from "react-video-js-player";
import Automations from "./automations";
import useWindowSize from "./WindowSize";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

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

const Autometion1 = [
  {
    id: 1,
    image: Auto1,
    heading: "Convert more customers at scale",
    text: "Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.",
  },
  {
    id: 2,
    image: Auto2,
    heading: "Discover new ways to automate",
    text: "Get a head start with pre-built journeys that help you cross-sell your products, recover abandoned carts, re-engage existing customers, and win new ones.",
  },
  {
    id: 3,
    image: Auto3,
    heading: "Keep your emails relevant and your brand growing",
    text: "Deliver personalized emails based on their buying behavior, survey responses, chat interactions, and support tickets to promote loyalty and growth.",
  },
];
const Autometion2 = [
  {
    id: 1,
    image: Auto4,
    heading:
      "Mailchimp will help you focus on your most loyal and valuable customers.",
    text: "",
  },
  {
    id: 2,
    image: Auto5,
    heading: "Predict who’s likely to buy again",
    text: "Create segments of customers based on their lifetime value and likelihood to purchase.",
  },
  {
    id: 3,
    image: Auto6,
    heading: "Build customers for life",
    text: "Use our intelligent predictions to tighten your targeting strategy, strengthen customer relationships, and drive repeat sales.",
  },
];

function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [gridData] = useState(Data);
  const [auto] = useState(Autometion1);
  const [auto2] = useState(Autometion2);
  const [height, width] = useWindowSize();
  const [lap,setLap]=useState(false);

 
  const heading1 =
    "Generate up to 4x more orders* with Customer Journey Builder automations";
  const heading2 =
    "Get up to 88% more revenue* with our Customer Lifetime Value and Likelihood to Purchase segments";
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
          textAlign="center"
          lineHeight={1.5}
        >
          Win new customers with the #1 email marketing and automations brand*
          that recomends ways to get more opens, clicks and sales.
        </Text>
        <Button
          className="btn-signup"
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
            transition: isHovering ? "0.1s" : "",
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
        <Box
          width="80%"
          height={{ base: "30vh", md: "60vh", lg: "90vh" }}
          margin="auto"
          bg="#241c15"
        >
          <VideoPlayer
            controls={true}
            src={Video}
            poster={VideoPoster}
            className="videoplayer"
          />
        </Box>
        <Text
          width="70%"
          fontSize={{ base: "16px", md: "24px", lg: "29px" }}
          textAlign="center"
          color="white"
          margin="auto"
          mt="5%"
        >
          Most email marketing platforms tell you how your campaigns perform. We
          analyze the data from the billions of emails we send to give you
          personalized recommendations for improving your content, targeting,
          and automations.
        </Text>
      </Box>

      {/* pricing sections */}
      <Pricing />

      {/* autometions 1 */}

      <Automations data={auto} heading={heading1} />


      {/* mobile section  and  laptop */}

      <Box w="100%" h="auto" mt="-120px">
        <Box className="mobile">
          <Box
            bg="#e7b75f"
            w="85%"
           margin="auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
           className="lapmob"
          >
            <Text alignItems="center" fontSize={{ base: "25px", md: "30px", lg: "40px" }} lineHeight={1.2} fontWeight={500}>
              Keep customers ready to buy with engaging content
            </Text>

            <Box mt="50px" color="black" >
              <Accordion defaultIndex={[0]}  allowMultiple >

                <AccordionItem borderBottom="1px solid black"  borderTop="1px solid black" onClick={()=>setLap(!lap)} >
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontSize={{ base: "16px", md: "18px", lg: "20px" }} fontWeight={400}>
                        Content Optimizer
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={{ base: "16px", md: "18px", lg: "20px" }} fontWeight={500}>
                    Learn how your emails compare to the top-performing
                    campaigns in your industry and get data-driven suggestions
                    for improving your copy, imagery, and layout.

                    <Text className="Learn" >Learn more  <ArrowForwardIcon bg="yellow" w="25px" h="25px" borderRadius="50%" /> </Text>
                
                  {width<990?<Image src={Mobile2} alt="laptop" width="100%" height="100%" marginTop={10}  mb={10}/>:""}

                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px solid black" onClick={()=>setLap(!lap)}  >
                  <Heading>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontSize={{ base: "16px", md: "18px", lg: "20px" }} fontWeight={400}>
                        Creative Assistant
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel pb={4} fontSize={{ base: "16px", md: "18px", lg: "20px" }} fontWeight={500}>
                  Our Creative Assistant will help you stand out by using AI to create custom designs for your brand.
                  <Text className="Learn" >Learn more  <ArrowForwardIcon bg="yellow" w="25px" h="25px" borderRadius="50%" /> </Text>
                  {width<990?<Image src={Laptop2} alt="laptop" width="100%" height="100%" marginTop={10}  mb={10}/>:""}

                  </AccordionPanel>
                </AccordionItem>

              </Accordion>
            </Box>
          </Box>
          {width > 990 ? lap ? <Image src={Laptop} alt="laptop"/> : <Image src={Mobile} alt="mobile"/> : " "}
        </Box>
      </Box>

      {/* autometions 2 */}
      <Automations data={auto2} heading={heading2} />

      {/* integrations */}
      <Integrations />

      {/* Disclamers */}
      <Box w="100%" h="auto" bg="#f6f6f4" pt="40px" pb="40px">
<Box w="95%" textAlign="left" margin="auto" fontSize={12}>
  <Text pl="16px">*Discilamers</Text>
 <Text>1. Mailchimp is the #1 email marketing and automation brand based on competitor brands' publicly available data on worldwide numbers of customers in 2021 / 2022.</Text>
<Text>2. Generate up to 4X more orders with Customer Journey Builder automations based on orders generated through user's connected stores with automations versus when they used bulk emails.</Text>
<Text>3. Get up to 88% more revenue based on emails sent with predicted segments against non-predictive segmented emails for users with connected stores only. Standard or Premium Plan only.
Availability of features and functionality varies by plan type. For details, view plans and pricing.</Text>
</Box>
      </Box>

    </Box>
  );
}

export default Home;
