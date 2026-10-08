# Telegram lead notifications

The lead endpoint can send an HTML-formatted notification to a Telegram chat after a valid form
submission. Telegram delivery is optional and runs independently from CRM and SMTP delivery.

## Configuration

```env
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_or_group_id
```

Both values are required. Store the token only in the deployment provider or an ignored local
environment file.

## Bot and chat setup

1. Create a bot with Telegram's official `@BotFather` account and store the returned token securely.
2. Create or select the destination chat or group.
3. Add the bot to the group and send a message so Telegram exposes the chat in bot updates.
4. Retrieve the chat ID through Telegram's Bot API using a trusted local tool. Avoid placing a real
   bot token in documentation, screenshots, shell history, or support messages.
5. Configure both environment variables and restart the service.
6. Submit one controlled lead and confirm the formatted notification arrives.

Group IDs are commonly negative; supergroup IDs commonly begin with `-100`. A group conversion can
change its ID, in which case `TELEGRAM_CHAT_ID` must be updated.

## Implementation

- `lib/telegram.ts` formats the lead and calls Telegram's `sendMessage` endpoint.
- `app/api/lead/route.ts` invokes Telegram delivery alongside the CRM and SMTP adapters.
- Missing credentials skip Telegram delivery and write a warning.
- A Telegram failure is logged but does not prevent other configured delivery attempts.

The notification includes contact details, property address, condition, timeframe, consent fields,
reason for selling, and originating page when those values are present.

## Troubleshooting

- `401 Unauthorized`: replace an invalid or revoked bot token.
- `400 Bad Request`: verify the complete chat ID, including a leading minus sign for groups.
- `403 Forbidden`: confirm the bot is still a member of the destination chat and can send messages.
- No notification after a successful form response: inspect server logs and verify both environment
  values in the active deployment.
