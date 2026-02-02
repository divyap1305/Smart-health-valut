const express = require('express');
const router = express.Router();
const { wellnessChatbot, getChatbotIntro, aiChat } = require('../controllers/chatController');
const { verifyFirebaseToken } = require('../middleware/authMiddleware');

// Protected routes
router.get('/intro', verifyFirebaseToken, getChatbotIntro);
router.post('/message', verifyFirebaseToken, wellnessChatbot);
// AI-backed chat (uses OpenRouter / GPT-4o-mini). Falls back to rule-based if not available.
router.post('/ai', verifyFirebaseToken, aiChat);

module.exports = router;