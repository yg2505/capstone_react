// server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;
const API_KEY = 'your_actual_api_key'; // Put your real key here

app.get('/api/projects', async (req, res) => {
  try {
    const response = await fetch(
      'https://api.globalgiving.org/api/public/projectservice/featured/projects',
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': API_KEY,
        },
      }
    );
    const data = await response.json();
    res.json(data.projects.project);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
