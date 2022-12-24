


import { Button, Box, Flex, Image, Input, Text, Container } from "@chakra-ui/react";



import { FiSearch } from "react-icons/fi";
import Footer from "../Footer/Footer";
import "./HelpCenterPage.css";
import "./MarketingPage.css";

const HelpCenterPage = () => {

    return (
        <div>
            <Container maxW="100%" border="solid #00000 1px">
                <Box margin="auto" border="solid #fbeeca 1px" bgColor="#fbeeca">
                    <Box className="HelpCenter-1stDiv" w="80%" margin="auto"
                        // border="solid green 1px" 
                        marginTop="100px" marginBottom="100px">
                        <Box
                        // border="solid yellow 1px"
                        >
                            <Box
                                // border="solid brown 1px" 
                                marginTop="120px">
                                <Text className="Heading-text">Know More, Do More with Mailchimp</Text>
                            </Box>
                            <Box
                            // border="solid brown 1px"
                            >
                                <Text className="Middle-text">Get the most out of Mailchimp with our step‑by‑step videos and tutorials. Browse by topic or search by feature for 24/7 help with any stage of your business journey.</Text>
                            </Box>
                        </Box>
                        <Box
                        // border="solid yellow 1px"
                        >
                            <Image w="90%" src="https://eep.io/images/yzco4xsimv0y/2acL1QmHnWiQc0mYwYKi0C/dd5586458792da808d3376b4846a787a/guides-tutorials.png?w=760&fm=webp&q=70" alt="" />
                        </Box>
                    </Box>
                </Box>

                <Box w="80%" margin="auto"
                // border="solid yellow 1px" 
                >
                    <Flex className="Input-Box" margin="auto" marginTop="100px" alignItems="center">
                        <Input w="90%" position="-moz-initial" padding="20px" fontSize="20px" variant='unstyled' placeholder='Search Help Center' />
                        <Box fontSize="20px"><FiSearch /></Box>
                    </Flex>

                    <Box
                        // border="solid red 1px" 
                        marginTop="50px" >
                        <Text className="Div-text" textAlign="start">Popular guides and tutorials</Text>
                    </Box>

                    <Box className="HelpCenter-Grid"
                        // border="solid green 1px" 
                        marginBottom="50px">
                        <Box className="Grid">
                            <Text className="Grid-text1" textAlign="start">Getting Started with Tags</Text>
                            <Text className="Grid-text2" textAlign="start">Tags are labels you create to help organize your contacts in Mailchimp. Learn how to use tags, where to find them, and how to get started.</Text>
                        </Box>
                        <Box className="Grid">
                            <Text className="Grid-text1" textAlign="start">Requirements and Best Practices for Audiences</Text>
                            <Text className="Grid-text2" textAlign="start">An audience of engaged contacts means more sales and a higher return on investment (ROI). Get tips and requirements for maintaining your Mailchimp audience.</Text>
                        </Box>

                        <Box className="Grid">
                            <Text className="Grid-text1" textAlign="start">All the Merge Tags Cheat Sheet</Text>
                            <Text className="Grid-text2" textAlign="start">Merge tags let you insert dynamic content in your campaigns. Get a list containing each merge tag and how to use it.</Text>
                        </Box>

                        <Box className="Grid">
                            <Text className="Grid-text1" textAlign="start">Import Contacts to Mailchimp</Text>
                            <Text className="Grid-text2" textAlign="start">Learn how to use our import tool to add or update contacts in Mailchimp.</Text>
                        </Box>

                        <Box className="Grid">
                            <Text className="Grid-text1" textAlign="start">About Mailchimp Pricing Plans</Text>
                            <Text className="Grid-text2" textAlign="start">Whether you're starting out or already have a large number of contacts, we have a pricing option for you. Learn about Mailchimp's pricing plans, features, and add-ons.</Text>
                        </Box>

                        <Box className="Grid">
                            <Text className="Grid-text1" textAlign="start">Apple Privacy Update FAQs</Text>
                            <Text className="Grid-text2" textAlign="start">In this article, you'll get answers to common questions about Apple's new privacy protection update.</Text>
                        </Box>

                    </Box>
                </Box>

                {/* YELLOW DIV */}

                <Box bgColor="#ffe01b" marginTop="80px">
                    <Box className="HelpCenter-1stDiv" width="70%" margin="auto"
                    // border="solid red 1px" 
                    >
                        <Box
                            // border="solid 1px red" 
                            marginTop="100px">
                            <Image w="80%" src="https://mailchimp.com/static/images/contact-mailchimp.png" alt="" />
                        </Box>
                        <Box
                            // border="solid 1px red" 
                            marginTop="100px">
                            <Box w="100%">
                                <Text className="Heading-text">Contact our support team</Text>
                            </Box>
                            <Box w="80%" mb="10">
                                <Text className="Middle-text">Have more questions? Paid users can log in and email or chat with us.</Text>
                            </Box>

                            {/* <div className="Help-button">
                                <button className="button">
                                    Ask Away
                                </button>
                            </div> */}

                            <Box w="150px" h="50px" bg="black"  borderRadius="50px" marginBottom="100px" textAlign="start">
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
                                    Ask Away
                                </Button>
                            </Box>

                        </Box>
                    </Box>
                </Box>

                {/* Help by topic Section */}

                <Box w="80%" margin="auto"
                // border="solid yellow 1px" 
                >
                    <Box
                        // border="solid red 1px" 
                        marginTop="50px" >
                        <Text className="Div-text" textAlign="start">Help by topic</Text>
                    </Box>

                    <Box className="HelpCenter-Grid2"
                        // border="solid green 1px" 
                        marginBottom="100px">
                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Accounts</Text>
                            <Text className="Grid-text2" textAlign="start">Set up your account, learn about billing, and stay up-to-date on compliance policies.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Audiences</Text>
                            <Text className="Grid-text2" textAlign="start">Import contacts, create signup forms, and manage your Mailchimp audiences.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Automation</Text>
                            <Text className="Grid-text2" textAlign="start">Automatically send purchase emails, welcome messages, and more.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Email Delivery</Text>
                            <Text className="Grid-text2" textAlign="start">Learn how we deliver email and how you can ensure contacts get your campaigns.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Emails</Text>
                            <Text className="Grid-text2" textAlign="start">Use Mailchimp to build and send emails for your contacts.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Edit and Design</Text>
                            <Text className="Grid-text2" textAlign="start">Customize the content of your emails, landing pages, website, and other types of marketing in Mailchimp.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Facebook and Instagram Ads</Text>
                            <Text className="Grid-text2" textAlign="start">Set up and purchase ads for Facebook or Instagram without leaving your Mailchimp account.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Getting Started</Text>
                            <Text className="Grid-text2" textAlign="start">Learn how to set up your account, import contacts, and create your first campaign.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Google Remarketing Ads</Text>
                            <Text className="Grid-text2" textAlign="start">Reach potential customers all across the internet with Google remarketing ads.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Integrations</Text>
                            <Text className="Grid-text2" textAlign="start">Connect Mailchimp with your e-commerce store and other apps.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Landing Pages</Text>
                            <Text className="Grid-text2" textAlign="start">Create standalone web pages your audience can “land” on from emails, ads, or other digital locations.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Mailchimp & Co</Text>
                            <Text className="Grid-text2" textAlign="start">Learn how to use the tools that help you manage your clients and the benefits of joining our partner program.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Merge Tags</Text>
                            <Text className="Grid-text2" textAlign="start">Personalize your campaigns with contact names, social media buttons, blog posts, and more.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Mobile Apps</Text>
                            <Text className="Grid-text2" textAlign="start">Learn how to use Mailchimp on tablets, smartphones, and other mobile devices.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Postcards</Text>
                            <Text className="Grid-text2" textAlign="start">Send a printed postcard campaign that people can hold in their hands or stick on the fridge.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Reports</Text>
                            <Text className="Grid-text2" textAlign="start">Get performance stats for your marketing efforts and e-commerce store.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Templates</Text>
                            <Text className="Grid-text2" textAlign="start">Use a prebuilt design or code your own templates for email campaigns.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Transactional Email</Text>
                            <Text className="Grid-text2" textAlign="start">Send one-to-one e-commerce emails and automated transactional emails with Transactional Email’s delivery service.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Websites</Text>
                            <Text className="Grid-text2" textAlign="start">Purchase a domain and create your own website with Mailchimp.</Text>
                        </Box>

                        <Box className="Grid-2">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Data Privacy</Text>
                            <Text className="Grid-text2" textAlign="start">Find answers to commonly asked questions related to Mailchimp's privacy practices.</Text>
                        </Box>

                        {/* <Box className="Grid">
                            <Text className="Grid-text1" textAlign="start" fontSize="35px" fontWeight="500">Accounts</Text>
                            <Text className="Grid-text2" textAlign="start">Set up your account, learn about billing, and stay up-to-date on compliance policies.</Text>
                        </Box> */}

                    </Box>
                </Box>

                {/* WATCH WEBINAR */}

                <Box w="80%" margin="auto" border="solid black 0.5px" marginTop="50px" bgColor="black"></Box>

                <Box>

                    <Box margin="auto"
                    // border="solid red 1px" 
                    >
                        <Box className="HelpCenter-1stDiv-2" w="80%" margin="auto"
                            // border="solid green 1px" 
                            marginTop="120px" marginBottom="120px">
                            <Box
                            // border="solid yellow 1px"
                            >
                                <Box
                                    // border="solid brown 1px" 
                                    marginTop="50px">
                                    <Text className="Heading-text">Watch a webinar</Text>
                                </Box>
                                <Box
                                    // border="solid brown 1px" 
                                    w="90%">
                                    <Text className="Middle-text">Whether you’re just getting started or want to level up your marketing strategy, our webinars help set you up for success in Mailchimp. Register for a live session or watch recordings on-demand.</Text>
                                </Box>
                                <div className="Help-button-2">
                                    <Button
                                        className="Marketing-btn-buy"
                                        position="-moz-initial"
                                        display="block"
                                        margin="auto"
                                        w="100%"
                                        h="100%"
                                        mb="50px"
                                       
                                        border="1px solid black"
                                        borderRadius="50px"
                                        mt="10"
                                    >
                                        Watch Now
                                    </Button>
                                </div>

                            </Box>
                            <Box
                            // border="solid yellow 1px"
                            >
                                <Image w="70%" src="https://eep.io/images/yzco4xsimv0y/4EZ4VNCFDDUBoyhZK9KdtN/edb5b15b81b20c210adafeb719fc8700/ILLO_MiniSpot_CustomersOnlinev1_JamesDaw_1080x1080.png?w=760&fm=webp&q=80" alt="" />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Get help from an expert */}

                <Box w="80%" margin="auto" border="solid black 0.5px" marginTop="50px" bgColor="black"></Box>

                <Box>

                    <Box margin="auto"
                    // border="solid red 1px"
                    >
                        <Box className="HelpCenter-1stDiv" w="80%" margin="auto"
                            // border="solid green 1px" 
                            marginTop="120px" marginBottom="120px">
                            <Box
                            // border="solid yellow 1px"
                            >
                                <Image w="70%" src="https://eep.io/images/yzco4xsimv0y/6CENZ3uNhuYSmQy4A4IOUc/23fda14ef9434da03bb9367447c37e4a/expert-help.png?w=760&fm=webp&q=80" alt="" />
                            </Box>
                            <Box
                            // border="solid yellow 1px" 
                            >
                                <Box
                                    // border="solid brown 1px" 
                                    marginTop="50px">
                                    <Text className="Heading-text">Get help from an expert</Text>
                                </Box>
                                <Box
                                    // border="solid brown 1px" 
                                    w="90%">
                                    <Text className="Middle-text">Need a hand with template design, using Mailchimp's advanced features, or general marketing strategy? Use our experts directory to find someone who can help you make things happen.</Text>
                                </Box>
                                <div className="boom-MailChimp9-button">
                                    <Button
                                        className="Marketing-btn-buy"
                                        position="-moz-initial"
                                        display="block"
                                        margin="auto"
                                        w="100%"
                                        h="100%"
                                        mb="50px"
                                        border="1px solid black"
                                        borderRadius="50px"
                                        mt="10"
                                    >
                                        Browse the directory
                                    </Button>
                                </div>

                            </Box>

                        </Box>
                    </Box>
                </Box>


                <Box w="80%" margin="auto" border="solid black 0.5px" marginTop="50px" bgColor="black"></Box>

                <Box>

                    <Box margin="auto"
                    // border="solid red 1px" 
                    >
                        <Box className="HelpCenter-1stDiv-2" w="80%" margin="auto"
                            // border="solid green 1px" 
                            marginTop="120px" marginBottom="120px">
                            <Box
                            // border="solid yellow 1px"
                            >
                                <Box
                                    // border="solid brown 1px" 
                                    marginTop="50px">
                                    <Text className="Heading-text">Still have questions?</Text>
                                </Box>
                                <Box
                                    // border="solid brown 1px" 
                                    w="90%">
                                    <Text className="Middle-text">If you have a question about something that isn't covered here, check out our additional resources. And if that doesn't do the trick, you can send an inquiry through our contact form.</Text>
                                </Box>
                                {/* <div className="Help-button-2">
                                    <button className="button">
                                        Contact us
                                    </button>
                                </div> */}

                                <div className="Help-button-2">
                                    <Button
                                        className="Marketing-btn-buy"
                                        position="-moz-initial"
                                        display="block"
                                        margin="auto"
                                        w="100%"
                                        h="100%"
                                        mb="50px"
                                        // bg="#FFE01B"
                                        border="1px solid black"
                                        borderRadius="50px"
                                        mt="10"
                                    >
                                        Contact us
                                    </Button>
                                </div>

                            </Box>
                            <Box
                            // border="solid yellow 1px"
                            >
                                <Image w="70%" src="https://eep.io/images/yzco4xsimv0y/4ggb8bfvrOyCiGkwyyKEQ4/237acc9d210ebeb0fd9c55127d457563/signup-pencil.png?w=760&fm=webp&q=80" alt="" />
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Container>
            <Footer />
        </div>
    )
}

export default HelpCenterPage;