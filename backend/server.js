const cors = require('cors');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend's URL
  }));
  
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/submit', (req, res) => {
  const { name, email, message, seriesName, genre } = req.body;

  const entry = `
  Name: ${name}
  Email: ${email}
  Message: ${message}
  Series Name: ${seriesName}
  Genre: ${genre}
  --------------------
  `;

  // Append data to the file
  fs.appendFile('contact-details.txt', entry, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data');
    } else {
      res.status(200).send('Data saved successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
