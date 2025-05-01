# Two-Way Chat System Guide

This guide explains how to use the two-way chat system that allows you to reply to website visitors directly from Telegram.

## How It Works

1. When a visitor sends a message through your website chat widget, you receive it in Telegram
2. Each message includes a unique Session ID that identifies the conversation
3. You can reply to the conversation using a simple Telegram command
4. Your reply will appear in the visitor's chat widget in real-time

## Replying to Messages

When you receive a message in Telegram, it will look like this:

```
💬 New chat message from Prompt Pilot website:

"Hello, I have a question about AI training"

📱 From: https://promptpilot.nlm/
⏰ Time: 6/15/2023, 2:30:45 PM
🆔 Session ID: abc123def456

To reply, use:
/reply abc123def456 Your message here
```

To reply to this visitor:

1. Type the `/reply` command
2. Add the Session ID (it's different for each conversation)
3. Add your response message
4. Send the command in Telegram

Example:
```
/reply abc123def456 Thank you for your interest! What specific aspects of our AI training are you interested in?
```

Your response will be delivered to the visitor's chat window in real-time.

## Important Notes

- Each visitor gets a unique Session ID that persists in their browser
- Conversations are stored temporarily in server memory (they reset when the server restarts)
- For a production environment, you should replace the in-memory store with a database
- The system currently does not provide typing indicators or read receipts

## Troubleshooting

If a visitor doesn't receive your reply:

1. Make sure you used the correct Session ID
2. Check that your API endpoint is accessible and running
3. Verify that the visitor still has the chat window open

## Technical Implementation

The system consists of:

1. `ChatWidget.tsx` - Frontend chat interface
2. `/api/chat-messages.js` - API endpoint for storing/retrieving messages
3. `/api/telegram-webhook.js` - Webhook handler for Telegram commands

To set up the Telegram webhook, use:
```
https://api.telegram.org/bot7917219007:AAFJlLc8jk5U1JYVA39WNI3rkJuGHedQncE/setWebhook?url=https://your-app-url.com/api/telegram-webhook
```

Replace `your-app-url.com` with your actual domain. 