// import { CheckboxIcon } from '@chakra-ui/icons'
import { CheckboxIcon } from '@chakra-ui/react'
import { Box, Button, Container, Divider, Heading, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useReducer } from 'react'
import {BsCart3} from"react-icons/bs"
import { Display } from './Display_product'

const state ={
    name : "",
    url: "",
    price :"",
    des :"",
}
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "name":
//       return { ...state, name: action.payload };
//     case "price":
//       return { ...state, price: action.payload };
//     case "pr_url":
//       return { ...state, pr_url: action.payload };
//     case "des":
//       return { ...state, des: action.payload };
//     case "reset":
//       return initialstate;
//     default:
//       return state;
//   }
// };

const AddtoProduct = () => {
  // const [state, dispatch] = useReducer(reducer, initialstate)
  const [users, setusers] =useState(state);
  const [product,setproducts] =useState([])
   let [productImage,setimage]=useState()
    let [productPrice,setprice]=useState("")
    let [productName,setName]=useState("")
    let [quantity,setquantity]=useState(0)
    console.log(productImage)

    const handlesubmit = () =>{
      setproducts([...product,users])
      console.log(users);
   
   
}

  //  const  imageChange=(e)=>{
  //   if(e.target.files && e.target.files.length>0)
  //   setimage(URL.createObjectURL(e.target.files[0]))
  //   }
    const handlechange = (e) =>{
            const {name,value} = e.target;
           setusers({
            ...users,
            [name]:value
            
          });
          //  dispatch({type:"reset"})
    }
    // console.log(users)

  return (
   <Container centerContent maxW="90%" pt="40"  zIndex={0}>
     <Stack  direction={{"base":"column","sm":"column","md":"column","lg":"row"}} spacing="40" mb="10" >
             <VStack w={["100%","100%","100%","40%"]} spacing="20">
                <Heading fontWeight={400} color='gray.800'>Now let’s add your first product:</Heading>
                <Input zIndex={0}pos="sticky" 
                 onChange={handlechange}
                 value= {state.url}
                 name="url"
                 placeholder='Enter your product url'
                  type="text" borderColor={"gray"} 
                padding="20" backgroundColor={"gray.50"} border="Dotted"/>
                
               <Box w="100%">
                    <Text mb="2"color="black" fontWeight={600} >Product Name</Text>
                    <Input pos="sticky"  
                    value={state.name} 
                    onChange={handlechange} 
                    name="name"
                    type="text" placeholder=' e.g. Illumimati Sheet Mask' borderColor={"black"} />
               </Box>
               <Box w="100%">
                <Text mb="2" fontWeight={600} color="black">Price</Text>
                <InputGroup>
                    <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                    />
                   
                    <Input pos="sticky" placeholder='0' borderColor={"black"} 
                     value={state.price}  
                    onChange={handlechange} 
                    name="price"
                    />
                    <InputRightElement children={<CheckboxIcon color={productPrice===""? "gray.300" :'green.600'} />} />
                </InputGroup>
                </Box>
               <HStack w="100%" spacing={3} border="0.2px" borderColor={"gray"} p="6">
                   <input type="checkbox" pos="sticky"   />
                    <Text mb="2"  color="black" fontWeight={600} >This product is taxt-exempt</Text>
               </HStack>
               
               <Box w="100%">
                    <Text mb="2"color="black" fontWeight={600} >Product description</Text>
                    <Input type="text" pos="sticky"  placeholder='An optional description of your product' borderColor={"black"}
                     py="20" 
                     value={state.des}  
                     onChange={handlechange} 
                     name="des"
                     />
               </Box>

               <Button colorScheme='blue' pos="-moz-initial" variant='solid' ml="-20px"
               onClick={handlesubmit}>Save Product</Button>
             </VStack>
            <Display 
            productName={users.name}
            productDesc ={users.des}
            productPrice = {users.price}
            productImage = {users.url}
            />
     </Stack>
   </Container>
  )
}

export default AddtoProduct