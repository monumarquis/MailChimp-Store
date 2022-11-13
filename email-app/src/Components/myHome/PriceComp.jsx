import "./PriceComp.style.css";
import Pricing from  "../../Assets/pricing.webp"
import SpotMagic from  "../../Assets/spot-magic.webp"
import Searchimg from  "../../Assets/searchimg.png"
import Googleicons from  "../../Assets/googleIcons.png"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,

  
} from '@chakra-ui/react'
import Footer from"../Footer/Footer"
import {AddIcon, MinusIcon,} from "@chakra-ui/icons"
// import { useState } from "react";
import { Box, Heading, Text, Button ,Image ,Input} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
function PriceComp() {

  
  return (
    <Box w="100%" h="auto">
      {/* -----------------navbar----------------- */}

      <Box className="price-C">
        <Box className="price-section1">
          <Heading mb="20px">Plus</Heading>
          <Text mb="20px" fontSize={{ bs: "15px", md: "16px", lg: "18px" }}>
            All websites & commerce features and our lowest transaction fees for
            scaling businesses.
          </Text>
          <Text>Starts at</Text>
          <Text display="flex">
            ₹ <Heading>2,388</Heading>
          </Text>
          <Text mb="10px">/month</Text>
          <Text mb="30px" fontSize={{ bs: "15px", md: "16px", lg: "18px" }}>
            + .5% transaction fee and Stripw processing fees*
          </Text>
          <Box w="100%" h="50px" borderRadius="50px" bg="black">

          <Button
            className="btn-signup"
            w="100%"
            h="50px"
            borderRadius="50px"
            background="#ffe01b"
            border="1px solid black"
           pos='-moz-initial'
          >
            Buy Now
          </Button>
          </Box>
        </Box>

        <Box className="price-section2">
          <Heading mb="20px">Core</Heading>
          <Text mb="20px" fontSize={{ bs: "15px", md: "16px", lg: "18px" }}>
            Website customization, 24/7 support, and lower transaction fees for
            growing businesses.
          </Text>
          <Text>Starts at</Text>
          <Text display="flex" >
            ₹ <Heading >823</Heading>
          </Text>
          <Text mb="10px">/month</Text>
          <Text mb="30px" fontSize={{ bs: "15px", md: "16px", lg: "18px" }}>
            + 1.5% transaction fee and Stripw processing fees*
          </Text>
          <Box w="100%" h="50px" borderRadius="50px" bg="black">

          <Button
            className="btn-signup"
            w="100%"
            h="50px"
            borderRadius="50px"
            background="#ffe01b"
            border="1px solid black"
            pos='-moz-initial'
          >
            Buy Now
          </Button>
          </Box>
        </Box>

        <Box className="price-section3">
          <Heading mb="20px">Free</Heading>
          <Text mb="20px" fontSize={{ bs: "15px", md: "16px", lg: "18px" }}>
            Everything businesses need to build a website and launch a store.
          </Text>
          <Text>Starts at</Text>
          <Text display="flex">
            ₹ <Heading>0</Heading>
          </Text>
          <Text mb="10px">/month</Text>
          <Text mb="30px" fontSize={{ bs: "15px", md: "16px", lg: "18px" }}>
            + 2% transaction fee and Stripw processing fees*
          </Text>
          <Box w="100%" h="50px" borderRadius="50px" bg="black">

          <Button
            className="btn-signup"
            w="100%"
            h="50px"
            borderRadius="50px"
            background="#ffe01b"
            border="1px solid black"
            pos='-moz-initial'
          >
           <NavLink to='/signup'>Buy Now</NavLink> 
          </Button>
          </Box>
        </Box>
      </Box>
      {/* -------------- */}
      <Box w="100%" h="auto"  mt="50px" mb="80px">
        <Box display="block"
          margin="auto"
          bg="black"
          borderRadius="50px"
          h="50px"
          w="250px"
          border="none"
          mb="25px">

        <Button
          display="block"
          margin="auto"
          bg="white"
          className="btn-buy"
          border="1px solid black"
          borderRadius="50px"
          h="100%"
          w="100%"
          pos='-moz-initial'
          fontWeight={500}
        >
          Compare our plans
        </Button>
        </Box>

        <Text
          w="70%"
          display="block"
          margin="auto"
          textAlign="center"
          fontSize={17}
        >
          *All Websites & Commerce plans include access to our Mailchimp stores
          product. If you create and publish a store, transaction fees will be
          charged to you on a per transaction basis based on the total order
          value (minus promotions and discounts, plus tax and shipping) for each
          transaction. These transaction fees are non-refundable. You will also
          be charged fees by Stripe. See Stripe.com for details about Stripe
          fees.
        </Text>
      </Box>
      {/* ---------------- */}
      <Box w="100%" h="auto" pt="80px" pb="80px" bg="#f6f6f4">
        <Heading  margin="auto" mb="50px" textAlign="center" w="70%">
          Featured Product:
        </Heading>
        <Text  margin="auto" textAlign="center" mb="50px" w="70%" fontSize="19px" fontWeight={400}>
          Create unlimited one-on-one and group services with our <br /> new Advanced
          Scheduling add-on for $8/month.
        </Text>
        <Box w="150px" h="50px" bg="black" margin="auto" borderRadius="50px">
          <Button
          className="btn-buy"
            display="block"
            margin="auto"
            w="100%"
            h="100%"
            mb="50px"
            bg="#ffe01b"
            border="1px solid black"
            borderRadius="50px"
            pos='-moz-initial'
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    {/* --------------- */}

    <Box className="marketing-tool">
      <Box>
        <Image src={Pricing} alt="tools" w="100%" h="100%"></Image>
      </Box>
      <Box>
        <Heading mb="50px" fontWeight={450}>Also included: Free, built-in marketing tools</Heading>
        <Text mb="50px" fontSize={{base:"14px", md:"16px", lg:"19px"}} fontWeight={450} >All Websites & Commerce plans come with <span  style ={{color:"#04535d",fontWeight:"bolder"}}>Free marketing features </span> like email and social posting, so you can find new customers and drive sales. But if you want more advanced marketing tools, like our <span  style ={{color:"#04535d",fontWeight:"bolder"}}>Customer Journey Builder</span> , try a paid Marketing plan.</Text>
        <Box w="230px" height="50px" borderRadius="50px" bg="black" mb="50px">

        <Button  pos='-moz-initial' className="btn-buy" w="100%" h="100%" borderRadius="50px" bg="white" border="1px solid black">Explore Marketing plans</Button>
        </Box>
      </Box>
    </Box>
{/* ----------------- */}
    <Box bg="#c5dbf2" pb="80px" pt="100px" w="100%" h="auto" >
         <Heading textAlign="center">Add on powerful features</Heading>
       <Box w="70%" h="auto" bg="white" margin="auto" padding="5%" pb="-1%" mt="50px" className="search-feature">

          <Box>
            <Heading mb="40px">Add on a domain</Heading>
            <Text mb="40px" fontSize={{base:"16px",md:"18px", lg:"20px"}} fontWeight={300}>Buy a custom domain to help people find you on the web. Plus, a consistently branded online presence builds trust across email and other channels. Choose from over 200 domain extensions, including .com, .org, and .net.</Text>
            <Input mb="25px" height={100}  border="1px solid blue" placeholder="Start Your Search Here" className="search-inp" fontSize={35}></Input>
            <Box w="200px" height="60px" borderRadius="50px" bg="black" mb="50px">

                   <Button  pos='-moz-initial' className="btn-buy" w="100%" h="100%" borderRadius="50px" bg="#ffe01b" border="1px solid black">Find Your Domain</Button>
             </Box>
          </Box>
          <Box>
            <Image src={Searchimg} alt="search image" mt="90px"/>
          </Box>

       </Box>
       <Box className="hero-google" margin="auto" bg="#f6f6f4"  w="70%" h="auto" pb="40px" pt="40px" pl="25px" pr="10px" >
        <Image src={Googleicons} alt="logo"  mt="20px"></Image>
       
        <Text fontSize={{base:"16px",md:"18px", lg:"20px"}}  color="#8b8794">Add Google Workspace to your domain purchase to get a custom email address and team collaboration tools like Google Drive, Sheets, and Slides.</Text>
       </Box>
    </Box>
{/* ----------------- */}
<Box w="100%" h="auto" bg="white" mb="50px">
<Box className="templet">
  <Box className="bl" padding="10%" paddingTop={0}>
<Heading mb="40px" fontSize={{base:"20px" ,md:"25px",lg:"35px"}} fontWeight={400}>Two-factor authentication discount</Heading>
<Text mb="40px" fontSize={{base:"18px" ,md:"17.5px",lg:"19px"}}>At Mailchimp, we’re serious about security. We offer a 10% discount for 1 month when you add two-factor authentication to your Mailchimp account with an app like Google Authenticator or SMS two-factor authentication.</Text>
<Text mb="40px" fontSize={{base:"18px" ,md:"17.5px",lg:"19px"}}>Restrictions apply. See our full <a href="https://" style={{borderBottom:".1px solid black"}}> terms and conditions.</a></Text>
<Box w="150px" height="50px" borderRadius="50px" bg="black" mb="50px">

<Button pos='-moz-initial' className="btn-buy" w="100%" h="100%" borderRadius="50px" bg="white" border="1px solid black">Get Started</Button>
</Box>
  </Box>
  <Box padding="10%" paddingTop={0}>
<Heading mb="40px" fontSize={{base:"20px" ,md:"25px",lg:"35px"}} fontWeight={400}>Rates for nonprofits and charities</Heading>
<Text mb="40px" fontSize={{base:"16px" ,md:"17.5px",lg:"19px"}}>Mailchimp offers a 15% discount to nonprofits and charities. To request the discount, sign up for a free account, and contact our Billing team with your username and a link to your organization’s website.</Text>
<Text mb="40px" fontSize={{base:"16px" ,md:"17.5px",lg:"19px"}} color="white">Restrictions apply. See our full</Text>
<Box w="150px" height="50px" borderRadius="50px" bg="black" mb="50px">

<Button  pos='-moz-initial' className="btn-buy" w="100%" h="100%" borderRadius="50px" bg="white" border="1px solid black">Get Started</Button>
</Box>
  </Box>
</Box>

</Box>
{/* --------------- */}
<Box bg="#f6f6f4" pt="100px" pb="80px">
  <Box className="templet-2">
    <Box padding={30}> <Image src={SpotMagic} alt="Image"/></Box>
    <Box padding={30}>
      <Heading mb="50px">Need to help clients use Mailchimp?</Heading>
      <Text color="#837988" mb="50px" fontSize={{base:"16px" , md:"17.5px" ,lg:"19px"}}>Unlock the tools you need to get work done for clients when you sign up through Mailchimp & Co, our community for freelancers and agencies. It’s free to join with any Mailchimp plan.</Text>
      <Box  w="200px" height="60px" borderRadius="50px" bg="black" mb="50px">
          <Button  pos='-moz-initial' className="btn-buy" w="100%" h="100%" borderRadius="50px" bg="white" border="1px solid black">Find Your Domain</Button>
      </Box>
    </Box>
  </Box>
</Box>
{/* ---------FAQ------- */}
<Box bg="white" mb="100px" mt="100px">
  <Box margin="auto" w="70%" h="auto">
  <Heading>FAQs</Heading>
  <Box mt="30px">
  <Accordion allowMultiple lineHeight={1.5}>
  

  <AccordionItem pt={6} pb={6} borderTop="1px solid black">
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
             <Heading fontSize={{base:"17px",md:"20px",lg:"24px"}}  fontWeight={450}> What payment methods does Mailchimp accept?</Heading> 
            </Box>
            {isExpanded ? (
              <MinusIcon width="20px" height="20px" fontSize='12px' border="1px solid" borderRadius="50px" />
            ) : (
              <AddIcon width="20px" height="20px" fontSize='12px' border="1px solid" borderRadius="50px" />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel color="#837988" pb={4} fontSize={{base:"15px",md:"17px",lg:"20px"}}  fontWeight={300} className="accordion">
        We accept all major credit cards, PayPal, and (in select countries) direct debit. We also support transactions in a range of currencies.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem pt={6} pb={6} borderTop="1px solid black">
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
             <Heading fontSize={{base:"17px",md:"20px",lg:"24px"}}  fontWeight={450}> How much does it cost to sell from a Mailchimp online store?</Heading> 
            </Box>
            {isExpanded ? (
              <MinusIcon width="20px" height="20px" fontSize='12px' border="1px solid" borderRadius="50px" />
            ) : (
              <AddIcon width="20px" height="20px" fontSize='12px' border="1px solid" borderRadius="50px" />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel color="#837988" pb={4} fontSize={{base:"15px",md:"17px",lg:"20px"}}  fontWeight={300} className="accordion">
        There are 2 types of fees for transactions on stores. First, each transaction includes a %-based transaction fee, based on your monthly plan and total order value. We also partner with Stripe to process payments; Stripe charges fees based on your location.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem pt={6} pb={6} borderTop="1px solid black">
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
             <Heading fontSize={{base:"17px",md:"20px",lg:"24px"}}  fontWeight={450}> How much does it cost to sell from a Mailchimp online store?</Heading> 
            </Box>
            {isExpanded ? (
              <MinusIcon width="20px" height="20px" fontSize='12px' border="1px solid" borderRadius="50px" />
            ) : (
              <AddIcon width="20px" height="20px" fontSize='12px' border="1px solid" borderRadius="50px" />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel color="#837988" pb={4} fontSize={{base:"15px",md:"17px",lg:"20px"}}  fontWeight={300} className="accordion">
        Yes. If you own a domain through Mailchimp or a third-party service, you can connect it to your online store with a Core or Plus Websites & Commerce plan.        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem pt={6} pb={6} borderTop="1px solid black">
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
             <Heading fontSize={{base:"17px",md:"20px",lg:"24px"}}  fontWeight={450}> Are Mailchimp online stores available in my country?</Heading> 
            </Box>
            {isExpanded ? (
              <MinusIcon width="20px" height="20px" fontSize='12px' border="1px solid" borderRadius="50px" />
            ) : (
              <AddIcon width="20px" height="20px" fontSize='12px' border="1px solid" borderRadius="50px" />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel color="#837988" pb={4} fontSize={{base:"15px",md:"17px",lg:"20px"}}  fontWeight={300} className="accordion">
        Stores are currently only supported in the United States and United Kingdom. Any Mailchimp user can explore the feature and set up a Store, but only users who have businesses based in the UK and the US can publish a store and sell products.        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem pt={6} pb={6} borderTop="1px solid black" borderBottom="1px solid black">
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
             <Heading fontSize={{base:"17px",md:"20px",lg:"24px"}}  fontWeight={450}> How do I switch to a different plan?</Heading> 
            </Box>
            {isExpanded ? (
              <MinusIcon width="20px" height="20px" fontSize='12px' border="1px solid" borderRadius="50px" />
            ) : (
              <AddIcon width="20px" height="20px" fontSize='12px' border="1px solid" borderRadius="50px" />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel color="#837988" pb={4} fontSize={{base:"15px",md:"17px",lg:"20px"}}  fontWeight={300} className="accordion">
        You can switch to a new plan at any time by going to the Billing page in your account. Select the plan you’d like to switch to and immediately start using new features.        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  

  

</Accordion>
  </Box>

  </Box>
</Box>

{/* ---------footer section--------------- */}
   <Footer />

    </Box>
  );
}
export default PriceComp;
