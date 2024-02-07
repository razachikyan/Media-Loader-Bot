import TelegramApi from "node-telegram-bot-api";
import { BOT_MESSAGES, REGEXPS, STICKERS } from "./constants.js";
import { env } from "./env.js";
import { sendYoutube } from "./commands/sendYoutube.js";
import { sendTiktok } from "./commands/sendTiktok.js";
import { sendInstagram } from "./commands/sendInstagram.js";

const startBot = async () => {
  console.log("Telegram bot started!");
  const bot = new TelegramApi(env.BOT_TOKEN, {
    polling: true,
  });

  await bot.setMyCommands([
    { command: "start", description: "Start the bot" },
    { command: "help", description: "Check the bot commands" },
  ]);

  bot.on("text", async (ctx) => {
    const CHAT_ID = ctx.chat.id;
    const sendMessage = bot.sendMessage.bind(bot, CHAT_ID);
    const sendVideo = bot.sendVideo.bind(bot, CHAT_ID);
    const sendPhoto = bot.sendPhoto.bind(bot, CHAT_ID);
    const errorHandler = bot.sendMessage.bind(bot, CHAT_ID);

    if (ctx.text === "/start") {
      await sendMessage(BOT_MESSAGES.greathing);
    } else if (ctx.text === "/help") {
      await sendMessage(BOT_MESSAGES.help);
    } else if (REGEXPS.instagram.test(ctx.text)) {
      await sendMessage(BOT_MESSAGES.loading);
      await bot.sendSticker(CHAT_ID, STICKERS.loading);
      await sendInstagram(ctx.text, { sendVideo, sendPhoto, errorHandler });
    } else if (REGEXPS.tiktok.test(ctx.text)) {
      await sendMessage(BOT_MESSAGES.loading);
      await bot.sendSticker(CHAT_ID, STICKERS.loading);
      await sendTiktok(ctx.text, { sendVideo, sendPhoto, errorHandler });
    } else if (
      ctx.text.startsWith(REGEXPS.youtube1) ||
      ctx.text.startsWith(REGEXPS.youtube2)
    ) {
      await sendMessage(BOT_MESSAGES.loading);
      await bot.sendSticker(CHAT_ID, STICKERS.loading);
      await sendYoutube(ctx.text, {
        sendVideo,
        sendPhoto,
        errorHandler,
      });
    } else {
      await sendMessage(BOT_MESSAGES.wrong_link);
    }
  });
};

startBot();
