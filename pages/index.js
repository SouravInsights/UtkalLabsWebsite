import Head from "next/head";
import { Button, Heading, Box, Image } from "@chakra-ui/core";
import React, { useEffect } from "react";
import Footer from "components/Footer";
import GridSection from "@/components/GridSection";
import GridCard from "components/GridCard";
import GridHeader from "components/GridHeader";
import GridCardSection from "@/components/GridCardSection";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GraphQLClient } from "graphql-request";
import HeroSection from "components/HeroSection";
import { TextButton } from "components/Buttons";
import { PrimaryButton } from "components/Buttons";

const contentful = new GraphQLClient(
  "https://graphql.contentful.com/content/v1/spaces/kn9wi23xyla8?access_token=Ctw9v2SvPjge4r5Eb-z5kqk7AaYV9fVtYhhsQwRcc8U"
);

export async function getStaticProps() {
  const { homepageCollection, serviceCollection } = await contentful.request(
    `
     query {
      serviceCollection {
        items {
          slug
          serviceTitle
          serviceDescription
          serviceImage {
            url
          }
        }
      }
      homepageCollection {
        items {
          heroTitle
          heroHeading
          heroDescription
          heroImage {
            url
          }
        }
      }
    }  
    `
  );
  return {
    props: {
      homepageCollection,
      serviceCollection,
    },
  };
}

const Home = ({ homepageCollection, serviceCollection }) => {
  return (
    <>
      <Head>
        <title>Home - Sketch Media</title>
      </Head>

      {homepageCollection.items.map((home) => (
        <HeroSection
          title={home.heroTitle}
          heading={home.heroHeading}
          description={home.heroDescription}
          src={home.heroImage.url}
          alt="Hero Image"
        >
          <PrimaryButton text="Work with us!" height="60px" />
        </HeroSection>
      ))}

      <GridSection>
        <GridHeader title="SERVICES" heading="We can help you with" />
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        >
          {serviceCollection.items.map((service) => (
            <GridCard
              size={["2xl", "2xl", "3xl", "4xl"]}
              color="gray.50"
              key={service.slug}
              src={service.url}
              cardheading={service.serviceTitle}
              carddescription={service.serviceDescription}
              iconheight="200px"
            >
              {service.serviceImage && (
                <Image
                  h="200px"
                  src={service.serviceImage.url}
                  alt={service.slug}
                />
              )}
            </GridCard>
          ))}
        </GridCardSection>
      </GridSection>

      <GridSection>
        <GridHeader title="WORKFLOW" heading="How we get it done" />
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        >
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="gray.100"
            cardheading="Clear project goals"
            carddescription="We’ll discuss what your business needs most to thrive, and focus on it during the whole project.."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="clear-project-goals"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="gray.100"
            cardheading="Perfect toolset"
            carddescription="Thanks to our expertise we’ll offer you a couple of technologies, that will suit your interests best."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="perfect-toolset"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="gray.100"
            cardheading="Transparent work environment"
            carddescription="Slack workspace, Jira board, Github repository, you’ll get access to all of these to always be in the know how your project’s going on."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="transparent-work-environment"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="gray.100"
            cardheading="Afterproject relationship"
            carddescription="Our team will be happy to stay with you even after the project ends, handling your feature requests and maintenance, so you can grow your business in peace."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="afterproject-relationship"
          />
        </GridCardSection>
      </GridSection>

      <GridSection bgcolor="#F5F8FE" mb="60px">
        <GridHeader
          title="TECHNOLOGIES WE USE"
          heading="Beautifying the web"
          description="Every project is a new story, yet some things stay the same. We pick a dedicated set of tools for each one, for the best performance possible."
        />
        <Heading
          fontSize="xl"
          color="gray.100"
          fontWeight="extrabold"
          letterSpacing="widest"
          py={["10px", "10px", "10px", "10px"]}
          textAlign="center"
        >
          DATA SOURCES
        </Heading>
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        >
          <Box size="16">
            <Image src="https://images.ctfassets.net/oeqy1yheyozp/DrnSyghkwo0ym9d0VYCQL/55a7e5c8bed544d3eca57035de937eca/image.png?h=250" />
          </Box>

          <Box>
            <Image src="https://images.ctfassets.net/oeqy1yheyozp/4JkEe3nO9cnvjgJUaZLugj/9cd1eea1cc47608b68991a8001b18de2/image.png?h=250" />
          </Box>
          <Box size="16">
            <Image src="https://images.ctfassets.net/oeqy1yheyozp/6SFAcZLHo6ldHhqukZ4WhE/3d7a09a8e0fe76b88cf247ef485bde2e/image.png?h=250" />
          </Box>
          <Box size="26">
            <Image src="https://bejamas.io/static/2b59c17768180842d71f24a8f1b69ed0/ffac1/contentful.webp" />
          </Box>
        </GridCardSection>
        <Heading
          fontSize="xl"
          color="gray.100"
          fontWeight="extrabold"
          letterSpacing="widest"
          pt={["10px", "10px", "30px", "30px"]}
          textAlign="center"
        >
          DEVELOPMENT
        </Heading>
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        >
          <Box size="16">
            <Image src="https://images.ctfassets.net/oeqy1yheyozp/w0C8GYRsWTa3PxucrChdy/671820c53d720bdff158e1e31e4ca9c1/image.png?h=250" />
          </Box>
          <Box size="26">
            <Image src="https://images.ctfassets.net/oeqy1yheyozp/4D85x6uq0ySr5arfBDkS6x/ff9f2e6cf8eae149be1288a14e8bbc15/image.png?h=250" />
          </Box>
          <Box size="16">
            <Image src="https://images.ctfassets.net/oeqy1yheyozp/3TjbdgETK1VtqDbikaxzjb/98b1d1104f54d0de4f0ff659d30b8962/image.png?h=250" />
          </Box>
          <Box size="20">
            <Image src="https://images.ctfassets.net/oeqy1yheyozp/3HrTe11yU2slSujg0JAn60/0b091fb829c8a35a4e83b83db5bb03ac/image.png?h=250" />
          </Box>
        </GridCardSection>
      </GridSection>
      <Footer />
    </>
  );
};

export default Home;
