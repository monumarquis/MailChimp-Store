import { Box, Text, Heading,Button } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import "./pricing.style.css";
function Pricing() {
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
          <Heading>Primium</Heading>
          <Text>
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
            <Text textDecoration="underline">
              Custom-Coded and Pre-built Email Templates
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">Multivariate and A/B Testing</Text>
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
        {/* ----2----- */}
        <Box className="cards3">
          <Heading>Primium</Heading>
          <Text>
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
            <Text textDecoration="underline">
              Custom-Coded and Pre-built Email Templates
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">Multivariate and A/B Testing</Text>
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
        {/* ------3--------- */}
        <Box className="cards4" >
          <Heading>Primium</Heading>
          <Text>
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
            <Text textDecoration="underline">
              Custom-Coded and Pre-built Email Templates
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
            <Text textDecoration="underline">Multivariate and A/B Testing</Text>
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
        {/* -------4--------- */}
      </Box>
      <Text fontSize={12} mt="20px" textAlign="center">*Overages apply if contact or email send limit is exceeded. Free plan sending will be paused if contact or email send limit is exceeded. Learn more</Text>
    <Button display="block" margin="auto" mt="50px" border="1px solid black" bg="#ffe01b" borderRadius={50} height="50px" width="200px" fontWeight={0} >See all plan Details</Button>
    </Box>
  );
}
export default Pricing;
