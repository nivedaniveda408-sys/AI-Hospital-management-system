const express = require('express');
const router = express.Router();

router.post('/chatbot', async (req, res) => {
  try {
    const { message } = req.body;
    res.json({ response: 'AI response to: ' + message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/health-prediction', async (req, res) => {
  try {
    res.json({ prediction: 'Health prediction', riskLevel: 'Low' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;