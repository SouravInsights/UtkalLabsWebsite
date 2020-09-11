import React from "react";
import { Text, Heading, Box, Image } from "@chakra-ui/core";

function GridCard({ cardheading, carddescription, size, children }) {
  return (
    <Box>
      <Heading
        fontSize={size}
        color="purple.100"
        letterSpacing="wide"
        fontWeight="extrabold"
      >
        {cardheading}
      </Heading>
      <Text py="12px" fontSize="22px" color="gray.100" fontWeight="normal">
        {carddescription}
      </Text>
      {children}
    </Box>
  );
}

export default GridCard;
