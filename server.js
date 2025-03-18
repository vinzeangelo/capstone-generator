require('dotenv').config();
console.log("API Key Loaded:", process.env.OPENAI_API_KEY ? "Yes" : "No");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Load API key from .env file
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is defined
});

app.post('/generate-idea', async (req, res) => {
  const { category, difficulty } = req.body;
  console.log("Received category:", category);
  console.log("Received difficulty:", difficulty);

  if (!difficulty) {
    return res.status(400).json({ error: "Difficulty is not defined" });
  }

  const prompt = `Generate a ${difficulty} capstone project idea for a ${category} project.`;

  try {
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 100,
    });

    const generatedIdea = response.choices[0].text.trim();
    res.json({ generatedIdea });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate idea' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
