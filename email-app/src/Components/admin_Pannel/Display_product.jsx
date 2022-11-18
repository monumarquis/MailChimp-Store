import { Box, Button, Container, Divider, HStack, Image, Input, Text, VStack } from "@chakra-ui/react"
import React, { useState } from "react"
import { BsCart3 } from "react-icons/bs"
import { Link } from "react-router-dom";
import { getdata } from "../../Redux/user/user.actions";
export const Display = ({productDesc,productName,productImage,productPrice}) =>{
    const [quantity,setquantity] =useState(0);
    const handlesubmit = () =>{
    const Users = {
         product_url: productImage,
         price : productPrice,
         description: productDesc,
        name:productName,
        Qty:quantity,
        state:false,
    }
    localStorage.setItem("users_data",JSON.stringify(Users));
    console.log(Users);
    //    let data =  getdata(Users).then((res) => (res.json()))
       
    //    console.log(data,"data");
    }
    
    return(
        <VStack  border="1px" borderColor={"black"} w={["100%","100%","100%","50%"]} h='500px' mt="60px">
        <Divider color='gray.100' mt='10'/>
     <Container centerContent maxW="90%">

      <HStack spacing={80} mb="10" >
        <Text color="black" fontWeight={600} fontSize="27" w='250px'>Project Use  </Text>
        <BsCart3/>
      </HStack>

      <HStack spacing={[10,10,10,20]} maxW="100%">
        {productImage=== ""? 
        <Box w="250px" h="200px" border="1px dotted gray" backgroundColor={"#e5e7eb"}>
            {/* <Text> Product Image </Text> */}
        </Box>:<Image src={productImage == "" ? "" : productImage} w="60%" h="200px" 
        // alt='product-image'
         border="1px dotted gray" />}
        <Box w="40%">

       { productName==="" ? <Text color="black" fontWeight={600} >Product Name </Text>:
       <Text color="black" fontWeight={600} >{productName}</Text>}
       { productPrice==="" ? <Text color="black" 
       fontWeight={600} >$00.00</Text>:
       <Text color="black" fontWeight={600} >
        ${productPrice}.00</Text>}

        <Box mt="10">
        <Text color="gray">Quantity: <span style={{"color":"black"}}>{quantity ? quantity:0}</span></Text>
        <Input type={"text"} pos="sticky" w="50px" 
        value={quantity} 
        onChange={(e)=>setquantity(e.target.value)}/>
        </Box>
        
        {/* This is add to cart button  */}
        <Button zIndex={0} pos="-moz-initial" mt="10" colorScheme='orange' variant='solid' ml="-20px"
        onClick={handlesubmit}>Add to cart</Button>
        
    
        </Box>
      </HStack>
      </Container>
      <Button 
                textAlign='center'
                position="-moz-initial"
                ml='25%'
                 border="none"
                padding="15px 30px 15px 30px"
                 color='white' bgColor="teal"
                size='sm'> 
                <Link to='/storesetup'> Store Page </Link>
                </Button>
     </VStack>
    )
}
