import React from 'react';
import { Box, Heading, Flex, Image, Button } from '@chakra-ui/core';
import { motion } from 'framer-motion';

const WorksCardWrapper = motion.custom(Flex);

const WorksCard = ({ src, title, desc, alt, children }) => {
  return (
    <WorksCardWrapper
      zIndex="0"
      flex="0 1 auto"
      my={['20px', '20px', '40px', '40px']}
      mx="auto"
      borderRadius="12px"
      flexDirection="column"
      align="center"
      maxWidth="526px"
      bg="#2C2929"
      boxShadow="0px 15px 30px rgba(0, 0, 0, 0.25)"
      whileHover={{ scale: 1.1 }}
    >
      <Image
        borderRadius="10px"
        zIndex="1"
        my="20px"
        maxWidth="90%"
        src={src}
        alt={alt}
      />

      <Heading
        mb="20px"
        w="90%"
        fontWeight="extrabold"
        color="white"
        fontSize={['xl', 'xl', '2xl', '2xl']}
      >
        {title}
        &nbsp; - &nbsp;
        <Heading
          as="span"
          fontSize={['xl', 'xl', '2xl', '2xl']}
          fontWeight="medium"
        >
          {desc}
        </Heading>
      </Heading>
      <Flex w="90%" mb="20px" justifyContent="flex-start" wrap="wrap">
        {children}
      </Flex>
      <Box
        w="90%"
        mb="20px"
        d="flex"
        flexDirection="row"
        justify="center"
        align="center"
      >
        <Button
          bg="black"
          borderRadius="14px"
          w="auto"
          h="40px"
          color="white"
          fontSize="xl"
          fontWeight="bold"
        >
          See live
        </Button>
      </Box>
    </WorksCardWrapper>
  );
};

export default WorksCard;
