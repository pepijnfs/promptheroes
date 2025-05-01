# Setting up EmailJS for the Chat Widget

This document explains how to set up EmailJS to forward chat messages to your email address.

## 1. Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. Free tier allows 200 emails per month

## 2. Add an Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Name your service (e.g., "prompt_heroes_service") and note the Service ID

## 3. Create an Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Design your template with the following variables:
   - `{{to_email}}` - Recipient email address
   - `{{from_name}}` - Name of the sender (e.g., "Website Chat Widget")
   - `{{message}}` - User's message content
   - `{{website_url}}` - URL where the message was sent from
   - `{{timestamp}}` - Time when the message was sent

Example template:

```html
<h2>New Chat Message from Prompt Pilot Website</h2>
<p><strong>Message:</strong> {{message}}</p>
<p><strong>Sent from:</strong> {{website_url}}</p>
<p><strong>Time:</strong> {{timestamp}}</p>
```

4. Save your template and note the Template ID

## 4. Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your "Public Key"

## 5. Update the ChatWidget Component

Update the following constants in the `ChatWidget.tsx` file:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id';  // From step 2
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // From step 3
const EMAILJS_PUBLIC_KEY = 'your_public_key';  // From step 4
```

## Testing

1. Open your website and use the chat widget
2. Send a test message
3. Check your email to ensure the notification is delivered

## Optional: Telegram Bot Integration

If you'd like to also set up Telegram bot forwarding:

1. Open Telegram and search for "BotFather"
2. Start a chat and use `/newbot` command to create a new bot
3. Follow the instructions to name your bot
4. Once created, note the HTTP API token provided
5. Start a chat with your bot
6. Get your chat ID by sending a message to the bot and then viewing:
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
7. Look for the "chat" > "id" field in the JSON response

Then update the ChatWidget component to include both email and Telegram forwarding. 