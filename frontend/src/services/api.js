const API_URL = 'http://localhost:5000';

export const fetchExpenses = async () => {
  const response = await fetch(`${API_URL}/expenses`);
  return response.json();
};

export const addExpense = async (expense) => {
  const response = await fetch(`${API_URL}/expenses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(expense),
  });
  return response.json();
};