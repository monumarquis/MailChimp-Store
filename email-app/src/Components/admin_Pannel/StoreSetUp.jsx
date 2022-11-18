

import { Box, Button, Container, Flex, FormControl, FormLabel, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./StoreSetUp.css";
const StoreSetUp = () => {
    const [bussinesname, setbussiness] =useState("");
    const [name,setname]= useState("");
    const data = JSON.parse(localStorage.getItem("users_data"));
    console.log(data);
    const handlesubmit = () =>{
        setname(bussinesname)
    }
    return (
        <div>

            <Container border="solid transparent 1px" pt='100px' maxW='100%' >
                <Box w="70%"
                    // border="solid green 1px" 
                    margin="auto" >
                    <Box className="StoreSetUp-grid" marginTop="70px" marginBottom="70px" gap={20}>
                        <Box w="80%">
                            {/* <Image w="100%" src="https://eep.io/images/yzco4xsimv0y/7vg67CzZMjTJrhkcpRszYK/d2948672ae49a101b7ac3bd4e10244f7/Inside_the_hype_business_model.png?w=760&fm=webp&q=80" alt="" /> */}
                            <Text textAlign="start" fontSize="40px">What is Your business called ?</Text>
                            <Text textAlign="start" fontSize="21px">This will be the name of your site and we'll use it to create your website URL, too.</Text>

                            <Box >
                                <FormControl isRequired>
                                    <Flex justifyContent="space-between">
                                        <FormLabel marginBlock="15px">Business name</FormLabel>
                                        <Text>Required</Text>
                                    </Flex>
                                    <Input w="90%" placeholder='First name' padding="15px"
                                     onChange={(e) => setbussiness(e.target.value)} />
                                </FormControl>
                            </Box>

                            <Text textAlign="start" color="gray">Maximum 50 characters</Text>

                            <Box margin="auto" marginBottom="20px" textAlign='start' marginTop="30px">
                                <Button 
                                position="-moz-initial"
                                onClick={handlesubmit}
                                className="store-button" border="none"
                                 padding="15px 30px 15px 30px" color='white' bgColor="teal"
                                  size='sm'> Continue
                                </Button>

                            </Box>
                        </Box>

        <Box textAlign="start" border="solid gray 7px" boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">

                            {/* Need to fix with backend code */}
                            <Box borderBottom="solid 1px gray" marginTop="50px">
                            {/* <Text textAlign="start" fontSize="20px" paddingLeft="20px">{data.name==="Product details" ? "Masai":data.name}</Text> */}
             
                            </Box>
                            {/* Need to fix with backend code */}

                            <Flex justifyContent="space-between" alignItems="center" mb='20px'>

                                {/* Need to fix with backend code */}
                                {/* Need to fix with backend code */}
                            <Text fontWeight='bold' pl='3%'> {name}</Text>
                                <Box fontSize="25px" paddingRight="20px"><BsCart />
                                
                                </Box>

                            </Flex>
                            <Box className="StoreSetUp-2" padding="20px" marginTop="-30px">
                                <Box>
                                    <Box 
                                    w="250px" 
                                    // border="5px solid" 
                                    height="20px" marginTop="20px">
                                        <Text> Product</Text>
                                        <img  src={data.product_url == "" ? "" : data.product_url }/>
                                    </Box>
                                    {/* <Box w="30%" border="dotted gray 1px" height="20px" marginTop="20px"></Box> */}
                                </Box>

                                <Box>
                                <Box w="80%"  height="20px" marginTop="20px">
                                        
                                </Box>
                                    <Box  height="120px" w= "150px" ml="5%">
                                        <Text fontWeight='bold'> {`Name : ${data.name =="" ? "" : data.name}`}</Text>
                                        <Text fontWeight='bold'> {` Price : ${data.price == "" ? "" : data.price}`}</Text>
                                        <Text fontWeight='bold'> {` Quantity : ${data.Qty == "" ? "" : data.Qty}`}</Text>
                                        <Text fontWeight='bold'> {` Description : ${data.description == "" ? "" : data.description}`}</Text>
     
                                       
                                        {/* <Text> {data.}</Text> */}
                                    </Box>
                                    
                                    {/* <Box w="30%" border="dotted gray 1px" height="20px" marginTop="20px"></Box> */}
                                </Box>

                                {/* <Box>
                                    <Box border="dotted gray 1px" height="120px"></Box>
                                    <Box w="80%" border="dotted gray 1px" height="20px" marginTop="20px">
                                        
                                    </Box>
                                    <Box w="30%" border="dotted gray 1px" height="20px" marginTop="20px">
                                        
                                    </Box>
                                </Box> */}

                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Button 
                textAlign='center'
                position="-moz-initial"
                // className="store-button"
                ml='25%'
                 border="none"
                padding="15px 30px 15px 30px"
                 color='white' bgColor="teal"
                size='sm'> 
                <Link         
                to='/store'> Add More Products </Link>
                </Button>
                                
                
            </Container>
        </div>
    )
}

export default StoreSetUp;