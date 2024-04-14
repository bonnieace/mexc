// server.js

const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to load environment variables from .env file
require('dotenv').config();

// Endpoint to open/close/reverse a signal bot position
app.post('/v2/signal_bot_positions', async (req, res) => {
  try {
    const apiKey = process.env.ALTRADY_API_KEY;
    const apiSecret = process.env.ALTRADY_API_SECRET;

    // Extract payload from request body
    const payload = req.body;

    // Make request to Altrady's API
    const response = await axios.post('ALTRADY_API_ENDPOINT', payload, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
        'X-API-SECRET': apiSecret,
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error performing action on signal bot position:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to cancel a smart position with a webhook
app.post('/v2/smart_positions/:webhook_key/cancel', async (req, res) => {
  try {
    const apiKey = process.env.ALTRADY_API_KEY;
    const apiSecret = process.env.ALTRADY_API_SECRET;

    // Extract webhook key from request params
    const webhookKey = req.params.webhook_key;

    // Make request to Altrady's API
    const response = await axios.post(`ALTRADY_API_ENDPOINT/${webhookKey}/cancel`, null, {
      headers: {
        'X-API-KEY': apiKey,
        'X-API-SECRET': apiSecret,
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error canceling smart position with webhook:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
