// src/ollama.ts
import axios from 'axios';

const ollamaApiUrl = 'http://localhost:11434/api/generate';

async function generateResponse(prompt: string) {
  try {
    const response = await axios.post(ollamaApiUrl, {
      model: 'llama3.2',
      prompt: prompt,
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error generating response:', error);
  }
}

// Example usage
generateResponse('Manufacturing in Dalton, GA');
