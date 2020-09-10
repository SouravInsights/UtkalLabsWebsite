import React, { useLayoutEffect, useState } from "react";
import NextLink from "next/link";
import { Box, Flex, Button, Image, Heading, Link } from "@chakra-ui/core";

const NavLink = ({ children, ...props }) => (
  <Link
    mt={{ base: 4, md: 0 }}
    mr={6}
    display="block"
    fontSize={"xl"}
    fontWeight="medium"
    lineHeight="xl"
    color="black"
    {...props}
  >
    {children}
  </Link>
);

const NavBar = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      w="90%"
      mx="auto"
      my="60px"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="white"
      position="sticky"
      top="0"
      color="black"
      border="1px solid"
      borderColor="white"
      borderRadius="20px"
      boxShadow="offwhite.50"
      height={["auto", "auto", "80px", "80px"]}
      zIndex="1"
      {...props}
    >
      <Flex mr={5} align="center">
        <Heading as="h1" color="black" fontWeight="extrabold" size="lg">
          UtkalLabs
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          width="36"
          height="25"
          viewBox="0 0 36 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M3.66088 0.444519C-2.71505 0.999031 0.66087 3.94452 3.16089 4.94452H31.6609C34.8609 4.94452 35.1609 1.44434 31.1609 0.444484C25.8275 0.444484 15.1609 -0.555629 3.66088 0.444519Z"
              fill="#4D3A85"
            />
            <path
              d="M3.82177 19.3889C-2.55416 19.9434 0.821758 22.8889 3.32178 23.8889C22.1609 24.9443 28.6218 23.8889 31.8218 23.8889C35.0218 23.8889 35.3218 20.3887 31.3218 19.3888C25.9884 19.3888 15.3218 18.3887 3.82177 19.3889Z"
              fill="#4D3A85"
            />
            <path
              d="M4.32185 9.88881C-2.05408 10.4433 0.821851 12.8888 3.32186 13.8888C22.161 14.9443 28.6218 13.8888 31.8218 13.8888C35.0218 13.8888 36.661 10.9442 32.661 9.94433C27.3276 9.94433 15.8218 8.88866 4.32185 9.88881Z"
              fill="#4D3A85"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="36" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        color="black"
      >
        <NextLink href="/">
          <NavLink>Home</NavLink>
        </NextLink>
        <NextLink href="services">
          <NavLink>Services</NavLink>
        </NextLink>
        <NextLink href="about">
          <NavLink>About</NavLink>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default NavBar;
