import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// chakra
import { Flex, Box, Icon, IconButton, Button, InputGroup, InputRightElement, Input, Text, Stack, Link } from '@chakra-ui/react';

// icons
import { CgChevronDown, CgChevronUp } from 'react-icons/cg';
import { RiGithubFill, RiTwitterFill } from 'react-icons/ri';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';

export function Footer() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  function onToggle() {
    setIsExpanded(prevState => !prevState);
  }

  // Handle closing mobile menu when user clicks anywhere outside the menu.
  const footerRef = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (footerRef.current && !footerRef.current?.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  // Mocks

  const socials = [
    { SIcon: RiTwitterFill, href: 'https://twitter.com/KoiiNetwork', ariaLabel: 'Go to twitter' },
    { SIcon: FaDiscord, href: 'https://discord.gg/koii', ariaLabel: 'Go to discord' },
    { SIcon: FaTelegramPlane, href: 'https://t.me/koiinetwork', ariaLabel: 'Go to telegram' },
    { SIcon: RiGithubFill, href: 'https://github.com/koii-network/', ariaLabel: 'Go to github' }
  ];

  const footerOptions = [
    {
      title: 'Company',
      list: [
        { label: 'Home', href: 'https://koii.network/' },
        { label: 'About', href: 'https://koii.network/learn/about' },
        { label: 'Blog', href: 'https://blog.koii.network/' },
        { label: 'News', href: 'https://koii.network/learn/news' },
        { label: 'Node', href: 'https://koii.network/earn/everyone' },
        { label: 'Get the Extension', href: 'https://koii.network/getFinnie' },
        { label: 'Register NFTs', href: 'https://koi.rocks/contents' },
        { label: 'Support', href: 'mailto:support@koii.network' },
        { label: 'Press Kit', href: 'https://koii.network/Koii%20Press%20Kit%202021.zip' }
      ]
    },
    {
      title: 'GET INVOLVED',
      list: [
        {
          label: 'Run a Node',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSduDTdxD3dDOvcbIcKlG7JWOsnDFVZFdLy0J38q_OOzUC3okA/viewform'
        },
        {
          label: 'Earn for Code',
          href: 'https://docs.koii.network/?_ga=2.70639188.531406184.1631024953-281668328.1629214274#tools-for-easy-protocolization'
        },
        { label: 'Resources', href: 'https://koii.network/resources/' },
        { label: '› Lightpaper', href: 'https://koii.network/lightpaper.pdf' },
        { label: '› Technical Paper', href: 'https://koii.network/koi-protocol.pdf' },
        {
          label: '› Proofs of Real Traffic',
          href: 'https://koii.network/proofs-of-real-traffic.pdf'
        },
        { label: '› Gradual Consensus', href: 'https://koii.network/gradual-consensus.pdf' },
        {
          label: '› Universal Content Registry',
          href: 'https://koii.network/universal-content-registry.pdf'
        },
        {
          label: (
            <>
              100K KOII,{' '}
              <Text as="span" color="secondary.300">
                Enter to Win
              </Text>
            </>
          ),
          href: 'https://gleam.io/c3Cwz/-welcome-to-the-koii-drop-'
        }
      ]
    },
    {
      title: 'GET IN TOUCH',
      list: [
        {
          label: 'Apply for Partnerships',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSetLoXNxlztRjLSQPVWXeQYIoP1Hx5pzcAS5batEPQW45t2DQ/viewform?usp=sf_link'
        },
        {
          label: 'Apply for Grants',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSetLoXNxlztRjLSQPVWXeQYIoP1Hx5pzcAS5batEPQW45t2DQ/viewform?usp=sf_link'
        },
        { label: 'support@koii.network', href: 'mailto:support@koii.network' },
        { label: 'investors@koii.network', href: 'mailto:investors@koii.network' },
        { label: 'jobs@koii.network', href: 'mailto:jobs@koii.network' },
        { label: 'press@koii.network', href: 'mailto:press@koii.network' }
      ]
    }
  ];

  const footerEndLinks = [
    { label: 'Contest Terms & Conditions', href: 'https://koii.network/Contest_TC_-_Cheeky_Lil_Contest.pdf' },
    { label: 'Terms of Service', href: 'https://koii.network/TOU_June_22_2021.pdf' },
    { label: 'Privacy Policy', href: 'https://koii.network/Koi%20Labs%20Inc.%20Privacy%20Policy.pdf' }
  ];

  return (
    <>
      {/* Height spacer */}
      <Box h="50px" w="100vw" />
      {/* Footer Container */}
      <Box as="footer" w="100vw" bg="brand.500" py="2" px="4" pos="fixed" bottom="0" ref={footerRef}>
        {/* Max Width Container */}
        <Box w="100%" maxW="800px" mx="auto">
          {/* Footer Top Area */}
          <Flex align="center">
            {/*  Toggle */}
            <Button size="sm" fontSize="lg" px="0" colorScheme="brand" role="group" onClick={onToggle} _hover={{ bg: 'inherit' }} _active={{ bg: 'inherit' }} _focus={{ boxShadow: 'none' }}>
              Koii.X <Icon ml="2" boxSize="1rem" as={isExpanded ? CgChevronDown : CgChevronUp} transition="0.3s" _groupHover={{ transform: 'translateY(2px)' }} />
            </Button>

            {/* Spacer */}
            <Box ml="auto" />

            {/* Form */}
            <Flex align="center" d={{ base: 'none', md: 'flex' }}>
              <Text whiteSpace="pre" as="label" htmlFor="mce-EMAIL-footer" mr="4" color="white" fontSize="sm">
                Stay up to date
              </Text>
              <form action="https://openkoi.us1.list-manage.com/subscribe/post?u=d90823177f316ca38afbc6c61&id=b69c610637" method="post" target="_blank">
                <InputGroup>
                  <Input w={{ base: '100%', md: '275px' }} type="email" name="mce-EMAIL-footer" id="mce-EMAIL-footer" pr="5.5rem" placeholder="Email" color="black" rounded="3xl" required />
                  <InputRightElement width="5.5rem">
                    <Button type="submit" colorScheme="secondary" rounded="3xl" _focus={{ boxShadow: 'none' }} h="2rem" fontSize="sm" px="3">
                      SIGN UP
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </form>
            </Flex>

            {/* Social Icons */}
            <Stack ml="6" direction="row" spacing="2">
              {socials?.map(({ ariaLabel, SIcon, href }, i) => (
                <IconButton key={i} aria-label={ariaLabel} icon={<SIcon size="20px" />} as="a" target="_blank" href={href} colorScheme="brand" isRound _focus={{ boxShadow: 'none' }} />
              ))}
            </Stack>
          </Flex>

          {/* Footer Expandable Area */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <Box w="100%" py="5" color="white" maxH={{ base: '400px', md: 'unset' }} overflowY={{ base: 'auto', md: 'unset' }}>
                  {/* Footer lists */}
                  <Stack w="100%" direction={{ base: 'column', md: 'row' }} spacing="4">
                    {footerOptions?.map((option, i) => (
                      <Box flex={{ base: '0 0 100%', md: '0 0 33.33%' }} key={i}>
                        <Text fontSize="lg" fontWeight="500" textTransform="uppercase" mb="2" color="secondary.300">
                          {option?.title}
                        </Text>
                        {option?.list?.map((list, i) => (
                          <div key={i}>
                            <Link href={list?.href} isExternal>
                              {list?.label}
                            </Link>
                          </div>
                        ))}
                      </Box>
                    ))}
                  </Stack>

                  {/* Footer end links */}
                  <Stack mt="6" pt="4" borderTopWidth="1px" w="100%" direction="row" spacing="4">
                    {footerEndLinks?.map(({ href, label }, i) => (
                      <Link key={i} href={href} isExternal fontSize={{ base: 'xs', md: 'sm' }} color="gray.400">
                        {label}
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </Box>
    </>
  );
}
