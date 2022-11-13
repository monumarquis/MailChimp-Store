

import { Box, Button, Flex, Image, Text, Container } from "@chakra-ui/react";



import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import "./MarketingPage.css";
import "./MailChimp.css";

import ResourcesNavbar from "./ResourcesNavbar";
import Footer from "../Footer/Footer";


const MarketingPage = () => {
    return (
        <div>
            <Container maxW="100%"  pt={20}  >
               <ResourcesNavbar />
                <Box >
                    <Box
                        margin="auto">
                        <Box className="Marketing-Box" margin="auto" marginTop="200px" >
                            <Text fontSize="45px" fontWeight="500">Marketing meets inspiration</Text>
                        </Box>

                        <Box className="Marketing-Box" margin="auto" marginBottom="210px">
                            <Text fontSize="20px">Browse how-to articles on starting, running, and marketing your business, plus thought-provoking podcasts and films to inspire your inner entrepreneur.</Text>
                        </Box>
                    </Box>
                </Box>

                <Box
                  
                    margin="auto" >
                    <Box w="70%"
                       
                        margin="auto" bgColor="#f9e0fa" textAlign={"center"}>
                        <Box  display={"flex"} justifyContent="center">
                            <Image className="Box-Image" src="https://eep.io/images/yzco4xsimv0y/5Sn7YqszK1FVsDtNI3zdJ2/ee06f4c67cde6cc464838e1312197bfe/Customer_Retention__Overview_and_Strategies-Recirculation.jpg?w=1550&fm=webp&q=80" alt="jpg" />
                        </Box>

                        <Box>
                            <Text className="text-hover" fontSize='21px'>Topic Explainer</Text>
                        </Box>

                        <Box>
                            <Text className="text-hover" fontSize="45px">Customer Retention: Overview and Strategies</Text>
                        </Box>

                        <Box>
                            <Text >2 min</Text>
                        </Box>
                    </Box>

                    <Box w="70%"
                       
                        margin="auto" marginTop="30px">
                        <Box className="Marketing-grid" textAlign={"center"} >
                            <Box >
                                <Image w="100%" src="https://eep.io/images/yzco4xsimv0y/7MatNpD7IiTQaFU9TMUqD3/15794cb20d7ba9688e7670882ccab208/Furniture_maker_Mac_Collins.jpg?w=1550&fm=webp&q=80" alt="" />

                                <Box  bgColor="#efeeea">
                                    <Text className="text-hover" fontSize='17px' fontWeight="600">SUCCESS STORIES</Text>

                                    <Flex>
                                        <Text className="text-hover" fontSize='40px'>Furniture maker Mac Collins on heritage-led design</Text>

                                        <Box marginTop="50px" fontSize="22px" padding="10px"><BsArrowUpRight /></Box>
                                    </Flex>

                                    <Box marginTop="30px">
                                        <Text >3 min</Text>
                                    </Box>
                                </Box>
                            </Box>

                            <Box >
                                <Image w="100%" src="https://eep.io/images/yzco4xsimv0y/3prB5zDsGn3HNScOz1UOQI/e8066649a85a48397b67a8943a89a057/26_MarketingLibrary.png?w=1550&fm=webp&q=80" alt="" />

                                <Box border="solid #c5dbf2 1px" bgColor="#c5dbf2" pb="30px" >
                                    <Text className="text-hover" fontSize='17px' fontWeight="600" marginTop="80px">MAILCHIMP PRESENTS</Text>

                                    <Flex>
                                        <Text className="text-hover" fontSize='40px'>A peculiar new documentary series</Text>

                                        <Box marginTop="50px" fontSize="22px" padding="10px"><BsArrowUpRight /></Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box w="70%"
                         
                        margin="auto" marginTop="30px" marginBottom="100px" textAlign={"center"}>
                        <Box className="Marketing-Business-grid" >
                            <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding="25px">
                                <Text>EXPLORE</Text>

                                <Text fontSize="40px">Business Stages</Text>

                                <Box
                                    // border="solid red 1px"
                                    textAlign="start">
                                    <Flex className="boom-MailChimp-6B"
                                    // border="solid green 1px" 
                                    >
                                        <div style={{"marginBottom":"20px"}}>
                                            <Text w="100%" fontSize="24px" marginRight="40px">Prep & Start</Text>
                                            <Box className="boom-MailChimp-Arrow" w="9%">
                                                <Text className="Text">
                                                    <FaArrowRight />
                                                </Text>
                                            </Box>
                                        </div>
                                    </Flex>

                                    <Text fontSize="20px">Learn to write a business plan, build a brand, and turn your ambition into a successful business.</Text>
                                </Box>

                                <Box border="solid black 0.5px" mt={10} bgColor="black"></Box>

                                <Box
                                    // border="solid red 1px"
                                    textAlign="start" marginTop="20px">
                                    <Flex className="boom-MailChimp-6B" >
                                        <div style={{"marginBottom":"20px"}}>
                                            <Text w="100%" fontSize="24px" marginRight="40px">Manage & Run</Text>
                                            <Box className="boom-MailChimp-Arrow" w="9%">
                                                <Text className="Text">
                                                    <FaArrowRight />
                                                </Text>
                                            </Box>
                                        </div>
                                    </Flex>

                                    <Text fontSize="20px">Off and running? Find tips to help you lead, manage, and make your business even better.</Text>
                                </Box>

                                <Box border="solid black 0.5px" mt={10} bgColor="black"></Box>

                                <Box
                                    // border="solid red 1px"
                                    textAlign="start" marginTop="20px">
                                    <Flex className="boom-MailChimp-6B" >
                                        <div style={{"marginBottom":"20px"}}>
                                            <Text w="100%" fontSize="24px" marginRight="40px">Grow & Scale</Text>
                                            <Box className="boom-MailChimp-Arrow" w="9%">
                                                <Text className="Text">
                                                    <FaArrowRight />
                                                </Text>
                                            </Box>
                                        </div>
                                    </Flex>

                                    <Text fontSize="20px">Whether you want to grow your team, your following, or your sales, we've got ideas.</Text>
                                </Box>

                                <Box border="solid black 0.5px" mt={10} bgColor="black"></Box>


                            </Box>

                            <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding="25px" >
                                <Box marginBottom="80px">
                                    <Text>DISCOVER</Text>

                                    <Text fontSize="40px">Marketing Tactics</Text>
                                    <Box padding="10px">
                                        <div className="boom-MailChimp-6B">
                                            <div className="innerDiv">
                                                <h2> Marketing Automations</h2>
                                                <div className="boom-MailChimp-Arrow">
                                                    <Text className="Text"><FaArrowRight /></Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Box>

                                    <div className="border-bottom"></div>

                                    <Box padding="10px">
                                        <div className="boom-MailChimp-6B">
                                            <div className="innerDiv">
                                                <h2> Email</h2>
                                                <div className="boom-MailChimp-Arrow">
                                                    <Text className="Text"><FaArrowRight /></Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Box>

                                    <div className="border-bottom"></div>

                                    <Box padding="10px">
                                        <div className="boom-MailChimp-6B">
                                            <div className="innerDiv">
                                                <h2> Social Media</h2>
                                                <div className="boom-MailChimp-Arrow">
                                                    <Text className="Text"><FaArrowRight /></Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Box>

                                    <div className="border-bottom"></div>

                                    <Box padding="10px">
                                        <div className="boom-MailChimp-6B">
                                            <div className="innerDiv">
                                                <h2> Websites</h2>
                                                <div className="boom-MailChimp-Arrow">
                                                    <Text className="Text"><FaArrowRight /></Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Box>

                                    <div className="border-bottom"></div>

                                    <Box padding="10px">
                                        <div className="boom-MailChimp-6B">
                                            <div className="innerDiv">
                                                <h2> CRM</h2>
                                                <div className="boom-MailChimp-Arrow">
                                                    <Text className="Text"><FaArrowRight /></Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Box>

                                    <div className="border-bottom"></div>

                                    <Box padding="10px">
                                        <div className="boom-MailChimp-6B">
                                            <div className="innerDiv">
                                                <h2> E-commerce</h2>
                                                <div className="boom-MailChimp-Arrow">
                                                    <Text className="Text"><FaArrowRight /></Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Box>

                                    <div className="border-bottom"></div>

                                    <Box padding="10px">
                                        <div className="boom-MailChimp-6B">
                                            <div className="innerDiv">
                                                <h2> Digital Content</h2>
                                                <div className="boom-MailChimp-Arrow">
                                                    <Text className="Text"><FaArrowRight /></Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Box>

                                    <div className="border-bottom"></div>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* SUCCESS STORIES */}

                <Box
                    // border="solid green 1px" 
                    bgColor="#f6f6f4">
                    <Box w="70%"
                        // border="solid brown 1px" 
                        margin="auto" marginBottom="100px">
                        <Flex alignItems="center" textAlign="start" gap="20px">
                            <Box className="succes-stories" fontSize="40px">
                                <Text >Success stories</Text>
                            </Box>
                            <Box color="teal">
                                <BsArrowRight />
                            </Box>
                        </Flex>
                        <Box border="solid gray 0.5px" bgColor="gray"></Box>

                        <Box className="Marketing-grid-3" margin="auto" marginTop="40px">
                            <Box>
                                <Image w="100%" src="https://eep.io/images/yzco4xsimv0y/4qmNdoNCSjKhEVDmt489Q3/05c6fea5530e13d9c2519e7b1529b4fa/packupgo-metadata.png?w=760&fm=webp&q=80" alt="" />
                                <Text textAlign="start" fontWeight="600">SUCCESS STORIES</Text>
                                <Text textAlign="start" fontSize="40px">How to Sell a Surprise: 3 Tips From Pack Up + Go</Text>
                                <Text textAlign="start">Find out how this surprise travel brand prepares their customers to head to unknown destinations.</Text>
                            </Box>

                            <Box>
                                <Image w="100%" src="https://eep.io/images/yzco4xsimv0y/3SoOfHJSwdxa3aTAQaNAbk/48de2c8674345384d6b11b35feab0eeb/ShopifyIntegration-CaseStudy-SixBarrelSoda_HERO__1_.jpg?w=760&fm=webp&q=80" alt="" />
                                <Text textAlign="start" fontWeight="600">SUCCESS STORIES</Text>
                                <Text textAlign="start">See How Six Barrel Soda Uses Mailchimp’s Shopify Integration</Text>

                                <Image w="100%" marginTop="50px" src="https://eep.io/images/yzco4xsimv0y/1FftOsWsWpVeBHSQxhzGTO/3d8aef4347f804a0d3246111140aca44/Crumpets_for_Two_Baking_Kit.jpg?w=760&fm=webp&q=80" alt="" />
                                <Text textAlign="start" fontWeight="600">SUCCESS STORIES</Text>
                                <Text textAlign="start">How Honeywell Biscuit Co. Builds Customer Connection Through Empathy</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* TRENDING */}

                <Box>
                    <Box w="70%"
                        // border="solid brown 1px" 
                        margin="auto" marginBottom="100px">
                        <Box className="succes-stories" fontSize="40px" textAlign="start">
                            <Text >Trending</Text>
                        </Box>

                        <Box className="Market-trending" marginBottom="30px" marginTop="30px">
                            <Box >
                                <Image w="100%" src="https://eep.io/images/yzco4xsimv0y/6me578ks6G7bDtWuCHqMaJ/a93f4fc016ad0b16aedfa47e02de8515/1Artboard_1-100.jpg?w=760&fm=webp&q=80" alt="" />
                            </Box>
                            <Box alignItems="center">
                                <Text fontWeight="600" fontSize="70px" textAlign={"center"} >1</Text>
                            </Box>
                            <Box >
                                <Text textAlign="start" color="teal">BUSINESS TIPS</Text>
                                <Text textAlign="start" fontSize="25px" color="teal">Video Formats: Types of Video File Formats</Text>
                                <Text textAlign="start">There are different video types to be aware of, whether you’re uploading to a website or creating a short film. Learn about the types of video files here.</Text>
                            </Box>
                        </Box>

                        <Box border="solid gray 0.5px" bgColor="gray"></Box>

                        <Box className="Market-trending" marginBottom="30px" marginTop="30px">
                            <Box >
                                <Image w="100%" src="https://eep.io/images/yzco4xsimv0y/6me578ks6G7bDtWuCHqMaJ/a93f4fc016ad0b16aedfa47e02de8515/1Artboard_1-100.jpg?w=760&fm=webp&q=80" alt="" />
                            </Box>
                            <Box alignItems="center">
                                <Text fontWeight="600" fontSize="70px" textAlign={"center"} >2</Text>
                            </Box>
                            <Box >
                                <Text textAlign="start" color="teal">BUSINESS TIPS</Text>
                                <Text textAlign="start" fontSize="25px" color="teal">10 Types of Infographics and When to Use Them</Text>
                                <Text textAlign="start">Infographics are a visually-appealing way to add value to your site. Explore 10 different types of infographics and learn what info is best suited for each.</Text>
                            </Box>
                        </Box>

                        <Box border="solid gray 0.5px" bgColor="gray"></Box>

                        <Box className="Market-trending" marginBottom="30px" marginTop="20px">
                            <Box >
                                <Image w="100%" src="https://eep.io/images/yzco4xsimv0y/6me578ks6G7bDtWuCHqMaJ/a93f4fc016ad0b16aedfa47e02de8515/1Artboard_1-100.jpg?w=760&fm=webp&q=80" alt="" />
                            </Box>
                            <Box alignItems="center">
                                <Text fontWeight="600" fontSize="70px" textAlign={"center"} >3</Text>
                            </Box>
                            <Box >
                                <Text textAlign="start" color="teal">BUSINESS TIPS</Text>
                                <Text textAlign="start" fontSize="25px" color="teal">What is an Online Form Builder? Features Explained</Text>
                                <Text textAlign="start">Online form builders make it easy to gather information from visitors to your site. Learn more about website form builders and why they’re important here.</Text>
                            </Box>
                        </Box>

                        <Box border="solid gray 0.5px" bgColor="gray"></Box>

                    </Box>
                </Box>

                <Box border="solid #f6f6f4 1px" bgColor="#f6f6f4">
                    <Box w="70%"
                        margin="auto" alignContent={"center"}>
                        <Box className="Marketing-grid" marginTop="70px" marginBottom="20px" gap={20}>
                            <Box >
                                <Image w="100%" src="https://eep.io/images/yzco4xsimv0y/7vg67CzZMjTJrhkcpRszYK/d2948672ae49a101b7ac3bd4e10244f7/Inside_the_hype_business_model.png?w=760&fm=webp&q=80" alt="" />
                            </Box>

                            <Box textAlign="start">
                                <Text fontSize="40px">Inside the "hype" business model</Text>
                                <Text>Brands are suddenly flocking to street-wear's hype based business model. Here are 10 tips for creating "hype" for your products as part of your holiday marketing plan.</Text>
                                <Box w="150px" h="50px" bg="black"  borderRadius="50px" marginBottom="50px">
                                    <Button
                                        className="Marketing-btn-buy"
                                        position="-moz-initial"
                                        display="block"
                                        margin="auto"
                                        w="100%"
                                        h="100%"
                                        mt="10"
                                        mb="20px"
                                        // bg="#FFE01B"
                                        border="1px solid black"
                                        borderRadius="50px"
                                    >
                                        Read More
                                    </Button>
                                </Box>


                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* YELLOW DIV */}

                <Box
                    border="solid #ffe01b 1px"
                    bgColor="#ffe01b" marginTop="60px" textAlign={"center"}>
                    <Box margin="auto" marginTop="100px" mb="10">
                        <Text fontSize="3vw">It’s easy to get started</Text>
                    </Box>

                    <Box margin="auto" marginTop="-10px" mb="10">
                        <Text fontSize="2vw" fontWeight="300">And it’s free. Two things everyone loves.</Text>
                    </Box>

                    <Box w="150px" h="50px" bg="black" margin="auto" borderRadius="50px" marginBottom="100px">
                        <Button
                            className="Marketing-btn-buy"
                            position="-moz-initial"
                            display="block"
                            margin="auto"
                            w="100%"
                            h="100%"
                            mb="50px"
                            bg="#FFE01B"
                            border="1px solid black"
                            borderRadius="50px"
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
              
            </Container>
            <Box>
                <Footer />
            </Box>
        </div>
    )
}

export default MarketingPage;