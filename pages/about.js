import Head from "next/head";
import {
  Divider,
  Flex,
  Image,
  Heading,
  Box,
  Text,
  PseudoBox,
  Grid,
} from "@chakra-ui/core";
import React, { useEffect } from "react";
import Footer from "components/Footer";
import { motion } from "framer-motion";
import HeroSection from "components/HeroSection";

const MotionButton = motion.custom(PseudoBox);

const About = () => {
  return (
    <>
      <Head>
        <title>About - UtkalLabs</title>
      </Head>
      <HeroSection
        title="ABOUT"
        heading="Who we are"
        description=" We’re a digital experience partner for companies that strive to put
          their customers first and scale capabilities quickly."
        buttontext="Meet our Team"
        src="https://images.ctfassets.net/x7ylmnfcd6wz/3HToCJNuqjS7ZF6Eu4tmCt/023496da489cf598b53049966340a778/become-one-of-us_2x.webp"
        alt="about"
      />

      <Box
        backgroundRepeat="no-repeat"
        bgImage="url('https://images.ctfassets.net/kn9wi23xyla8/65svuGDzVkti1ASedKumMq/91c27ad54915beb7e79b87440696df6d/aboutbg.svg')"
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
          }}
          px={["30px", "30px", "220px", "260px"]}
          py={["30px", "30px", "60px", "60px"]}
        >
          <Flex flexDirection={["column", "column", "row", "row"]}>
            <Box>
              <Heading
                fontSize={["3xl", "4xl", "5xl", "6xl"]}
                fontWeight="extrabold"
                color="black"
              >
                Our mission
              </Heading>
              <Text
                fontSize={["md", "lg", "xl", "2xl"]}
                color="white"
                fontWeight="normal"
                w={["90%", "90%", "70%", "70%"]}
              >
                Our awesome mission statement goes here. Lorem ipsum dollar
                sheet Lorem ipsum. Lorem ipsum dollar sheet Lorem ipsum
              </Text>
            </Box>
            <Box py={["30px", "30px", "0px", "0px"]}>
              <Image src="https://images.ctfassets.net/x7ylmnfcd6wz/71VXHsSjP17BP7PRzAJPo0/0a4fa971350b12ff9290e5ab8daeac9e/mission.png?h=250" />
            </Box>
          </Flex>
          <Flex
            mt={["40px", "40px", "100px", "100px"]}
            flexDirection={["column", "column", "row-reverse", "row-reverse"]}
          >
            <Box
              alignItems="right"
              textAlign={["left", "left", "right", "right"]}
            >
              <Heading
                fontSize={["3xl", "4xl", "5xl", "6xl"]}
                fontWeight="extrabold"
                color="white"
              >
                Our vision
              </Heading>
              <Text
                fontSize={["md", "lg", "xl", "2xl"]}
                color="white"
                fontWeight="normal"
                ml={["none", "none", "80px", "80px"]}
                //w={['90%', '90%', '70%', '70%']}
              >
                Our awesome vision statement goes here. Lorem ipsum dollar sheet
                Lorem ipsum. Lorem ipsum dollar sheet Lorem ipsum
              </Text>
            </Box>
            <Box py={["30px", "30px", "0px", "0px"]}>
              <Image src="https://images.ctfassets.net/x7ylmnfcd6wz/4C3q5afmmeSxQ3ZU2hRP8P/91b3f9c7f6c67d3eb9790fc051255553/vision.png?h=250" />
            </Box>
          </Flex>
        </Grid>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
          }}
          align="center"
          justify="center"
          py={["30px", "30px", "80px", "80px"]}
          px={["30px", "30px", "160px", "360px"]}
        >
          <Flex
            borderRadius="12px"
            bg="white"
            flexDirection="column"
            p={["20px", "20px", "30px", "30px"]}
            boxShadow="0px 15px 30px rgba(0, 0, 0, 0.25)"
          >
            <Heading
              fontSize={["2xl", "2xl", "4xl", "4xl"]}
              fontWeight="extrabold"
              color="gray.50"
            >
              Contact Details
            </Heading>
            <Text fontSize="bold" fontSize={["xl"]} mt={4}>
              Sketch Media
              <br />
              Street Number 12
              <br />
              29075 Kuwait +49 (0) 30 85 730 603
              <br /> buildat@sketchmedia.com
            </Text>
          </Flex>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default About;
