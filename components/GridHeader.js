import React from "react";
import { Heading, Box, Text } from "@chakra-ui/core";

function GridHeader({ title, heading, description }) {
  return (
    <Box py={["10px", "10px", "10px", "10px"]} textAlign="center">
      <Heading
        fontSize="xl"
        color="gray.100"
        fontWeight="extrabold"
        letterSpacing="widest"
      >
        {title}
      </Heading>
      <Heading
        fontSize="42px"
        color="#2858D4"
        fontWeight="extrabold"
        letterSpacing="widest"
        my="20px"
      >
        {heading}
      </Heading>
      <Text
        fontSize={["xl", "xl", "2xl", "2xl"]}
        color="gray.100"
        fontWeight="normal"
        pb={["40px"]}
      >
        {description}
      </Text>
    </Box>
  );
}

export default GridHeader;
