import { MESSAGES, STICKERS } from "../utils/constants.js";

export const askSubscribe = async (bot) => {
  try {
    await bot.sendMessage(MESSAGES.ask_subscribe);
    await bot.sendSticker(STICKERS.ask_subscribe);
  } catch (err) {
    console.log(err.message);
  }
};
