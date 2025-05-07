// Telegram bot webhook handler for processing commands
// Particularly for handling the /reply command

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    // Check if it's a valid command
    if (!message || !message.text || !message.text.startsWith('/reply')) {
      return res.status(400).json({ error: 'Invalid command' });
    }

    // Extract session ID and reply message
    // Format: /reply sessionId Your message here
    const commandParts = message.text.split(' ');
    if (commandParts.length < 3) {
      return res.status(400).json({ 
        method: 'sendMessage',
        chat_id: message.chat.id,
        text: 'Invalid format. Use: /reply sessionId Your message here' 
      });
    }

    const sessionId = commandParts[1];
    const replyMessage = commandParts.slice(2).join(' ');

    // Send the reply to our message API
    const apiResponse = await fetch(`${process.env.NEXTAUTH_URL || 'https://your-app-url.com'}/api/chat-messages`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        message: replyMessage,
        botToken: process.env.TELEGRAM_BOT_TOKEN || '7917219007:AAFJlLc8jk5U1JYVA39WNI3rkJuGHedQncE'
      })
    });

    if (!apiResponse.ok) {
      throw new Error('Failed to save reply message');
    }

    // Send confirmation back to Telegram
    return res.status(200).json({
      method: 'sendMessage',
      chat_id: message.chat.id,
      text: `✅ Reply sent to session ${sessionId}!`
    });

  } catch (error) {
    console.error('Error in Telegram webhook:', error);
    return res.status(500).json({ error: 'Failed to process command' });
  }
} 