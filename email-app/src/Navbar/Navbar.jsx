import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Divider,

} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon,Search2Icon, Icon,ChevronRightIcon } from '@chakra-ui/icons';
import { TbWorld } from "react-icons/tb";




function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('teal.600', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  

  return (
    <>
      <Box mb={20} bg={"white"} px={4} as="header" position="fixed" w="100%" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                {/* <NavLink key={link}>{link}</NavLink> */}
              {/* ))} */} 
              {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={'bold'}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}

            </HStack>
          </HStack>
          <Box><Image width={140} src='https://logos-world.net/wp-content/uploads/2021/02/Mailchimp-Logo-2018-present.png' alt='logo'/>
          </Box>
            
          <Flex alignItems={'center'} gap={6}>
            <Flex direction='column' alignItems={'end'} display={{ base: 'none', md: 'inline-flex' }}>
              <Text>Sales:</Text>
              <Text>+1(800)315-5939</Text>
            </Flex>
            <Box display={{ base: 'none', md: 'inline-flex' }} ><Icon as={TbWorld} w={6} h={6}/></Box>
            <Button display={{ base: 'none', md: 'inline-flex' }} ><Search2Icon /></Button>
            <Button  >Log in</Button>
            <Button  display={{ base: 'none', md: 'inline-flex' }} >Sign Up</Button>

          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}

export default Navbar;


const Links = ['Products', 'Resources', 'Inspiration','Pricing'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('white.200', 'white.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('teal.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'teal.600' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'teal.500'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};


const NAV_ITEMS = [
  {
    label: 'Products',
    children: [
      {
        label: 'WEll HELP YOU --',
        href: '#',
      },
      {
        label: 'Get Your Business Online',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Market Your Business',
        href: '#',
      },
      {
        label: <Divider />,
        href: '#',
      },
      {
        label: 'PLATFORM FEATURES --',
        href: '#',
      },
      {
        label: 'Audience Management',
        href: '#',
      },
      {
        label: 'Creative Tools',
        href: '#',
      },
      {
        label: 'Marketing Automation ',
        href: '#',
      },
      {
        label: 'Insight & Analytics',
        href: '#',
      },
      {
        label: <Divider />,
        href: '#',
      },
      {
        label: 'NOT SURE WHERE TO START --',
        href: '#',
      },
      {
        label: 'Whats Right for Me ?',
        href: '#',
      },
      {
        label: '',
        href: '#',
      },
      
    ],
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'LEARN --',
        href: '#',
      },
      {
        label: 'Mailchimp 101',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Help Center',
        href: '#',
      },
      {
        label: 'Markectng Library',
        href: '#',
      },
      {
        label: <Divider />,
        href: '#',
      },
      {
        label: 'COMMUNITY --',
        href: '#',
      },
      {
        label: 'For Freelancers & Agencies',
        href: '#',
      },
      {
        label: 'For Developers ',
        href: '#',
      },
      {
        label: 'Hier ATrusted Partner',
        href: '#',
      },
      {
        label: <Divider />,
        href: '#',
      },
      {
        label: 'NOT SURE WHERE TO START --',
        href: '#',
      },
      {
        label: 'Whats Right for Me ?',
        href: '#',
      },
      {
        label: '',
        href: '#',
      },
      
    ],
  },
  {
    label: 'Inspiration',
    children: [
      {
        label: 'MailChimp Presents--',
        href: '#',
      },
      {
        label: 'Podcasts',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Series',
        href: '#',
      },
      {
        label: 'Films',
        href: '#',
      },
      {
        label: <Divider />,
        href: '#',
      },
      {
        label: 'Courier',
        href: '#',
      },
      {
        label: 'Expert Insights',
        href: '#',
      },
      {
        label: 'Industry Treds',
        href: '#',
      },
      {
        label: 'Smatr Living ',
        href: '#',
      },
      {
        label: <Divider />,
        href: '#',
      },
      {
        label: 'NOT SURE WHERE TO START --',
        href: '#',
      },
      {
        label: 'Whats Right for Me ?',
        href: '#',
      },
      {
        label: '',
        href: '#',
      },
      
    ],
  },
  {
    label: 'Pricing',
    href: '#',
  },
];
