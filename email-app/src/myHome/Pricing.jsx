import { Box, Text, Heading,Button } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
// import { useState } from "react";
import "./pricing.style.css";
function Pricing() {
  // const [isHovering, setIsHovering] = useState(false);
  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };

  return (
    <Box bg="#f6f6f4" pb="80px">
      <Heading textAlign="center" pt="80px" mb="40px">Find the right plan</Heading>
      <Box className="price_section">
        <Box  className="cards1" >
          <Heading mb="15px">Primium</Heading>
          <Text mb="15px">
            Our most advanced tools, unlimited contacts, and priority support;
            built for teams.
          </Text>
          <Text>starts at</Text>
          <Text display="flex">
            ₹
            <span>
              {" "}
              <Heading>23,000</Heading>
            </span>
          </Text>
          <Text>/month based on 10,000 contacts*</Text>
          <Box className="pricing-child">
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
              <Text textDecoration="underline">Phone & Priority Support</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">Max Contacts:Unlimited</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline" >
              Custom-Coded and Pre-built Email Templates
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline" >Multivariate and A/B Testing</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">
              Enhanced Autometed Customer Journey
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">Predictive Segmentation</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">
              Dedicated Onboarding Specialist
            </Text>
            </Text>
          </Box>
        </Box>
        {/* -----1---- */}
        <Box className="cards2" position="relative">
{/* <Box position="absolute" top={-10} left={0} bg="#c5dbf2" border="0.1px solid rgb(186, 180, 180)" width="100%" height="40px"><Text textAlign="center" mt="8px" >Mailchimp Recommends</Text></Box> */}
          <Heading mb="15px">Standerd</Heading>
          <Text mb="15px">
          Sell even more with personalization, optimization tools, and enhanced automations          </Text>
          <Text>starts at</Text>
          <Text display="flex">
            ₹
            <span>
              {" "}
              <Heading>1,150</Heading>
            </span>
          </Text>
          <Text>/month based on 10,000 contacts*</Text>
          <Box className="pricing-child">
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
              <Text textDecoration="underline">24/7 Email & Chat Support</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">Max Contacts:Unlimited</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">
              Custom-Coded and Pre-built Email Templates
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline"> A/B Testing</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">
              Enhanced Autometed Customer Journey
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">Predictive Segmentation</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9" />
            <Text textDecoration="underline" color="#bdbbb9">
              Dedicated Onboarding Specialist
            </Text>
            </Text>
          </Box>
        </Box>
        {/* ----2----- */}
        <Box className="cards3">
          <Heading mb="15px">Essentials</Heading>
          <Text mb="30px">
          Send the right content at the right time with testing and scheduling features.
          </Text>
          <Text>starts at</Text>
          <Text display="flex">
            ₹
            <span>
              {" "}
              <Heading>770</Heading>
            </span>
          </Text>
          <Text>/month based on 500 contacts*</Text>
          <Box className="pricing-child">
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
              <Text textDecoration="underline" >24/7 Email & Chat Support</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">Max Contacts:Unlimited</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">
            Pre-built Email Templates
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline"> A/B Testing</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">
            Basic Automated Customer Journeys
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9" />
            <Text textDecoration="underline" color="#bdbbb9">Predictive Segmentation</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9"/>
            <Text textDecoration="underline" color="#bdbbb9">
              Dedicated Onboarding Specialist
            </Text>
            </Text>
          </Box>
        </Box>
        {/* ------3--------- */}
        <Box className="cards4" >
          <Heading mb="15px">Free</Heading>
          <Text mb="30px">
          Easily create email campaigns and learn more about your customers.
          </Text>
          <Text>starts at</Text>
          <Text display="flex">
            ₹
            <span>
              {" "}
              <Heading>0</Heading>
            </span>
          </Text>
          <Text>/month based on 500 contacts*</Text>
          <Box className="pricing-child">
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
              <Text textDecoration="underline">Email support for first 30 days</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">Max Contacts:Unlimited</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">
              Custom-Coded and Pre-built Email Templates
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9" />
            <Text textDecoration="underline" color="#bdbbb9"> A/B Testing</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9" />
            <Text textDecoration="underline" color="#bdbbb9">
              Enhanced Autometed Customer Journey
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9" />
            <Text textDecoration="underline" color="#bdbbb9">Predictive Segmentation</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9"/>
            <Text textDecoration="underline" color="#bdbbb9">
              Dedicated Onboarding Specialist
            </Text>
            </Text>
          </Box>
        </Box>
        {/* -------4--------- */}
      </Box>
      <Text fontSize={12} mt="20px" textAlign="center">*Overages apply if contact or email send limit is exceeded. Free plan sending will be paused if contact or email send limit is exceeded. Learn more</Text>
    {/* <Button display="block" margin="auto" mt="50px" border="1px solid black" bg="#ffe01b" borderRadius={50} height="50px" width="200px" fontWeight={0} className="plan-btn"  style={{
            borderBottom: isHovering ? "6px solid black" : "",
            paddingBottom: isHovering ? "6px" : "",
            background: isHovering ? "#ffe01b" : "",
            transition: isHovering ? "0.3s" : "",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
           >See all plan Details</Button> */}
<Box w="200px" h="50px" borderRadius="50px" bg="black" margin="auto" mt="50px">
          <Button
            className="btn-signup"
            w="100%"
            h="50px"
            borderRadius="50px"
            background="#ffe01b"
            border="1px solid black"
          >
          See all plan Details
          </Button>
          </Box>

    </Box>
  );
}
export default Pricing;
