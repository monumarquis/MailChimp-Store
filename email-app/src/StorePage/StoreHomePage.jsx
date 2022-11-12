import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./StoreHomePage.css"; 


const StoreHomePage = () => {
    return(
        <div>
            <Container border="solid #f7fbf5 1px"  bgColor="#f7fbf5" margin="auto">
                <Box>
                    <Text fontSize="40px">Start selling products online</Text>
                </Box>

                {/* <NavLink to="" > */}
                <Box margin="auto" marginBottom="20px">
                    <Button className="store-button" border="none" padding="15px 25px 15px 25px" color='white' bgColor="teal" size='sm'> Start Your Store</Button>
                </Box>
                {/* </NavLink> */}

                <Box >
                    <Image w="55%" src="https://us8.admin.mailchimp.com/release/e/assets/set-up-a-mailchimp-store-1-GV7HKI6S.png" alt="jpg" />
                </Box>
            </Container>

            <Container border="solid white 1px" bgColor="white" marginTop="-5%">
            <Container w="80%" 
            // border="solid red 1px" 
            margin="auto" marginTop="7%">
                <Box textAlign="start">
                    <Text fontSize="30px">How it works</Text>
                </Box>
                <Box border="solid gray 0.5px" bgColor="gray"></Box>

                <Box className="store-grid" marginTop="40px">
                    <Box border="solid gray 1px">
                        <Image w="90%" src="https://us8.admin.mailchimp.com/release/e/assets/product-1-OCQ4RPYH.png" alt="jpg" />
                        <Box padding="10px">
                        <Text textAlign="start">Estimated time: 5-10 min</Text>
                        <Text textAlign="start" fontSize="30px">Start with a product</Text>
                        <Text textAlign="start" fontSize="22px" fontWeight="200">Upload your first product and we’ll create store pages for your website on Mailchimp.</Text>
                        </Box>
                    </Box>

                    <Box border="solid gray 1px">
                        <Image w="90%" src="https://us8.admin.mailchimp.com/release/e/assets/product-1-OCQ4RPYH.png" alt="jpg" />
                        <Box padding="10px">
                        <Text textAlign="start">Estimated time: 15-20 min</Text>
                        <Text textAlign="start" fontSize="30px">Set up payments</Text>
                        <Text textAlign="start" fontSize="22px" fontWeight="200">Create or connect a Stripe account to receive payments from all major credit cards.</Text>
                        </Box>
                    </Box>
                    
                    <Box border="solid gray 1px">
                        <Image w="90%" src="https://us8.admin.mailchimp.com/release/e/assets/product-1-OCQ4RPYH.png" alt="jpg" />
                        <Box padding="10px">
                        <Text textAlign="start">Estimated time: 5 min</Text>
                        <Text textAlign="start" fontSize="30px">Personalize your site and start selling</Text>
                        <Text textAlign="start" fontSize="22px" fontWeight="200" >We’ll automatically set up order confirmation, shipping notification, and abandoned cart emails for your store.</Text>
                        </Box>
                    </Box>

                </Box>

                {/* <NavLink to="" > */}
                <Box margin="auto" marginTop="100px" marginBottom="20px">
                    <Button className="store-button" border="none" padding="15px 25px 15px 25px" color='white' bgColor="teal" size='sm'> Start Your Store</Button>
                </Box>
                {/* </NavLink> */}

                <Box marginTop="50px" marginBottom="200px">
                    <Text fontSize="20px" color="teal" cursor="pointer">Read our guide to creating a Mailchimp store</Text>
                </Box>
            </Container>
            </Container>
        </div>
    )
}

export default StoreHomePage;