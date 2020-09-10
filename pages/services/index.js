import Head from "next/head";
import { Button, Image, Box } from "@chakra-ui/core";
import Footer from "@/components/Footer";
import { GraphQLClient } from "graphql-request";
import NextLink from "next/link";
import HeroSection from "components/HeroSection";
import GridSection from "@/components/GridSection";
import GridCard from "components/GridCard";
import GridHeader from "components/GridHeader";
import GridCardSection from "@/components/GridCardSection";
import { PrimaryButton } from "components/Buttons";
import { TextButton } from "components/Buttons";

const contentful = new GraphQLClient(
  "https://graphql.contentful.com/content/v1/spaces/kn9wi23xyla8?access_token=Ctw9v2SvPjge4r5Eb-z5kqk7AaYV9fVtYhhsQwRcc8U"
);

export async function getStaticProps() {
  const { serviceCollection } = await contentful.request(
    `{
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
    }`
  );
  return {
    props: {
      serviceCollection,
    },
  };
}

const Services = ({ serviceCollection }) => {
  return (
    <Box>
      <Head>
        <title>Services - UtkalLabs</title>
      </Head>
      <HeroSection
        title="SERVICES"
        heading="We can help you build faster and ship sooner."
        description=" At Sketch Media, we work closely with our clients to understand
              their core problems and then design strategies that help them not
              just ship great products but also to retain customers."
        src="https://images.ctfassets.net/x7ylmnfcd6wz/3HToCJNuqjS7ZF6Eu4tmCt/023496da489cf598b53049966340a778/become-one-of-us_2x.webp"
        alt="services"
      >
        <PrimaryButton text="View opportunities" height="60px" />
      </HeroSection>

      <GridSection>
        <GridHeader title="SERVICES" heading="We can help you with" />
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        >
          {serviceCollection.items.map((service) => (
            <GridCard
              size={["2xl", "2xl", "3xl", "4xl"]}
              color="black"
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

      <GridSection bgcolor="gray.250">
        <GridHeader title="WORKFLOW" heading="How we get it done" />
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        >
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="Clear project goals"
            carddescription="We’ll discuss what your business needs most to thrive, and focus on it during the whole project.."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="clear-project-goals"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="Perfect toolset"
            carddescription="Thanks to our expertise we’ll offer you a couple of technologies, that will suit your interests best."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="perfect-toolset"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="Transparent work environment"
            carddescription="Slack workspace, Jira board, Github repository, you’ll get access to all of these to always be in the know how your project’s going on."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="transparent-work-environment"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="Afterproject relationship"
            carddescription="Our team will be happy to stay with you even after the project ends, handling your feature requests and maintenance, so you can grow your business in peace."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="afterproject-relationship"
          />
        </GridCardSection>
      </GridSection>
      <Footer />
    </Box>
  );
};

export default Services;
