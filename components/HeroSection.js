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
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={10}
      px={["30px", "30px", "100px", "120px"]}
      py={["30px", "30px", "40px", "40px"]}
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
      <Flex justifyContent={["center", "center", "flex-end", "flex-end"]}>
        <Image w="60%" src={src} alt={alt} />
      </Flex>
    </Grid>
  );
}

export default HeroSection;
