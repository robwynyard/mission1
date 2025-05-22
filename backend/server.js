// server.js
const express = require('express');
const multer = require('multer');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors({
  origin: 'http://localhost:5173', 
}));
// Multer setup for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.get('/', (req, res) => {
  res.send('✅ Backend is working');
});

// POST endpoint to handle image upload and call Azure Custom Vision
app.post('/predict', upload.single('image'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

  try {
    const azureResponse = await axios.post(
      'https://australiaeast.api.cognitive.microsoft.com/customvision/v3.0/Prediction/de13eec6-d5df-4e6f-abcd-1bcd01ba488f/classify/iterations/Iteration3/image',
      req.file.buffer,
      {
        headers: {
          'Prediction-Key': 'b68b446ededf4cafaedd49331174f16c',
          'Content-Type': 'application/octet-stream'
        }
      }
    );

    res.json(azureResponse.data);
  } catch (err) {
    console.error('Azure API error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
