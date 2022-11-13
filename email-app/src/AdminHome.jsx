import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, Divider, Flex, Heading, HStack, Image, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import CampaignCard from './CampaignCard'
import CampaignCard2 from './Campaigncard2'
const campaignData=[
    {
    "src":"https://us8.admin.mailchimp.com/images/app-homepage/onboarding-checklist/email.svg",
    "label":"Send Your First Mail",
    "desc":"Choose a pre-designed template or use our drag-and-drop builder to launch a campaign in minutes.",
    "buttontext":"Create Email"
},
{
    "src":"https://us8.admin.mailchimp.com/images/app-homepage/onboarding-checklist/automation-img.svg",
    "label":"Create an automation",
    "desc":"Choose a pre-designed template or use our drag-and-drop builder to launch a campaign in minutes.",
    "buttontext":"Start automation"
},
{
    "src":"https://us8.admin.mailchimp.com/images/app-homepage/onboarding-checklist/website-img.svg",
    "label":"Create a website",
    "desc":"Choose a pre-designed template or use our drag-and-drop builder to launch a campaign in minutes.",
    "buttontext":"Build website"
},
]
const campaignData2=[
    {
    "src":"https://us8.admin.mailchimp.com/images/app-homepage/onboarding-checklist/popup-form.png",
    "label":"Pop-up-form",
    "desc":"Gather contacts up to 50% faster with pop-ups that  appear when and where you want them",
    "buttontext":"Create form"
},


{
    "src":"https://us8.admin.mailchimp.com/images/app-homepage/onboarding-checklist/embedded-form.png",
    "label":"Embedded form",
    "desc":"Embedded  a signup form on your website's footer or sidebar ",
    "buttontext":"Create form"
},
{
    "src":"https://us8.admin.mailchimp.com/images/front-door/redesign/recommendations-embedded.png",
    "label":"Sign up landing page",
    "desc":"Collect email addresses in exchange for a discount, giveaway , or free download",
    "buttontext":"Building landing page"
},
]
const AdminHome = () => {
  return (
    <div>
        <Heading ml={20} mb='7' pt={20} fontFamily="Heading" color={"gray.700"}>Home</Heading>
        <Divider />
        <Container centerContent mt={20} borderColor="red" border={"1px"} maxW="1100px">
        <Accordion allowToggle w="100%">
            <AccordionItem >
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' color={"blue.300"} mt='6' mb="6" fontSize={"2xl"} >
                      Create Your First Campaign
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                        <Heading mb={10}>Choose how you’d like to start  </Heading>
                        <Stack direction={{"base":"row","sm":"column","md":"column","lg":"row"}} spacing="10" mb="10">
                                {campaignData.map((el)=><CampaignCard src={el.src} label={el.label} desc={el.desc} bt={el.buttontext}/>)}
                        </Stack>
                        <Text fontWeight={300}>Have something else in mind?</Text>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' color={"blue.300"} mt='6' mb="6" fontSize={"2xl"}>
                    Grow Your Audience
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Heading mb={10} >Collect new contacts with signup forms</Heading>
                     <Stack direction={{"base":"row","sm":"column","md":"column","lg":"row"}} spacing="10" mb="10">
                                {campaignData2.map((el)=><CampaignCard2 src={el.src} label={el.label} desc={el.desc} bt={el.buttontext}/>)}
                        </Stack>
                        <Text fontWeight={600}>Want to add your exsisting contacts to Mailchimp ?</Text>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' color={"blue.300"} mt='6' mb="6" fontSize={"2xl"}>
                    Launch
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <HStack spacing={10}>

                        <Box>
                                <Heading mb={10} fontSize="28">You haven't started a campaign yet . let’s change that </Heading>
                                
                                <Text fontWeight={600}>Start at stepone , or choose from among these ?</Text>
                        </Box>
                        <Image src="https://us8.admin.mailchimp.com/images/app-homepage/onboarding-checklist/launch-incomplete.svg" alt=""/>
                    </HStack>
                </AccordionPanel>
            </AccordionItem>
       </Accordion>
       <Divider marginTop={20} color="gray.200"/>




       <Stack mt="20" spacing={10} direction={{"base":"row","sm":"column","md":"column","lg":"row"}}>
            <VStack spacing={5}>
                <HStack spacing={{"sm":"30","md":"30","lg":"40"}} textAlign="left">
                    <Box><Text fontWeight={600} fontSize={28}>Here's what's happening</Text></Box>
                    
                    <Box><Text fontSize={20}color='blue.300'>Filter by:</Text></Box>
                </HStack>
                <Box backgroundColor={"gray.100"} py="10" pl="10" w="80%">
                       <Text fontWeight={600} fontSize={23} mb="10" w="80%">This section is your feed . Your most important marketing activity will show up here .</Text>
                       <Text fontSize={15}  mb="10">Once your campaign is underway, things will look a lot more exciting</Text>
                       <Button  mb="10" colorScheme='teal' variant='outline'>Create a campaign</Button>
                </Box>

            </VStack>
            
            <VStack spacing={25} w="500px">
                <HStack spacing={20} textAlign="left">
                    <Box><Text fontWeight={600} fontSize={12}>Total Audeince</Text></Box>
                    
                    <Box><Text fontSize={12} color='blue.300'>Add contacts</Text></Box>
                </HStack>
                <Divider/>
                <Box  di>
                    <Heading>1</Heading>
                    
                    <Box><Text fontSize={15} color='blue.300'>+1(+100%)this week</Text></Box>
                </Box >
                  <Text fontSize={15} fontWeight={600}>Total audeince breakdown</Text>
                  <Text fontSize={15}>organisation</Text>
                  <Box><Text fontSize={15} color='blue.300'>+1(+100%)this week</Text></Box>

            </VStack>
       </Stack>
       </Container>

    </div>
  )
}

export default AdminHome