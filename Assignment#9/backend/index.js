const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/submit-form', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);

  res.json({ message: 'Form data received successfully' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
