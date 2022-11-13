import { Box, Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
const style = {
    "box-shadow":" rgba(0, 0, 0, 0.24) 0px 3px 8px"
}
const CampaignCard2 = ({src,label,desc,bt}) => {
  return (
   <VStack maxW={"289px"} spacing="7" paddingBottom={"30px"}  style={style} >
    <Box w="100%" backgroundColor={"blue.100"} h="170" textAlign={"center"}>
    <Image src={src} alt='monu' maxW="80%" h="80%"/>
    </Box>
    <Text fontSize={20} fontWeight="400" >{label}</Text>
    <Text maxW={"85%"} textAlign="center" fontSize={13} color="gray.500">{desc}</Text>
    <Button  colorScheme='teal' variant='solid' >{bt}</Button>
   </VStack>
  )
}

export default CampaignCard2