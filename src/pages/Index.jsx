import { Container, Text, VStack, Heading } from "@chakra-ui/react";
import Map from "../components/Map";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Kayaking Trips from Sollenkroka, Värmdö</Heading>
        <Text fontSize="lg">Plan your next kayaking adventure starting from Sollenkroka, Värmdö. Explore the beautiful archipelago and find the best routes and spots.</Text>
        <Map />
      </VStack>
    </Container>
  );
};

export default Index;