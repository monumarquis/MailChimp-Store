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

// import { signup } from "../../firebase-config";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
  
  
export default function Signup() {

  const usenavigate=useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
      const payload = {
          email,
          password
      }
     
      fetch("https://fragile-pear-dove.cyclic.app/user/signup", {
          method : "POST",
          body : JSON.stringify(payload),
          headers : {
              'Content-Type': 'application/json'
          }
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        alert(res.msg)
        usenavigate("/login")
        
      })
      .catch((err) => {
        alert(err)
      })

  // old code start

  // const [loading,setloading]=useState(false)
  // const emailRef=useRef()
  // const passwordRef=useRef()
  // const navigate=useNavigate()

  // async function createuser(){
  //     setloading(true)
  //     try{
  //         await signup(emailRef.current.value,passwordRef.current.value)
  //         alert("user created")
  //         navigate("/login")
  //     }catch{        
  //         alert("user already exist")
  //     }
  //     setloading(false)
  }


    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg="#ffe01b">
        <Flex px={2}>
          <Stack px={8}  spacing={4} w='100%' bg="white">
          <Image width={10} py={4} src='https://login.mailchimp.com/release/1.1.12db68f65958dbea8011b2efdf4e026e5d28738e2/images/brand_assets/logos/mc-freddie-dark.svg' alt='logo-login'/>
            <Stack mx={8}  py={6} spacing={8} w={"100%"}>
            <Heading fontSize={'3xl'}>Sign up for Mailchimp</Heading>
            <Text>Create a free account or <Link color={"teal.600"}>log in</Link></Text>
            <FormControl id="email">
              <FormLabel fontWeight={'bold'}>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="username">
              <FormLabel fontWeight={'bold'}>Username</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="password">
              <FormLabel fontWeight={'bold'}>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox size='lg'> <Text fontSize='xs'>I dont't want to receive emails about Mailchimp and related and intuit product and feature updates, marketing best practices, and promotions from Mailchimp. </Text> </Checkbox>
              </Stack>
              <Text fontSize='xs'>By creating an account, you agree to our <Link color={"teal.600"}>Terms</Link> and have read and acknowledge the <Link color={"teal.600"}>Global Privacy Statement.</Link></Text>
              <Stack spacing={4} align='start'>
              <Button size='md' px={8} colorScheme={'teal'} variant={'solid'} 
              // onClick={createuser} disabled={loading}
              onClick={handleSubmit}
              >
                Sign Up
              </Button>
              </Stack>
             <Text fontSize='xs' > Invisible reCAPTCHA by Google <Link color={"teal.600"}>Privacy Policy</Link> and <Link color={"teal.600"}>Terms of Use.</Link></Text>
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