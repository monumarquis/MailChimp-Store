// import { useState } from "react"
import {Box,Heading,Image,Text} from "@chakra-ui/react"
import "./integrations.style.css"
import Canva from "../../Assets/Canva.jpg"
import Instagram from "../../Assets/Instagram.jpg"
import Qb from "../../Assets/Quickbooks.jpg"
import Google from "../../Assets/Google.jpg"
import Salesforce from "../../Assets/Salesforce.jpg"
import Shopify from "../../Assets/Shopify.jpg"
import Squarespace from "../../Assets/Squarespace.jpg"
import Woocommerce from "../../Assets/WooCommerce.jpg"
import Zapier from "../../Assets/Zapier.jpg"
import useWindowSize from "./WindowSize"
function Integrations(){
    const [height,width]=useWindowSize();
   
 
    return (
        <Box mb="100px">
            <Heading ml="6.5%" mb="30px" mt="40px">Bring in more data, drive more <br /> growth with our integrations</Heading>

            <Box className="integration">
                <Box className={width>590?"canva":"canva-after"}>
                    <Image src={Canva} alt="canva"></Image>
                    <Box  >
                    <Text fontWeight="bolder">Canva</Text>
                {width>590?<Text>Create Compelling for your marketing.</Text>:""} 
                

                    </Box>
                </Box>
                <Box className={width>590?"canva":"canva-after"}>
                    <Image src={Salesforce} alt="salesforce"></Image>
                    <Box>
                    <Text fontWeight="bolder" >Mailchimp for Salesforce</Text>
                    {width>590?
                    <Text>Sync your Mailchimp subsctibers and Salesforce leads across platforms.</Text>
                    
                    :""} 
                    </Box>
                </Box>
                <Box className={width>590?"canva":"canva-after"}>
                    <Image src={Instagram} alt="canva"></Image>
                    <Box>
                    <Text fontWeight="bolder">Instagram</Text>
                    {width>590?
                    <Text>Promote and shate your instagram posts in email campains.</Text>
                    
                    :""} 
                    </Box>
                </Box>
                <Box className={width>590?"canva":"canva-after"}>
                    <Image src={Shopify} alt="Shopify"></Image>
                    <Box>
                    <Text fontWeight="bolder">Shopify</Text>
                    {width>590?
                    <Text>Sync Shopify customers,products,and purchase data to Mailchimp.</Text>
                    : 
                    ""} 
                    </Box>
                </Box>
                <Box className={width>590?"canva":"canva-after"}>
                    <Image src={Google} alt="Google"></Image>
                    <Box>
                    <Text fontWeight="bolder">Google Analytics</Text>
                    {width>590?
                    <Text>unlock powerful insights with campaign, website,or landing page data.</Text>
                    
                    :""} 
                    </Box>
                </Box>
                <Box className={width>590?"canva":"canva-after"}>
                    <Image src={Woocommerce} alt="Woocommerce"></Image>
                    <Box>
                    <Text fontWeight="bolder">WooCommerce</Text>
                    {width>590?
                    <Text>Power your ecommerce store with smart marketing features.</Text>
                    
                    :""} 
                    </Box>
                </Box>
                <Box className={width>590?"canva":"canva-after"}>
                    <Image src={Qb} alt="quickbooks online"></Image>
                    <Box>
                    <Text fontWeight="bolder">QuickBooks Online</Text>
                    {width>590?
                    <Text>Bring together your marketing toole and invoice data.</Text>
                    
                    :""} 
                    </Box>
                </Box>
                <Box className={width>590?"canva":"canva-after"}>
                    <Image src={Squarespace} alt="Squarespace"></Image>
                    <Box>
                    <Text fontWeight="bolder">Squarespace Commerce</Text>
                    {width>590?
                    <Text>Market your ecommerce business and drive sales.</Text>
                    
                    :""} 
                    </Box>
                </Box>
                {
                    width>990?<Box className={width>590?"canva":"canva-after"}>
                    <Image src={Zapier} alt="Zapier"></Image>
                    <Box>
                    <Text fontWeight="bolder">Canva</Text>
                    {width>590?
                    
                    <Text>Automatically pass data between web services without a single line code.</Text>
                    :""} 
                    </Box>
                </Box>:""}
                
                

            </Box>
            
        </Box>
    )
}
export default Integrations