import Head from "next/head";
import { Flex, Image, Heading, Box, Text, Grid } from "@chakra-ui/core";
import React from "react";
import { GraphQLClient } from "graphql-request";
import Footer from "components/Footer";
import HeroSection from "components/HeroSection";
import GridSection from "@/components/GridSection";
import GridCard from "components/GridCard";
import GridHeader from "components/GridHeader";
import GridCardSection from "@/components/GridCardSection";
import { PrimaryButton } from "components/Buttons";

const contentful = new GraphQLClient(
  "https://graphql.contentful.com/content/v1/spaces/kn9wi23xyla8?access_token=Ctw9v2SvPjge4r5Eb-z5kqk7AaYV9fVtYhhsQwRcc8U"
);

export async function getStaticProps() {
  const { aboutCollection } = await contentful.request(
    `{
        aboutCollection {
          items {
            heroHeading
            heroDescription
            heroImage {
              url
            }
          }
        }
    }`
  );
  return {
    props: {
      aboutCollection,
    },
  };
}

const About = ({ aboutCollection }) => {
  return (
    <>
      <Head>
        <title>About - UtkalLabs</title>
      </Head>

      {aboutCollection.items.map((about) => (
        <HeroSection
          title="ABOUT"
          heading={about.heroHeading}
          description={about.heroDescription}
          src={about.heroImage.url}
          buttontext="Meet our Team"
          alt="about"
        >
          <PrimaryButton text="View opportunities" height="60px" />
        </HeroSection>
      ))}

      <Box
        backgroundRepeat="no-repeat"
        bgImage="url('https://images.ctfassets.net/kn9wi23xyla8/65svuGDzVkti1ASedKumMq/91c27ad54915beb7e79b87440696df6d/aboutbg.svg')"
      >
        <Flex
          px={["30px", "30px", "180px", "220px"]}
          py={["30px", "30px", "40px", "40px"]}
          flexDirection={["column", "column", "row", "row"]}
        >
          <Box>
            <Heading
              pt={["20px"]}
              pb={["40px"]}
              fontSize="5xl"
              color="purple.100"
              fontWeight="extrabold"
            >
              What drives us
            </Heading>
            <Text
              fontSize={["xl", "xl", "2xl", "2xl"]}
              color="gray.100"
              fontWeight="normal"
              pb={["40px"]}
              w="80%"
            >
              Creating something digital from a good idea is what drives us. We
              are open and honest. If we work with you, it will be on an equal
              footing. We question the existing and create new.
            </Text>
          </Box>
        </Flex>

        <GridSection bgcolor="#F5F8FE">
          <GridHeader
            title="THINGS WE VALUE"
            heading="Believability at the core"
            description="As a team of independent thinkers, we share the same values that make things work like a charm."
          />
          <GridCardSection
            columns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          >
            <GridCard
              size={("xl", "xl", "2xl", "2xl")}
              color="gray.100"
              cardheading="Transparency and Truthfulness"
              carddescription="We communicate with each other honestly, even if the truth violates one's ego. We believe that in the long term only through good and honest communication with each other we can generate added value for our clients."
            />
            <GridCard
              size={("xl", "xl", "2xl", "2xl")}
              color="gray.100"
              cardheading=" Openness of mind"
              carddescription="In our case transparency means that everyone's opinion is open for discussion by anyone on the team. That is why it is so important for us to keep our mind open and treat every feedback with humility, a chance to look at things from another perspective, and as an opportunity to improve our skills."
            />
            <GridCard
              size={("xl", "xl", "2xl", "2xl")}
              color="gray.100"
              cardheading=" Commitment and Responsibility"
              carddescription="Remote work gives great possibilities, but comes with great responsibility. At Bejamas, each team member is responsible for a certain part of a project and it’s on them to deliver the best solution for it. For us it’s crucial to keep things this way and run projects as a well-oiled machine."
            />
            <GridCard
              size={("xl", "xl", "2xl", "2xl")}
              color="gray.100"
              cardheading="Empathy and Unselfishness"
              carddescription="Those are two very important factors at Bejamas. We believe that every person deserves valuable relationships with other people and a pleasant work environment. We try to help each other and give as much as we take ourselves."
            />
          </GridCardSection>
        </GridSection>

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
            border="1px solid"
            borderColor="#E5E0E0"
            boxShadow="0px 20px 40px 10px rgba(222, 212, 212, 0.25)"
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
              Patia Square, Bhubaneswar
              <br />
              751017 India
              <br /> contact@utkallabs.com
            </Text>
          </Flex>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default About;
