import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
const style = {
    "box-shadow":" rgba(0, 0, 0, 0.24) 0px 3px 8px"
}
const CampaignCard = ({src,label,desc,bt}) => {
  return (
   <VStack maxW={"289px"} spacing="7" paddingBottom={"30px"}  style={style} >
    <Image src={src} alt='monu'/>
    <Text fontSize={20} fontWeight="400" >{label}</Text>
    <Text maxW={"85%"} textAlign="center" fontSize={13} color="gray.500">{desc}</Text>
    <Button  colorScheme='teal' variant='solid' >{bt}</Button>
   </VStack>
  )
}

export default CampaignCard