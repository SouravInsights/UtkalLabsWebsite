import React from "react";
import { Box, Flex, Grid, Heading, Text, Image } from "@chakra-ui/core";

function HeroSection({
  title,
  heading,
  description,
  buttontext,
  src,
  alt,
  children,
}) {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      gap={10}
      px={["30px", "30px", "180px", "220px"]}
      py={["30px", "30px", "40px", "40px"]}
    >
      <Box>
        <Heading
          fontSize="xl"
          color="gray.50"
          fontWeight="extrabold"
          letterSpacing="0.20rem"
        >
          {title}
        </Heading>
        <Heading
          pt={["20px"]}
          pb={["40px"]}
          fontSize="5xl"
          color="purple.100"
          fontWeight="extrabold"
        >
          {heading}
        </Heading>
        <Text
          fontSize={["xl", "xl", "2xl", "2xl"]}
          color="gray.200"
          fontWeight="normal"
          pb={["40px"]}
        >
          {description}
        </Text>
        {children}
      </Box>
      <Flex
        //bg="#456789"
        justifyContent={["center", "center", "flex-end", "flex-end"]}
      >
        <Image w="80%" h="80%" src={src} alt={alt} />
      </Flex>
    </Grid>
  );
}

export default HeroSection;
