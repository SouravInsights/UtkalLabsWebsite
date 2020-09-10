import React from "react";
import { Text, Heading, Box, Image } from "@chakra-ui/core";

function GridCard({
  cardheading,
  carddescription,
  src,
  alt,
  iconheight,
  size,
  color,
  children,
}) {
  return (
    <Box my="10px">
      <Heading
        fontSize={size}
        mt="10px"
        color="purple.100"
        letterSpacing="wide"
        fontWeight="extrabold"
      >
        {cardheading}
      </Heading>
      <Text my="6px" fontSize="18px" color={color} fontWeight="medium">
        {carddescription}
      </Text>
      {children}
    </Box>
  );
}

export default GridCard;
