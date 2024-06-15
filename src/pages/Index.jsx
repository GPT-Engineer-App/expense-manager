import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaMoneyBillWave, FaGoogleDrive } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Expense Manager</Heading>
        <Text fontSize="lg" textAlign="center">Manage your expenses efficiently and save your data to Google Drive.</Text>
        <Button leftIcon={<FaMoneyBillWave />} colorScheme="teal" size="lg">Get Started</Button>
        <Button leftIcon={<FaGoogleDrive />} colorScheme="blue" size="lg">Connect to Google Drive</Button>
      </VStack>
    </Container>
  );
};

export default Index;