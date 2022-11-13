import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'

const Accordianchild = ({name,route}) => {
  return (

    <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
         {name}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    
      {route.map((el)=>{
             return <AccordionPanel pb={4} ml={7}>{el} </AccordionPanel>
      })}
   
  </AccordionItem>

  )
}

export default Accordianchild