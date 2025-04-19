// Simple in-memory message store for demo purposes
// In production, use a database like MongoDB, Firebase, etc.
const messageStore = {};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle different request methods
  if (req.method === 'POST') {
    // Receiving a new message from the chat widget
    try {
      const { sessionId, message, sender } = req.body;
      
      if (!sessionId || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      // Initialize session if it doesn't exist
      if (!messageStore[sessionId]) {
        messageStore[sessionId] = [];
      }
      
      // Add message to store
      messageStore[sessionId].push({
        message,
        sender,
        timestamp: new Date().toISOString()
      });
      
      // Return success
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error storing message:', error);
      return res.status(500).json({ error: 'Failed to store message' });
    }
  } 
  else if (req.method === 'GET') {
    // Retrieving messages for a specific chat session
    try {
      const { sessionId, lastTimestamp } = req.query;
      
      if (!sessionId) {
        return res.status(400).json({ error: 'Session ID is required' });
      }
      
      // Return empty array if session doesn't exist
      if (!messageStore[sessionId]) {
        return res.status(200).json({ messages: [] });
      }
      
      // If lastTimestamp is provided, only return messages after that timestamp
      let messages = messageStore[sessionId];
      if (lastTimestamp) {
        messages = messages.filter(msg => 
          new Date(msg.timestamp) > new Date(lastTimestamp)
        );
      }
      
      return res.status(200).json({ messages });
    } catch (error) {
      console.error('Error retrieving messages:', error);
      return res.status(500).json({ error: 'Failed to retrieve messages' });
    }
  }
  else if (req.method === 'PUT') {
    // Adding a reply from Telegram to a specific chat session
    try {
      const { sessionId, message, botToken } = req.body;
      
      // Simple validation to ensure this is coming from an authorized source
      // In production, use a more secure authentication method
      if (botToken !== process.env.TELEGRAM_BOT_TOKEN && 
          botToken !== '7917219007:AAFJlLc8jk5U1JYVA39WNI3rkJuGHedQncE') {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      if (!sessionId || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      // Initialize session if it doesn't exist
      if (!messageStore[sessionId]) {
        messageStore[sessionId] = [];
      }
      
      // Add bot reply to store
      messageStore[sessionId].push({
        message,
        sender: 'bot',
        timestamp: new Date().toISOString()
      });
      
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error storing bot reply:', error);
      return res.status(500).json({ error: 'Failed to store bot reply' });
    }
  }
  
  // Handle unsupported methods
  res.setHeader('Allow', ['GET', 'POST', 'PUT']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 