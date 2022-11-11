import React from "react";
import './email.css';
import { Box, Button, CheckboxIcon, Container, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
// import AiOutlineArrowRight from 'react-icons/AiOutlineArrowRight';
// angle right
// import AiOutlineArrowRight from "react-icons";
import { MdDone } from "react-icons/md";
export const Email = () => {
    return (

        <Box style={{ marginTop: '5%' }}>
            <Flex>
                <Box className="start_box">
                    <Text> Email Marketing Software</Text>
                    <Heading>
                        Win customers with the #1 email marketing and
                        autonomations brand *
                    </Heading>
                    <Text>
                        Grow your revenue with targeted and engaging emails that
                        get more customers to open, click, and buy.
                    </Text>
                </Box>
                <Box>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/9i_WVm5LPSc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>

                    </iframe>

                </Box>
            </Flex>
{/* ..........................................................................2ND PART .................................. */}
            <Box>
                <Grid className="container"
                // templateColumns="repeat(4,350px)" gap='2px' 
                // marginTop={7} 
                // padding={9}
                // marginLeft='3%'
                >

                    <div>
                        <Image src="https://eep.io/images/yzco4xsimv0y/3ucGAQHiZLvrr8ojKz9tsz/acc2f6d3c599870372335d74fecbfe3e/WebOverhaul_EmailOverview_HorizontalGrid01.png?w=302&fm=webp&q=80"
                        />
                        <p className="heading">   Designs & Templates</p>
                        <Text>  Get Inspiration from our drag and drop email templates or code your own </Text>

                        <div>
                            <div className="flex">
                                <p> Explore email Templates </p>
                                {/* <AiOutlineArrowRight /> */}
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB9CAMAAAASsZjuAAAAY1BMVEX///8AAAC/v7/q6urh4eEmJibn5+cqKiogICDu7u7k5OQdHR0TExMjIyP5+fmwsLA3NzempqYwMDBBQUG4uLjT09NNTU1ycnJkZGTHx8eVlZWJiYlaWloMDAycnJwYGBiAgIAKKuplAAACzElEQVR4nO2c/XKCMBDEjUExRYEq0NIvff+nrNrCCISwf5TutuPvAZid5O5y3F2yWNy5869JyyIrypQtYwSb5eaLPFuzxXj4aORd2D+y5fSJDqZLZdmSOpS56XNU2mZ7HOgzZvfAltWSvnn0nZFZw0e/PrNSscMRfWcitrQrYwt4JlHY5fRpXKBJBNbQbgICjeHbYRTUZ1b0XS7DAo1hx8N6SiA72kyuoNlyPWXCBq8KqXZoV9MKV1Q7DMXBFuYaZojAmOkpW0Qh81yGltBsiLv8DCnc8dYwBRz5As8O15gZxrxddjGk8J23yw7bZOK57PaQQmIG6zA73BI9JZxaN8TENcQ8ZcvLHCwkkHkug55CzGDBaLPhraHF7JDpKTtIIbE6Z/XPZcxTjvKeon8uEzNYl0AKif/LEyWvBma0+S/ZV/BcTqN6ORs19jMaiDbRU4UF/ZlJ/GsYjfQ2CHg9JVCZ/302wwz2xNbUZd+Ph69sRX16+eGSrWdI1YkubDU+shuBL2wxPg6u1eeGzWcFilbgZF+Dw5uuC3/TCuyPP6hQNgI1TdCYWl1goS6w/jM2KO/F8nFQ/iSRP4v1sxlFK+zkg4KOPKi4qv+T6P/Vnf+LsR7vbzBWQYpOFVbwnpmRysI13mjXZmbGvUP6aF0nsG9Hqw9arAYcs/qKzje3PITWOwb7YbQqv3qfRL3TtAbjC6tH4rAOCa3biYw7GmIHR73jrj6zgE59uOlPzYLD7I82N4NOHtHOXyz+qZ+/vPwKkkc8f8EJTJp//ED3ek5SsPFMm0NRn6MGJ9F5czzqs/zytyHU75PI38hB7jRR74XJ3wr7+/fq2DcTJ2yQetvqivzt2GAcTNj7eyHQMWDeBLtB1z++kX8lQP6dBf9U8k5Hn/etj0B/hkFU9fSJvZay6L03k8u9N7O4vNjTDLzkhdzyNZTLYin75tGdOwifRWkt9axt6z0AAAAASUVORK5CYII="
                                    width='25px' />
                            </div>
                        </div>

                    </div>

                    <div>
                        <Image src="https://eep.io/images/yzco4xsimv0y/5DgbjYOTeeyzxQ6510YZ2B/15b296cae9094f71a1cb7faf1e90ba0c/WebOverhaul_EmailOverview_HorizontalGrid03.png?w=302&fm=webp&q=80"
                        />

                        <p className="heading">
                            Segmentation
                        </p>
                        <Text>
                            Use our targeting tools to boost customer engagement and loyality.

                        </Text>

                        <div>
                            <div className="flex">
                                <p> Explore Segmentation  </p>
                                {/* <AiOutlineArrowRight /> */}
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB9CAMAAAASsZjuAAAAY1BMVEX///8AAAC/v7/q6urh4eEmJibn5+cqKiogICDu7u7k5OQdHR0TExMjIyP5+fmwsLA3NzempqYwMDBBQUG4uLjT09NNTU1ycnJkZGTHx8eVlZWJiYlaWloMDAycnJwYGBiAgIAKKuplAAACzElEQVR4nO2c/XKCMBDEjUExRYEq0NIvff+nrNrCCISwf5TutuPvAZid5O5y3F2yWNy5869JyyIrypQtYwSb5eaLPFuzxXj4aORd2D+y5fSJDqZLZdmSOpS56XNU2mZ7HOgzZvfAltWSvnn0nZFZw0e/PrNSscMRfWcitrQrYwt4JlHY5fRpXKBJBNbQbgICjeHbYRTUZ1b0XS7DAo1hx8N6SiA72kyuoNlyPWXCBq8KqXZoV9MKV1Q7DMXBFuYaZojAmOkpW0Qh81yGltBsiLv8DCnc8dYwBRz5As8O15gZxrxddjGk8J23yw7bZOK57PaQQmIG6zA73BI9JZxaN8TENcQ8ZcvLHCwkkHkug55CzGDBaLPhraHF7JDpKTtIIbE6Z/XPZcxTjvKeon8uEzNYl0AKif/LEyWvBma0+S/ZV/BcTqN6ORs19jMaiDbRU4UF/ZlJ/GsYjfQ2CHg9JVCZ/302wwz2xNbUZd+Ph69sRX16+eGSrWdI1YkubDU+shuBL2wxPg6u1eeGzWcFilbgZF+Dw5uuC3/TCuyPP6hQNgI1TdCYWl1goS6w/jM2KO/F8nFQ/iSRP4v1sxlFK+zkg4KOPKi4qv+T6P/Vnf+LsR7vbzBWQYpOFVbwnpmRysI13mjXZmbGvUP6aF0nsG9Hqw9arAYcs/qKzje3PITWOwb7YbQqv3qfRL3TtAbjC6tH4rAOCa3biYw7GmIHR73jrj6zgE59uOlPzYLD7I82N4NOHtHOXyz+qZ+/vPwKkkc8f8EJTJp//ED3ek5SsPFMm0NRn6MGJ9F5czzqs/zytyHU75PI38hB7jRR74XJ3wr7+/fq2DcTJ2yQetvqivzt2GAcTNj7eyHQMWDeBLtB1z++kX8lQP6dBf9U8k5Hn/etj0B/hkFU9fSJvZay6L03k8u9N7O4vNjTDLzkhdzyNZTLYin75tGdOwifRWkt9axt6z0AAAAASUVORK5CYII="
                                    width='25px' />
                            </div>
                        </div>

                    </div>

                    <div>
                        <Image src="https://eep.io/images/yzco4xsimv0y/5DgbjYOTeeyzxQ6510YZ2B/15b296cae9094f71a1cb7faf1e90ba0c/WebOverhaul_EmailOverview_HorizontalGrid03.png?w=302&fm=webp&q=80"
                        />
                        <p className="heading">
                            Automations
                        </p>
                        <Text>
                            Drive more site traffic and sales with email automation
                        </Text>
                        <div>
                            <div className="flex">
                                <p> Explore automations </p>
                                {/* <AiOutlineArrowRight /> */}
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB9CAMAAAASsZjuAAAAY1BMVEX///8AAAC/v7/q6urh4eEmJibn5+cqKiogICDu7u7k5OQdHR0TExMjIyP5+fmwsLA3NzempqYwMDBBQUG4uLjT09NNTU1ycnJkZGTHx8eVlZWJiYlaWloMDAycnJwYGBiAgIAKKuplAAACzElEQVR4nO2c/XKCMBDEjUExRYEq0NIvff+nrNrCCISwf5TutuPvAZid5O5y3F2yWNy5869JyyIrypQtYwSb5eaLPFuzxXj4aORd2D+y5fSJDqZLZdmSOpS56XNU2mZ7HOgzZvfAltWSvnn0nZFZw0e/PrNSscMRfWcitrQrYwt4JlHY5fRpXKBJBNbQbgICjeHbYRTUZ1b0XS7DAo1hx8N6SiA72kyuoNlyPWXCBq8KqXZoV9MKV1Q7DMXBFuYaZojAmOkpW0Qh81yGltBsiLv8DCnc8dYwBRz5As8O15gZxrxddjGk8J23yw7bZOK57PaQQmIG6zA73BI9JZxaN8TENcQ8ZcvLHCwkkHkug55CzGDBaLPhraHF7JDpKTtIIbE6Z/XPZcxTjvKeon8uEzNYl0AKif/LEyWvBma0+S/ZV/BcTqN6ORs19jMaiDbRU4UF/ZlJ/GsYjfQ2CHg9JVCZ/302wwz2xNbUZd+Ph69sRX16+eGSrWdI1YkubDU+shuBL2wxPg6u1eeGzWcFilbgZF+Dw5uuC3/TCuyPP6hQNgI1TdCYWl1goS6w/jM2KO/F8nFQ/iSRP4v1sxlFK+zkg4KOPKi4qv+T6P/Vnf+LsR7vbzBWQYpOFVbwnpmRysI13mjXZmbGvUP6aF0nsG9Hqw9arAYcs/qKzje3PITWOwb7YbQqv3qfRL3TtAbjC6tH4rAOCa3biYw7GmIHR73jrj6zgE59uOlPzYLD7I82N4NOHtHOXyz+qZ+/vPwKkkc8f8EJTJp//ED3ek5SsPFMm0NRn6MGJ9F5czzqs/zytyHU75PI38hB7jRR74XJ3wr7+/fq2DcTJ2yQetvqivzt2GAcTNj7eyHQMWDeBLtB1z++kX8lQP6dBf9U8k5Hn/etj0B/hkFU9fSJvZay6L03k8u9N7O4vNjTDLzkhdzyNZTLYin75tGdOwifRWkt9axt6z0AAAAASUVORK5CYII="
                                    width='25px' />
                            </div>
                        </div>

                    </div>

                    <div>
                        <Image src="https://eep.io/images/yzco4xsimv0y/7JgzUrbGZifIHiXkr6ueyc/aaa6b1e25ac442f13befd174e4dbc2db/WebOverhaul_EmailOverview_HorizontalGrid04.png?w=302&fm=webp&q=80"
                        />
                        <p className="heading">
                            Analytics & AI
                        </p>
                        <Text>
                            Get the insights you need to create content that performs.
                        </Text>
                        <div>
                            <div className="flex">
                                <p> Explore insights  </p>
                                {/* <AiOutlineArrowRight /> */}
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB9CAMAAAASsZjuAAAAY1BMVEX///8AAAC/v7/q6urh4eEmJibn5+cqKiogICDu7u7k5OQdHR0TExMjIyP5+fmwsLA3NzempqYwMDBBQUG4uLjT09NNTU1ycnJkZGTHx8eVlZWJiYlaWloMDAycnJwYGBiAgIAKKuplAAACzElEQVR4nO2c/XKCMBDEjUExRYEq0NIvff+nrNrCCISwf5TutuPvAZid5O5y3F2yWNy5869JyyIrypQtYwSb5eaLPFuzxXj4aORd2D+y5fSJDqZLZdmSOpS56XNU2mZ7HOgzZvfAltWSvnn0nZFZw0e/PrNSscMRfWcitrQrYwt4JlHY5fRpXKBJBNbQbgICjeHbYRTUZ1b0XS7DAo1hx8N6SiA72kyuoNlyPWXCBq8KqXZoV9MKV1Q7DMXBFuYaZojAmOkpW0Qh81yGltBsiLv8DCnc8dYwBRz5As8O15gZxrxddjGk8J23yw7bZOK57PaQQmIG6zA73BI9JZxaN8TENcQ8ZcvLHCwkkHkug55CzGDBaLPhraHF7JDpKTtIIbE6Z/XPZcxTjvKeon8uEzNYl0AKif/LEyWvBma0+S/ZV/BcTqN6ORs19jMaiDbRU4UF/ZlJ/GsYjfQ2CHg9JVCZ/302wwz2xNbUZd+Ph69sRX16+eGSrWdI1YkubDU+shuBL2wxPg6u1eeGzWcFilbgZF+Dw5uuC3/TCuyPP6hQNgI1TdCYWl1goS6w/jM2KO/F8nFQ/iSRP4v1sxlFK+zkg4KOPKi4qv+T6P/Vnf+LsR7vbzBWQYpOFVbwnpmRysI13mjXZmbGvUP6aF0nsG9Hqw9arAYcs/qKzje3PITWOwb7YbQqv3qfRL3TtAbjC6tH4rAOCa3biYw7GmIHR73jrj6zgE59uOlPzYLD7I82N4NOHtHOXyz+qZ+/vPwKkkc8f8EJTJp//ED3ek5SsPFMm0NRn6MGJ9F5czzqs/zytyHU75PI38hB7jRR74XJ3wr7+/fq2DcTJ2yQetvqivzt2GAcTNj7eyHQMWDeBLtB1z++kX8lQP6dBf9U8k5Hn/etj0B/hkFU9fSJvZay6L03k8u9N7O4vNjTDLzkhdzyNZTLYin75tGdOwifRWkt9axt6z0AAAAASUVORK5CYII="
                                    width='25px'

                                />
                            </div>
                        </div>

                    </div>





                </Grid>
            </Box>

            <Box backgroundColor='#e7b75f' h='700px' mt='5%' mb='5%'>
                <Flex gap='35px' ml='5%'>
                    <Box mt='10%' padding={5} >
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/C3iEEGCp0HY"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                    </Box>
                    <Box width='550px' mt='12%' ml='10%'>
                        <Heading fontSize='30px'>
                            Outperform your last campaign with Mailchimp's data-driven tools
                        </Heading>
                        <Text mt='2%' fontSize='19px'>
                            Most email marketing platforms tell you how your emails performed.
                            Mailchimp shows you ways to get more engagement and revenue.
                        </Text>
                        <Button mt={7}
                            borderRadius='25%'
                            backgroundColor='#e7b75f'
                            color='black'
                            border='1px solid'
                        >
                            Sign up
                        </Button>
                    </Box>
                </Flex>
            </Box>
            {/* .................................FIND THE RIGHT PLAN ................................................ */}
            <Box bg="#f6f6f4" pb="80px">
      <Heading textAlign="center" pt="80px" mb="40px">Find the right plan</Heading>
      <Box className="price_section">
        <Box  className="cards1" >
          <Heading mb="15px">Primium</Heading>
          <Text mb="15px">
            Our most advanced tools, unlimited contacts, and priority support;
            built for teams.
          </Text>
          <Text>starts at</Text>
          <Text display="flex">
            ₹
            <span>
              {" "}
              <Heading>23,000</Heading>
            </span>
          </Text>
          <Text>/month based on 10,000 contacts*</Text>
          <Box className="pricing-child">
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
              <Text textDecoration="underline">Phone & Priority Support</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">Max Contacts:Unlimited</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline" >
              Custom-Coded and Pre-built Email Templates
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline" >Multivariate and A/B Testing</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">
              Enhanced Autometed Customer Journey
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">Predictive Segmentation</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">
              Dedicated Onboarding Specialist
            </Text>
            </Text>
          </Box>
        </Box>
        {/* -----1---- */}
        <Box className="cards2" position="relative">
{/* <Box position="absolute" top={-10} left={0} bg="#c5dbf2" border="0.1px solid rgb(186, 180, 180)" width="100%" height="40px"><Text textAlign="center" mt="8px" >Mailchimp Recommends</Text></Box> */}
          <Heading>Primium</Heading>
          <Text>
            Our most advanced tools, unlimited contacts, and priority support;
            built for teams.
          </Text>
          <Text>starts at</Text>
          <Text display="flex">
            ₹
            <span>
              {" "}
              <Heading>23,000</Heading>
            </span>
          </Text>
          <Text>/month based on 10,000 contacts*</Text>
          <Box className="pricing-child">
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
              <Text textDecoration="underline">Phone & Priority Support</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">Max Contacts:Unlimited</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">
              Custom-Coded and Pre-built Email Templates
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">Multivariate and A/B Testing</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">
              Enhanced Autometed Customer Journey
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">Predictive Segmentation</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">
              Dedicated Onboarding Specialist
            </Text>
            </Text>
          </Box>
        </Box>
        {/* ----2----- */}
        <Box className="cards3">
          <Heading>Primium</Heading>
          <Text>
            Our most advanced tools, unlimited contacts, and priority support;
            built for teams.
          </Text>
          <Text>starts at</Text>
          <Text display="flex">
            ₹
            <span>
              {" "}
              <Heading>23,000</Heading>
            </span>
          </Text>
          <Text>/month based on 10,000 contacts*</Text>
          <Box className="pricing-child">
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
              <Text textDecoration="underline">Phone & Priority Support</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">Max Contacts:Unlimited</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">
              Custom-Coded and Pre-built Email Templates
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">Multivariate and A/B Testing</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">
              Enhanced Autometed Customer Journey
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">Predictive Segmentation</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">
              Dedicated Onboarding Specialist
            </Text>
            </Text>
          </Box>
        </Box>
        {/* ------3--------- */}
        <Box className="cards4" >
          <Heading>Primium</Heading>
          <Text>
            Our most advanced tools, unlimited contacts, and priority support;
            built for teams.
          </Text>
          <Text>starts at</Text>
          <Text display="flex">
            ₹
            <span>
              {" "}
              <Heading>23,000</Heading>
            </span>
          </Text>
          <Text>/month based on 10,000 contacts*</Text>
          <Box className="pricing-child">
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
              <Text textDecoration="underline">Phone & Priority Support</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">Max Contacts:Unlimited</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">
              Custom-Coded and Pre-built Email Templates
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">Multivariate and A/B Testing</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">
              Enhanced Autometed Customer Journey
            </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">Predictive Segmentation</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckboxIcon />
            <Text textDecoration="underline">
              Dedicated Onboarding Specialist
            </Text>
            </Text>
          </Box>
        </Box>
        {/* -------4--------- */}
      </Box>
      <Text fontSize={12} mt="20px" textAlign="center">*Overages apply if contact or email send limit is exceeded. Free plan sending will be paused if contact or email send limit is exceeded. Learn more</Text>
    <Button display="block" margin="auto" mt="50px" border="1px solid black" bg="#ffe01b" borderRadius={50} height="50px" width="200px" fontWeight={0} >See all plan Details</Button>
             </Box>
{/* .............................................FIND THE RIGHT PLAN .......................................................... */}
            
            {/* ....................................5th Part  */}
            <Box backgroundColor='#e7b75f' 
            // h='700px'
            h={{
                "lg":'700px',
                "md":'350px',
                "base":'150px'
                }}
                mt= 
                '5%' 
                mb='5%'
                >

            <div className="flex_res">
                 <Box mt='10%' padding={5} >
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/C3iEEGCp0HY"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                    </Box>
                    <Box 
                    // width={{lg:'550px',md:'250px',base:'24px'}} 
                    // mt={{lg:'12%', base: '2%'}}
                    // ml={{lg:'10%',base:'2%'}}
                    >
                        <Heading fontSize='30px'>
                            Outperform your last campaign with Mailchimp's data-driven tools
                        </Heading>
                        <Text mt='2%' fontSize='19px'>
                            Most email marketing platforms tell you how your emails performed.
                            Mailchimp shows you ways to get more engagement and revenue.
                        </Text>
                        <Button mt={7}
                            borderRadius='25%'
                            backgroundColor='#e7b75f'
                            color='black'
                            border='1px solid'
                        >
                            Sign up
                        </Button>
                    </Box>
                </div>   
                
            </Box>
            {/* ..................................testing............................................. */}
           
            </Box>

    )
}
