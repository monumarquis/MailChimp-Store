import {Box,Image,Text} from  "@chakra-ui/react"

import {ArrowForwardIcon} from "@chakra-ui/icons"

import "./automations.style.css"
 

function Automations({data,heading}){
 
    return (
        <Box mt="120px" mb="120px">
<Text margin="auto" mb="80px"  className="heading" fontSize={{ base: '25px', md: '30px', lg: '40px' }} textAlign="center" lineHeight={1} >{heading}</Text>
<Box className="autometion">
{
    data?.map((el)=>(
        <Box className="autometion-grid" key={el.id}>
    <Image className="img" src={el.image} alt="img1" width="100%" objectFit="cover"></Image>
    <Box>
        <Text fontSize={{ base: '18px', md: '25px', lg: '30px' }} fontWeight={500} ml="10%" mb="10px">{el.heading}</Text>
        <Text fontSize={{ base: '16px', md: '20px', lg: '25px' }} ml="10%" mb="20px">
       {el.text}
        </Text>

        <Text className="learn">Learn more  <ArrowForwardIcon bg="yellow" w="25px" h="25px" borderRadius="50%" /> </Text>
    </Box>
</Box>
    ))
}
{/* <Box className="autometion-grid">
    <Image src={Auto1} alt="img1" height="80vh" width="100%" objectFit="cover"></Image>
    <Box>
        <Text fontSize={{ base: '18px', md: '25px', lg: '30px' }} fontWeight={500} ml="10%" mb="10px">Convert more customers at scale</Text>
        <Text fontSize={{ base: '16px', md: '20px', lg: '25px' }} ml="10%" mb="20px">
        Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.
        </Text>

        <Text className="learn">Learn more  <ArrowForwardIcon bg="yellow" w="25px" h="25px" borderRadius="50%" /> </Text>
    </Box>
</Box> */}

</Box>
        </Box>
    )
}
export default Automations ;