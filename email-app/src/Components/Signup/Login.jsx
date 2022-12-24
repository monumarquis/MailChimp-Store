import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Text,
  } from '@chakra-ui/react';
  
  import React, { useRef, useState } from "react";
  import { login } from "../../firebase-config";
  // import {Link, useNavigate} from "react-router-dom";
  import {useSelector , useDispatch} from 'react-redux';
  import { userEmail} from '../../Redux/actions'
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
 
export default function Login() {

  const usenavigate=useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
      const payload = {
          email,
          password
      }
     
      try{
        let res = await axios.post("https://fragile-pear-dove.cyclic.app/user/login", payload)
     console.log(res)
     if(res.data === "Login failed")
     {
       alert("Wrong Password or Email");
       return;
     }
     alert("Login successfull");
     usenavigate("/adminpannel");
     }
     catch(err)
     {
       console.log(err);
     }
  
  }

  
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg="#ffe01b">
        <Flex px={2} >
          <Stack px={8}  spacing={4} w='100%' bg="white">
          <Image width={10} py={8} src='https://login.mailchimp.com/release/1.1.12db68f65958dbea8011b2efdf4e026e5d28738e2/images/brand_assets/logos/mc-freddie-dark.svg' alt='logo-login'/>
            <Stack py={14} spacing={8} w={"100%"}>
            <Heading fontSize={'4xl'}>Log In</Heading>
            <Text fontSize={'md'}>Need a Mailchimp account? <NavLink color={"teal.600"} to="/signup">Create an account</NavLink></Text>
            <FormControl id="email" position="-moz-initial">
              <FormLabel fontWeight={'bold'}>Username or Email</FormLabel>
              <Input type="email" position="-moz-initial" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" position="-moz-initial">
              <FormLabel fontWeight={'bold'} >Password</FormLabel>
              <Input type="password" position="-moz-initial" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button size='md' px={8} colorScheme={'teal'} variant={'solid'} position="-moz-initial"
            onClick={handleSubmit}>
                Log in
              </Button>
              
            <Stack spacing={6}>
              <Stack 
                align={'center'}>
                <Checkbox size='lg' position="-moz-initial"> <Text fontSize='md' fontWeight={'bold'}>Keep me Logged in </Text> </Checkbox>
              </Stack>
              <Stack spacing={4} align='center'>
              <Text fontSize='md' ><Link color={"teal.600"}>Forget username?</Link> . <Link color={"teal.600"}>Forget Password?</Link></Text>
              </Stack>
              <Stack spacing={4} align='center'>
              <Text fontSize='md' ><Link color={"teal.600"}>Can't Log In?</Link></Text>
              </Stack>
            </Stack>
            </Stack>
            <Text fontSize='xs'>
              ©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and Terms.</Text>
          </Stack>
        </Flex>
        <Flex>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://login.mailchimp.com/release/1.1.18989beff3e65725c15a3c59a3f769b8767de4893/images/brand_assets/illos/art-hero-flowers.png'
            }
          />
        </Flex>
      </Stack>
    );
  }