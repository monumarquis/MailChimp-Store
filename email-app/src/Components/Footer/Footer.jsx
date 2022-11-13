import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Divider,
    Image,
  } from '@chakra-ui/react';
  import { Icon } from '@chakra-ui/icons';
  import { TbWorld } from "react-icons/tb";

  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={'#E7B75F'}
        color={'black'}>
          <Container as={Stack} maxW={'6xl'} py={10} w='80%'>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
          <ListHeader fontWeight={'bold'}>Related Links:</ListHeader>
          <Link href={'#'} fontSize='sm'>How to Build a Great Website</Link>
          <Link href={'#'} fontSize='sm'>Start an Online eCommerce Business</Link>
          <Link href={'#'} fontSize='sm'>How to Sell Anything to Any Audience</Link>
          </SimpleGrid>
        </Container>
        <Divider bg={'black'}/>
        <Container as={Stack} maxW={'6xl'} py={10} w='70%'>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 6 }} spacing={4}>
            <Stack align={'flex-start'} fontSize='sm'>
              <ListHeader>Product</ListHeader>
              <Link href={'#'}>Why Mailchimp?</Link>
              <Link href={'#'}>Product Updates</Link>
              <Link href={'#'}>Email Marketing</Link>
              <Link href={'#'}>Transactional Email</Link>
              <Link href={'#'}>Websites</Link>
              <Link href={'#'}>How We Compare</Link>
              <Link href={'#'}>GDPR Compliance</Link>
              <Link href={'#'}>Security</Link>
              <Link href={'#'}>Status</Link>
              <Link href={'#'}>Mobile App</Link>
            </Stack>
            <Stack align={'flex-start'} fontSize='sm'>
              <ListHeader>Resources</ListHeader>
              <Link href={'#'}>Marketing Library</Link>
              <Link href={'#'}>Free Marketing Tools</Link>
              <Link href={'#'}>Marketing Glossary</Link>
              <Link href={'#'}>Integrations Directory</Link>
            </Stack>
            <Stack align={'flex-start'} fontSize='sm'>
              <ListHeader>Community</ListHeader>
              <Link href={'#'}>Agencies & Freelancers</Link>
              <Link href={'#'}>Developers</Link>
              <Link href={'#'}>Event</Link>
            </Stack>
            <Stack align={'flex-start'} fontSize='sm'>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>Our Story</Link>
              <Link href={'#'}>Newsroom</Link>
              <Link href={'#'}>Annual Report</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Accessibility</Link>
            </Stack>
            <Stack align={'flex-start'} fontSize='sm'>
              <ListHeader>Help</ListHeader>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Hire an Expert</Link>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Talk to Sales</Link>
            </Stack>
              
            <Stack align={'flex-start'} fontSize='sm'>
            <Image width={100} src='https://logos-world.net/wp-content/uploads/2021/02/Mailchimp-Logo-2018-present.png' alt='logo'/>
            <Text>Films, podcasts, and original series that celebrate the entrepreneurial spirit.</Text>
            <ListHeader>Check it out</ListHeader>
            </Stack>
          </SimpleGrid>
        </Container>
        <Divider bg={'black'}/>
        <Container as={Stack} maxW={'6xl'} py={10} w='80%'>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={4}>
            <Flex gap={2}>
            <Image width={100} src='https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?w=320&fm=webp&q=80' alt='logo'/>
            <Image width={100} src='https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?w=320&fm=webp&q=80' alt='logo'/>
            </Flex>
            <Flex>

            </Flex>
          </SimpleGrid>
        </Container>
        
      </Box>
    );
  }