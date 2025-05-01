# Setting up Telegram Bot for Chat Notifications

This document explains how to set up a Telegram bot to receive chat messages from your website.

## Why Telegram?

- Real-time notifications directly to your phone
- No email delays
- Free to use with unlimited messages
- Easy to set up in under 5 minutes
- Supports rich formatting and media

## 1. Create a Telegram Bot

1. Download and install the Telegram app on your phone if you don't have it already
2. Open Telegram and search for "BotFather" (the official bot that helps you create bots)
3. Start a chat with BotFather
4. Send the command: `/newbot`
5. Follow the instructions to name your bot
   - First provide a display name (e.g., "Prompt Pilot Chat")
   - Then provide a username (must end in "bot", e.g., "prompt_heroes_chat_bot")
6. Once created, BotFather will give you an HTTP API token (a long string like `123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ`)
7. **Save this token** - you'll need it for the ChatWidget component

## 2. Get Your Chat ID

To send messages to yourself, you need your personal chat ID:

1. Start a chat with your newly created bot
2. Send any message to the bot (e.g., "hello")
3. Open a web browser and go to:
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   (replace `<YOUR_BOT_TOKEN>` with the token from step 1)
4. Look for the `"chat":{"id":123456789}` field in the JSON response
5. The number (e.g., `123456789`) is your chat ID
6. **Save this chat ID** - you'll need it for the ChatWidget component

## 3. Update the ChatWidget Component

Update the following constants in the `ChatWidget.tsx` file:

```typescript
const TELEGRAM_BOT_TOKEN = 'your_bot_token';  // From step 1
const TELEGRAM_CHAT_ID = 'your_chat_id';      // From step 2
const USE_TELEGRAM = true;                    // Enable Telegram notifications
```

## 4. Testing

1. Open your website and use the chat widget
2. Send a test message
3. Check your Telegram chat with the bot
4. You should receive the message almost instantly

## Optional: Enhancing Your Bot

- Use `/setcommands` in BotFather to add commands to your bot
- Use `/setdescription` to set a description
- Use `/setabouttext` to set an about section
- Use `/setuserpic` to set a profile picture

## Troubleshooting

- If you're not receiving messages, ensure your bot token and chat ID are correct
- Make sure your bot hasn't been blocked
- Check browser console for any errors in the API calls

For more advanced features, refer to the [Telegram Bot API documentation](https://core.telegram.org/bots/api). 