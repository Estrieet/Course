require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;
const apiKey = process.env.GOOGLE_API_KEY;

app.use(cors());
app.use(express.json());

app.post('/api/gemini', async (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt in request body.' });
  }

  if (!apiKey) {
    return res.status(500).json({ error: 'Server is missing GOOGLE_API_KEY environment variable.' });
  }

  try {
    const endpoint = `https://gemini.googleapis.com/v1/models/gemini-1.5:generateText?key=${encodeURIComponent(apiKey)}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: {
          text: prompt,
        },
        temperature: 0.7,
        max_output_tokens: 256,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || 'Gemini API request failed', details: data });
    }

    const text = data?.candidates?.[0]?.content?.[0]?.text || data?.output?.[0]?.content?.[0]?.text || data?.response || '';
    return res.json({ text, raw: data });
  } catch (error) {
    return res.status(500).json({ error: error?.message || 'Unknown error while calling Gemini API.' });
  }
});

app.listen(port, () => {
  console.log(`Gemini proxy server running on http://localhost:${port}`);
});