import { MESSAGES, STICKERS } from "../utils/constants.js";

export const help = async (bot) => {
  try {
    await bot.sendMessage(MESSAGES.help);
    await bot.sendSticker(STICKERS.help);
  } catch (err) {
    console.log(err.message);
  }
};
