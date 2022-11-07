import { Container, Box, Heading, Button } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a Web Developer based in Latam!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Cesar Santamaria
          </Heading>
          <p>Footballer | Developer </p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
