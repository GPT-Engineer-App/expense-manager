import { Container, Text, VStack, Heading, Button, Box } from "@chakra-ui/react";
import { FaMoneyBillWave, FaGoogleDrive } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { fetchExpenses, addExpense } from '../services/api';

const Index = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getExpenses = async () => {
      const data = await fetchExpenses();
      setExpenses(data);
    };

    getExpenses();
  }, []);

  const handleAddExpense = async () => {
    const newExpense = {
      description: 'New Expense',
      amount: 100.00,
      date: new Date().toISOString().split('T')[0],
    };

    const addedExpense = await addExpense(newExpense);
    setExpenses([...expenses, addedExpense]);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Expense Manager</Heading>
        <Text fontSize="lg" textAlign="center">Manage your expenses efficiently and save your data to Google Drive.</Text>
        <Button leftIcon={<FaMoneyBillWave />} colorScheme="teal" size="lg" onClick={handleAddExpense}>Add Expense</Button>
        <Button leftIcon={<FaGoogleDrive />} colorScheme="blue" size="lg">Connect to Google Drive</Button>
      <VStack spacing={4} align="stretch">
          {expenses.map((expense) => (
            <Box key={expense.id} p={4} borderWidth="1px" borderRadius="lg">
              <Text>{expense.description}</Text>
              <Text>{expense.amount}</Text>
              <Text>{expense.date}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;