import { MESSAGES, STICKERS } from "../utils/constants.js";

export const incorrect = async (bot) => {
  try {
    await bot.sendMessage(MESSAGES.incorrect_link);
    await bot.sendSticker(STICKERS.incorrect_link);
  } catch (err) {
    console.log(err.message);
  }
};
