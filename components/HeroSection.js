import React from "react";
import { Box, Grid, Heading, Text, Image } from "@chakra-ui/core";

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
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={10}
      px={["30px", "30px", "100px", "120px"]}
      py={["30px", "30px", "80px", "80px"]}
    >
      <Box>
        <Heading
          fontSize="xl"
          color="gray.200"
          fontWeight="extrabold"
          letterSpacing="0.20rem"
        >
          {title}
        </Heading>
        <Heading
          py={["40px"]}
          fontSize="5xl"
          color="blue.50"
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
      <Box justifyContent="flex-end">
        <Image src={src} alt={alt} />
      </Box>
    </Grid>
  );
}

export default HeroSection;
