const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let expenses = [
  { id: 1, description: 'Groceries', amount: 50.00, date: '2023-10-01' },
  { id: 2, description: 'Utilities', amount: 75.00, date: '2023-10-02' },
];

app.get('/expenses', (req, res) => {
  res.json(expenses);
});

app.post('/expenses', (req, res) => {
  const newExpense = { id: expenses.length + 1, ...req.body };
  expenses.push(newExpense);
  res.json(newExpense);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});