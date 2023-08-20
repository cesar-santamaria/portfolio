import {
  Container,
  Box,
  Heading,
  Text,
  Link,
  Button,
  List,
  ListItem,
  SimpleGrid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import {
  TriangleDownIcon,
  EmailIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";

const Page = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center" my={4}>
        <Image src="peep-cs.png" w={200} />
      </Box>
      <Box borderRadius="lg" bg="whiteAlpha.50" p={3} mb={6} align="center">
        Hello, I&apos;m a Web Developer based in Latam!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Cesar Santamaria
          </Heading>
          <Text>Developer ( Avid Fútbol Fan )</Text>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" mt={8}>
          Work
        </Heading>
        <Paragraph>
          Hey there, I'm Cesar, a former professional soccer player with a
          degree in Business Administration and found my real passion in the
          world of Tech. It was the process of bringing ideas to life through
          code that captivated me.
        </Paragraph>
        <Box align="left" my={2}>
          <Button
            as="a"
            href="#projects"
            scroll="false"
            rightIcon={<TriangleDownIcon />}
            colorScheme="gray"
            size="sm"
          >
            Projects
          </Button>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" mt={10}>
          Bio
        </Heading>
        <BioSection>
          <BioYear>2008 - 2013</BioYear>
          Professional Fútbol player with C.D. FAS (Reserva) & C.D. Once
          Municipal (🇸🇻), El Salvador.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed Bachelor of Business Administration in Marketing from
          University of Regina (🇨🇦), Canada
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Qualitative Marketing Analyst in Bogota (🇨🇴), Colombia
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed Full Stack Web Development Diploma from Lighthouse Labs in
          Toronto (🇨🇦), Canada
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          ♥
        </Heading>
        <Paragraph>
          Coding, Music, Football (Soccer), Traveling, Formula One.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mt={10}>
          Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/cesar-santamaria" target="_blank">
              <Button
                variant="ghost"
                colorScheme="gray"
                leftIcon={<IoLogoGithub />}
              >
                @cesar-santamaria
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href="https://www.linkedin.com/in/cesar-santamaria-23082a1ba/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="gray"
                leftIcon={<IoLogoLinkedin />}
              >
                @cesar-santamaria
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box as="section" id="projects">
          <Heading as="h3" variant="section-title" mt={10}>
            Projects
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={10}>
            <GridItem title="Hundy Hues">
              <Image src="hundyhues.png" />
              <Box display="flex" justifyContent="space-around" mx={1} my={3}>
                <Link
                  href="https://hundy-hues-frontend.onrender.com/"
                  target="_blank"
                >
                  Live Site
                </Link>

                <Link
                  href="https://github.com/cesar-santamaria/hundy-hues"
                  target="_blank"
                >
                  Source Code
                </Link>
              </Box>
              <Heading textAlign="center" fontSize="sm" mt={3}>
                Hundy Hues
              </Heading>
              <Text textAlign="center" fontSize="xs" mb={2}>
                ( PERN Stack / Stripe / Framer Motion )
              </Text>
              <Text>
                Hundy Hues is an innovative e-commerce platform that offers a
                curated collection of stylish furniture and home decor products.
              </Text>
            </GridItem>
            <GridItem title="Sendero">
              <Image src="sendero.png" />
              <Box display="flex" justifyContent="space-around" mx={1} my={3}>
                <Link
                  size="sm"
                  href="https://sendero-client.onrender.com/"
                  target="_blank"
                >
                  Live Site
                </Link>
                <Link
                  size="sm"
                  href="https://github.com/cesar-santamaria/sendero"
                  target="_blank"
                >
                  Source Code
                </Link>
              </Box>
              <Heading textAlign="center" fontSize="sm" mt={3}>
                Sendero - Job Tracking Application
              </Heading>
              <Text textAlign="center" fontSize="xs" mb={2}>
                ( MERN Stack / Material UI / Redux - Toolkit )
              </Text>
              <Text>
                Sendero is a job tracking application. Users can categorize jobs
                in one single app
              </Text>
              <Text fontSize="sm">Login: JohnDoe@gmail.com </Text>
              <Text fontSize="sm">Password: 12345678</Text>
            </GridItem>
            <GridItem title="Scheduler">
              <Image src="scheduler.png" />
              <Box display="flex" justifyContent="space-around" mx={1} my={3}>
                <Link
                  size="sm"
                  href="https://github.com/cesar-santamaria/scheduler"
                  target="_blank"
                >
                  Source Code
                </Link>
              </Box>
              <Heading textAlign="center" fontSize="sm" mt={3}>
                Interview Scheduler
              </Heading>
              <Text textAlign="center" fontSize="xs" mb={2}>
                ( PERN Stack / Storybook )
              </Text>
              <Text>
                Interview Scheduler is a single page React application that
                allows mentors to book and cancel interviews with Lighthouse
                Labs students.
              </Text>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Box as="section" id="contact" align="center" my={4}>
          <Button
            as="a"
            href="mailto:cesar-santamaria@outlook.com"
            scroll="false"
            leftIcon={<EmailIcon />}
            colorScheme="gray"
            target="_blank"
          >
            Contact Me
          </Button>
        </Box>
      </Section>
    </Container>
  );
};

export default Page;
