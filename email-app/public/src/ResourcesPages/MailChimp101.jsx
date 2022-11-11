
import { Box, Button, Container, Flex, Image, Img, Text } from "@chakra-ui/react";
import { FaChevronRight, FaArrowRight, FaAngleDown, FaAngleUp, FaPlusCircle } from "react-icons/fa";
import "./MailChimp.css"; 
import ResourcesNavbar from "./ResourcesNavbar";

const MailChimp = () =>{
    return(
        <div>
        <ResourcesNavbar/>
        <div className="MailChimp">
            {/* <h1>MailChimp</h1> */}
            

            <Container width="100%" height="800px" 
            border="solid #fbeeca 1px" 
            margin="auto" bgColor="#fbeeca" >
                <Box>
                <Box display="flex" justifyContent="center" gap="15px" fontSize="16px" fontWeight="600" color="teal" marginTop="200px">
                    <Text>PREP & START</Text>
                    <Text color="black"><FaChevronRight/></Text>
                    <Text>MARKETING TOOLS</Text>
                </Box>

                <Box width="50%" margin="auto" fontSize="40px" fontWeight="450" fontStyle="revert-layer" marginTop="-3rem">
                    <Text>How to Use Mailchimp</Text>
                </Box>

                <Box className="First" 
                border="solid #fbeeca 1px" 
                margin="auto" fontSize="25px" fontWeight="100" marginTop="-1rem">
                    <Text>New to Mailchimp and not sure where to start? We’ll walk you through the basic uses so you know what to expect along the way.</Text>
                </Box>

                </Box>
            </Container>

                {/* IMAGE DIV */}

            <Container width="80%"  
             border="solid #ffffff 1px" 
             margin="auto" bgColor="#ffffff" >
                <Box width="70%" 
                // border="solid red 1px" 
                margin="auto"
                // border="solid teal 1px" 
                marginTop="-25%">
                    <Image boxSize="100%" src="https://eep.io/images/yzco4xsimv0y/7iWWJJfPlrJ8vMLmRSyb2r/0c3a8892d02b7007cc477aebe68e9de1/tour.png?w=780&fm=webp&q=70" alt="" />
                </Box>

                <div className="boom-MailChimp1">
                    <div className="boom-MailChimp2">
                        <div className="boom-MailChimp3">
                            <img src="https://eep.io/images/yzco4xsimv0y/4YrseyUbDGeZp5Mp1zQXs/a5639d145d8acfdd57a62c25a6448df7/audience_b_w.png?w=540&fm=webp&q=80" alt="" />
                        </div>

                        <div className="boom-MailChimp4">
                            <div>
                                <h1>Let’s start building your audience</h1>
                            </div>
                            <div>
                                <p>Just by bringing all your contact data into Mailchimp, we can start to show you helpful insights about your audience. We’ll help you find new ways to talk to people who love your brand—and new ways to reach people who are likely to.</p>
                            </div>
                            <div>
                                <p>Even if you don’t have contacts to market to yet, you can always log in and start playing around with our design tools. In fact, we recommend it.</p>
                            </div>

                            <div className="boom-MailChimp5-button">
                                <button className="button">
                                    Get Started
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="boom-MailChimp6">
                    <div className="boom-MailChimp-6A">
                        <h1>Want to learn more? Here are a few resources to help.</h1>
                    </div>
                    <div>
                        <div  className="boom-MailChimp-6B">
                            <div className="innerDiv">
                                <h2> Getting Started with Your Audience</h2>
                                <div className="boom-MailChimp-Arrow">
                                <Text className="Text"><FaArrowRight/></Text>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom"></div>

                        <div  className="boom-MailChimp-6B">
                            <div className="innerDiv">
                                <h2> Import Contacts to Mailchimp</h2>
                                <div className="boom-MailChimp-Arrow">
                                <Text className="Text"><FaArrowRight/></Text>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom"></div>

                        <div  className="boom-MailChimp-6B">
                            <div className="innerDiv">
                                <h2> Requirements and Best Practices for Audiences</h2>
                                <div className="boom-MailChimp-Arrow">
                                <Text className="Text"><FaArrowRight/></Text>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom"></div>
                    </div>
                </div>

            </Container>

                {/* ID-7 */}

            <Container width="100%" 
            // border="solid red 1px" 
            bgColor="#f6f6f4" margin="auto" >
                <Box width="80%" 
                // border="solid green 1px" 
                margin="auto" marginTop="100px" marginBottom="100px">
                    <Flex justifyContent="center">
                        <Box width="48%">
                            <Image width="80%" 
                            // border="solid brown 1px" 
                            src="https://eep.io/images/yzco4xsimv0y/5gCsbWATmomqeQWIcQ66Es/236210839e95e0acb7bfbd3fa870a504/ILLO_Spot_Email_3_1080.png?w=580&fm=webp&q=80" alt=""/>
                        </Box>
                        <Box width="48%" textAlign="start">
                            <Text width="60%" fontSize="2.8vw">No contacts? No problem.</Text>

                            <Box width="70%" fontSize="1.3vw" fontWeight="300" marginTop="-30px">
                                <Text>Let people sign up for your marketing with a landing page.</Text>
                            </Box>

                            <div className="boom-MailChimp7-button">
                                <button className="button">
                                    Create A Landing Page
                                </button>

                                <a href="https://mailchimp.com/features/landing-pages/">
                                    Learm More About Landing Page
                                </a>
                            </div>
                        </Box>
                    </Flex>
                </Box>
            </Container>

                {/* ID - 8 */}

            <Container width="80%"  
            //  border="solid green 1px" 
             margin="auto" bgColor="#ffffff" marginTop="100px">

                <div className="boom-MailChimp1">
                    <div className="boom-MailChimp2">

                    <div className="boom-MailChimp-8">
                            <div>
                                <h1>Create your first email campaign</h1>
                            </div>
                            
                            <Flex className="boom-MailChimp-8-Text" width="90%" 
                            // border="solid red 1px" 
                            gap={15} marginTop="-20px" >
                                <Box>
                                    <Text fontSize="2vw" fontWeight="300" color="teal"><FaAngleDown/></Text>
                                </Box>
                                <Box >
                                    <p fontWeight="400">Pick your template</p>
                                </Box>

                            </Flex>
                            <Box borderBottom="solid black 1px"></Box>

                            <Box width="90%"  marginTop="-20px">
                            <Flex className="boom-MailChimp-8-Text" width="90%" 
                            // border="solid red 1px" 
                            gap={10}>
                                <Box >
                                    <Text fontSize="2vw" fontWeight="300" color="teal"><FaAngleUp/></Text>
                                </Box>
                                <Box >
                                    <p fontWeight="400">Add your content</p>
                                </Box>

                            </Flex>
                            <Text fontSize="1.6vw" textAlign="start" fontWeight="300" marginTop="-10px">You can see all your updates in real time so it’s easy to see how it’s coming together.</Text>
                            </Box>
                            <Box borderBottom="solid black 1px"></Box>

                            <Flex className="boom-MailChimp-8-Text" width="90%" gap={15} marginTop="-20px" >
                                <Box>
                                    <Text fontSize="2vw" fontWeight="300" color="teal"><FaAngleDown/></Text>
                                </Box>
                                <Box >
                                    <p fontWeight="400">Choose who gets it</p>
                                </Box>

                            </Flex>
                            <Box borderBottom="solid black 1px"></Box>

                            <Flex className="boom-MailChimp-8-Text" width="90%" gap={15} marginTop="-20px" >
                                <Box>
                                    <Text fontSize="2vw" fontWeight="300" color="teal"><FaAngleDown/></Text>
                                </Box>
                                <Box >
                                    <p fontWeight="400">Hit send</p>
                                </Box>

                            </Flex>
                            <Box borderBottom="solid black 1px"></Box>

                            {/* <div className="boom-MailChimp5-button">
                                <button className="button">
                                    Get Started
                                </button>
                            </div> */}
                        </div>

                        <div className="boom-MailChimp3">
                            <img src="https://eep.io/images/yzco4xsimv0y/PYULEP3VcqSOAe8aa8UeY/2030f517357ede1b9a85b7648612bfec/ILLO_Spot_Email_5_1080.png?w=760&fm=webp&q=80" alt="" />
                        </div>

                    </div>
                </div>

                <div className="boom-MailChimp6">
                    <div className="boom-MailChimp-6A">
                        <h1>Want to learn more about email? It’s kind of our speciality.</h1>
                    </div>
                    <div>
                        <div  className="boom-MailChimp-6B">
                            <div className="innerDiv">
                                <h2> Email Design Guide</h2>
                                <div className="boom-MailChimp-Arrow">
                                <Text className="Text"><FaArrowRight/></Text>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom"></div>

                        <div  className="boom-MailChimp-6B">
                            <div className="innerDiv">
                                <h2> Tips for Your First Campaign</h2>
                                <div className="boom-MailChimp-Arrow">
                                <Text className="Text"><FaArrowRight/></Text>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom"></div>

                        <div  className="boom-MailChimp-6B">
                            <div className="innerDiv">
                                <h2> Email Marketing Field Guide</h2>
                                <div className="boom-MailChimp-Arrow">
                                <Text className="Text"><FaArrowRight/></Text>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom"></div>

                        <div  className="boom-MailChimp-6B">
                            <div className="innerDiv">
                                <h2> Inspiration Gallery</h2>
                                <div className="boom-MailChimp-Arrow">
                                <Text className="Text"><FaArrowRight/></Text>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom"></div>
                    </div>
                </div>

            </Container>

            {/* ID - 9 */}
            {/* COLOUR DIV */}

            <Container w="100%" margin="auto" 
            // border="solid green 1px"
            >
                <div className="Colur-div" margin="auto" justifyContent="center">
                    <Box className="Colour-div-box1" 
                    // border="solid red 1px" 
                    bgColor="#f25f25">
                        <Box width="80%">
                        <Img width="90%" padding="50px" src="https://eep.io/images/yzco4xsimv0y/66n1FijXPUSXG4qwuIR70g/b8c476608a1c4d0095b0e69e4a693634/Chefkiss_b_w.png?w=760&fm=webp&q=80" alt=""/>
                        </Box>
                    </Box>
                    <Box className="Colour-div-box2" bgColor="#ffe01b" >
                        <Text width="63%" fontSize="2.5vw" textAlign="center" padding="100px">Nice work. Once you’ve sent your first email campaign, you’re officially part of the club.</Text>
                    </Box>
                </div>
            </Container>

                        {/* WHITE BACKGROUND SECTION */}

            <Container width="80%"  
            //  border="solid green 1px" 
             margin="auto" bgColor="#ffffff" >

                <Box w="60%" 
                // border="solid red 1px" 
                margin="auto" marginTop="70px" marginBottom="100px"> 
                    <Text fontSize="2.4vw">Next up? Curate a path to take customers from prospect to purchase.</Text>
                </Box>

                <div className="boom-MailChimp1">
                    <div className="boom-MailChimp2">
                        <div className="boom-MailChimp3">
                            <img src="https://eep.io/images/yzco4xsimv0y/4wc0Paqy3g3DeZU2wdssbg/6cf59cb9ab99f0b689eb22b452390a4c/CustomerJourneys.png?w=540&fm=webp&q=80" alt="" />
                        </div>

                        <div className="boom-MailChimp9-A">
                            <div>
                                <h1>Design automated journeys to guide your customer’s experience</h1>
                            </div>
                            <div>
                                <p>With Customer Journey builder, deliver relevant messages to your customers based on how they engage with your business. Design and automate a customized path for your customer that turns window shoppers into lifelong customers.</p>
                            </div>
                            {/* <div>
                                <p>Even if you don’t have contacts to market to yet, you can always log in and start playing around with our design tools. In fact, we recommend it.</p>
                            </div> */}

                            <div className="boom-MailChimp9-button">
                                <button className="button">
                                    See What's Possible
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="boom-MailChimp9">
                    <div className="boom-MailChimp-9A">
                        <h1>New to marketing automation? We’ve got you covered.</h1>
                    </div>
                    <div>
                        <div  className="boom-MailChimp-6B">
                            <div className="innerDiv">
                                <h2>About Customer Journeys</h2>
                                <div className="boom-MailChimp-Arrow">
                                <Text className="Text"><FaArrowRight/></Text>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom"></div>

                        <div  className="boom-MailChimp-6B">
                            <div className="innerDiv">
                                <h2> Create a Customer Journey</h2>
                                <div className="boom-MailChimp-Arrow">
                                <Text className="Text"><FaArrowRight/></Text>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom"></div>

                        <div  className="boom-MailChimp-6B">
                            <div className="innerDiv">
                                <h2> All the starting points</h2>
                                <div className="boom-MailChimp-Arrow">
                                <Text className="Text"><FaArrowRight/></Text>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom"></div>
                    </div>
                </div>


                <div className="boom-MailChimp1">
                    <div className="boom-MailChimp2">

                        <div className="boom-MailChimp9-A">
                            <div>
                                <h1>Unlock even more Mailchimp features</h1>
                            </div>
                            <div>
                                <p>You get more from Mailchimp when you connect other tools or services, like your online store. Find your integrations in our directory, connect in a few steps, and unlock new features, just like that.</p>
                            </div>

                            <div className="boom-MailChimp9-button">
                                <button className="button">
                                    Explore the directory
                                </button>
                            </div>
                        </div>

                        <div className="boom-MailChimp3">
                            <img src="https://eep.io/images/yzco4xsimv0y/6cdYuRb3m8DVYBRVE2YLVI/e38ea9ff3d169ae69148e8e0fefee7ec/ILLO_Key_Transparent.png?w=760&fm=webp&q=80" alt="" />
                        </div>

                    </div>
                </div>

                <div className="boom-MailChimp6">
                    <div className="boom-MailChimp-6A">
                        <h1>Still curious about integrations? We’ve got you.</h1>
                    </div>
                    <div>
                        <div  className="boom-MailChimp-6B">
                            <div className="innerDiv">
                                <h2> About Connecting Your Site</h2>
                                <div className="boom-MailChimp-Arrow">
                                <Text className="Text"><FaArrowRight/></Text>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom"></div>

                        <div  className="boom-MailChimp-6B">
                            <div className="innerDiv">
                                <h2> Sell More Stuff With Mailchimp</h2>
                                <div className="boom-MailChimp-Arrow">
                                <Text className="Text"><FaArrowRight/></Text>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom"></div>

                        <div  className="boom-MailChimp-6B">
                            <div className="innerDiv">
                                <h2> Connect Google Analytics</h2>
                                <div className="boom-MailChimp-Arrow">
                                <Text className="Text"><FaArrowRight/></Text>
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom"></div>
                    </div>
                </div>

                <Box className="boom-MailChimp-game">
                    <Text fontSize="2.5vw" textAlign="start">
                    Here’s how you step up your game even more
                    </Text>
                </Box>

                <div>
                    <div className="boom-MailChimp-Learn">
                        <div>Learning from your campaigns</div>
                        <div>
                            <FaPlusCircle/>
                        </div>
                    </div>

                    <div className="boom-MailChimp-Learn">
                        <div>Test your emails to see what works</div>
                        <div>
                            <FaPlusCircle/>
                        </div>
                    </div>

                    <div className="boom-MailChimp-Learn">
                        <div>Segmenting your audience</div>
                        <div>
                            <FaPlusCircle/>
                        </div>
                    </div>
                    
                    <div className="boom-MailChimp-Learn">

                    </div>

                </div>


                <div>
                    <div className="boom_MailChimp-Last">
                        <div className="Last1">
                            <img src="https://eep.io/images/yzco4xsimv0y/5C4St15tsmVj3DRu4pCDJ9/5d9ce3c10810d02d4db4d8b2efa81faf/Mailchimp-101.png?w=280&fm=webp&q=80" />
                        </div>
                        <div className="Last2">
                            <h1>Success is yours</h1>
                            <p>You’re ready to dive in to your Mailchimp account. And remember, you can always explore our guides and tutorials when you need a little help along the way.</p>
                        </div>
                    </div>
                </div>

            </Container>

            <Container w='100%' 
            border="solid #ffe01b 1px" 
            bgColor="#ffe01b" marginTop="60px" >
                <Box margin="auto" marginTop="100px">
                    <Text fontSize="3vw">It’s easy to get started</Text>
                </Box>

                <Box margin="auto" marginTop="-10px">
                    <Text fontSize="2vw" fontWeight="300">And it’s free. Two things everyone loves.</Text>
                </Box>

                 <div className="Last-button">
                    <button className="button">
                        Sign Up
                    </button>
                </div>
            </Container>

        </div>
        </div>
    )
}

export default MailChimp;