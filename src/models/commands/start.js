import { MESSAGES, STICKERS } from "../utils/constants.js";

export const start = async (bot) => {
  try {
    await bot.sendMessage(MESSAGES.start);
    await bot.sendSticker(STICKERS.start);
  } catch (err) {
    console.log(err.message);
  }
};
