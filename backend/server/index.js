const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let expenses = [];

app.get('/expenses', (req, res) => {
  res.json(expenses);
});

app.post('/expenses', (req, res) => {
  const expense = req.body;
  expense.id = expenses.length + 1;
  expenses.push(expense);
  res.json(expense);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});