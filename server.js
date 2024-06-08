import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Endpoint to fetch car details
app.get('/api/cars', async (req, res) => {
  try {
    const response = await fetch('https://exam-server-7c41747804bf.herokuapp.com/carsList');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
