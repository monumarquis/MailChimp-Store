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
  import { login } from "../firebase-config";
  // import {Link, useNavigate} from "react-router-dom";
  import {useSelector , useDispatch} from 'react-redux';
  import { userEmail} from '../Redux/actions'
  
export default function Login() {

  const userReduxEmail = useSelector( store => store.email);
    console.log("redux data",userReduxEmail );

    const dispatch = useDispatch();

    const [loading,setloading]=useState(false);
    const [userNotFound,setuserNotFount]=useState(false);
    const emailRef=useRef();
    const passwordRef=useRef();
    // const usenavigate=useNavigate()

    async function signin(){
      setloading(true)

      dispatch( userEmail(emailRef.current.value));
      try{
          await login(emailRef.current.value,passwordRef.current.value)
          alert("Login Succesful")
          // usenavigate("/")
      }catch(error){
          setuserNotFount(true)
          var errorMessage = error.message;
          console.log(errorMessage);
          alert("User not Exist")
      }
      setloading(false)
  }


    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg="#ffe01b">
        <Flex px={2} >
          <Stack px={8}  spacing={4} w='100%' bg="white">
          <Image width={10} py={8} src='https://login.mailchimp.com/release/1.1.12db68f65958dbea8011b2efdf4e026e5d28738e2/images/brand_assets/logos/mc-freddie-dark.svg' alt='logo-login'/>
            <Stack py={14} spacing={8} w={"100%"}>
            <Heading fontSize={'4xl'}>Log In</Heading>
            <Text fontSize={'md'}>Need a Mailchimp account? <Link color={"teal.600"}>Create an account</Link></Text>
            <FormControl id="email">
              <FormLabel fontWeight={'bold'}>Username or Email</FormLabel>
              <Input type="email" ref={emailRef} />
            </FormControl>
            <FormControl id="password">
              <FormLabel fontWeight={'bold'} >Password</FormLabel>
              <Input type="password" ref={passwordRef} />
            </FormControl>
            <Button size='md' px={8} colorScheme={'teal'} variant={'solid'} disabled={loading} onClick={signin}>
                Log in
              </Button>
              
            <Stack spacing={6}>
              <Stack
                align={'center'}>
                <Checkbox size='lg'> <Text fontSize='md' fontWeight={'bold'}>Keep me Logged in </Text> </Checkbox>
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