
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import "./MarketingPage.css";
import "./MailChimp.css";
import ResourcesNavbar from "./ResourcesNavbar";


const MarketingPage = () => {
    return (
        <div>
            <div>
                <ResourcesNavbar />
            </div>
            <Container w="full">
                <Container >
                    <Box border="solid red 1px" margin="auto">
                        <Box margin="auto" marginTop="200px" >
                            <Text fontSize="45px" fontWeight="500">Marketing meets inspiration</Text>
                        </Box>

                        <Box className="Marketing-Box" margin="auto" marginBottom="210px">
                            <Text fontSize="20px">Browse how-to articles on starting, running, and marketing your business, plus thought-provoking podcasts and films to inspire your inner entrepreneur.</Text>
                        </Box>
                    </Box>
                </Container>

                <Container border="solid red 1px" margin="auto">
                    <Box w="70%" border="solid green 1px" margin="auto" bgColor="#f9e0fa">
                        <Box >
                            <Image className="Box-Image" src="https://eep.io/images/yzco4xsimv0y/5Sn7YqszK1FVsDtNI3zdJ2/ee06f4c67cde6cc464838e1312197bfe/Customer_Retention__Overview_and_Strategies-Recirculation.jpg?w=1550&fm=webp&q=80" alt="" />
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

                    <Box w="70%" border="solid brown 1px" margin="auto" marginTop="30px">
                        <Box className="Marketing-grid" >
                            <Box >
                                <Image w="100%" src="https://eep.io/images/yzco4xsimv0y/7MatNpD7IiTQaFU9TMUqD3/15794cb20d7ba9688e7670882ccab208/Furniture_maker_Mac_Collins.jpg?w=1550&fm=webp&q=80" alt="" />

                                <Box border="solid red 1px" bgColor="#efeeea">
                                    <Text className="text-hover" fontSize='17px' fontWeight="600">SUCCESS STORIES</Text>

                                    <Flex>
                                        <Text className="text-hover" fontSize='40px'>Furniture maker Mac Collins on heritage-led design</Text>

                                        <Box marginTop="50px" fontSize="22px" padding="10px"><BsArrowUpRight /></Box>
                                    </Flex>

                                    <Box marginTop="-30px">
                                        <Text >3 min</Text>
                                    </Box>
                                </Box>
                            </Box>

                            <Box>
                                <Image w="100%" src="https://eep.io/images/yzco4xsimv0y/3prB5zDsGn3HNScOz1UOQI/e8066649a85a48397b67a8943a89a057/26_MarketingLibrary.png?w=1550&fm=webp&q=80" alt="" />

                                <Box border="solid red 1px" bgColor="#c5dbf2" >
                                    <Text className="text-hover" fontSize='17px' fontWeight="600" marginTop="80px">MAILCHIMP PRESENTS</Text>

                                    <Flex>
                                        <Text className="text-hover" fontSize='40px'>A peculiar new documentary series</Text>

                                        <Box marginTop="50px" fontSize="22px" padding="10px"><BsArrowUpRight /></Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box w="70%" border="solid brown 1px" margin="auto" marginTop="30px">
                        <Box className="Marketing-Business-grid" >
                            <Box boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" padding="25px">
                                <Text>EXPLORE</Text>

                                <Text fontSize="40px">Business Stages</Text>

                                <Box 
                                // border="solid red 1px"
                                 textAlign="start">
                                    <Flex className="boom-MailChimp-6B" 
                                    // border="solid green 1px" 
                                    >
                                        <div>
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

                                <Box border="solid black 0.5px" bgColor="black"></Box>

                                <Box 
                                // border="solid red 1px"
                                 textAlign="start" marginTop="20px">
                                    <Flex className="boom-MailChimp-6B" >
                                        <div>
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

                                <Box border="solid black 0.5px" bgColor="black"></Box>

                                <Box 
                                // border="solid red 1px"
                                 textAlign="start" marginTop="20px">
                                    <Flex className="boom-MailChimp-6B" >
                                        <div>
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

                                <Box border="solid black 0.5px" bgColor="black"></Box>


                            </Box>

                            <Box boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" padding="25px" >
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
                </Container>
            </Container>
        </div>
    )
}

export default MarketingPage;