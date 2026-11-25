const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ruta de test
app.get('/', (req, res) => {
  res.json({ message: 'Serverul Red-Blue functioneaza!' });
});

app.listen(PORT, () => {
  console.log(`Serverul ruleaza pe http://localhost:${PORT}`);
});