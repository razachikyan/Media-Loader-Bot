import { downloadInstagram } from "../utils/helpers/downloadInstagram.js";
import { checkFileType } from "../utils/helpers/checkFileType.js";
import { MESSAGES, STICKERS } from "../utils/constants.js";

export const loadInsta = async (url, bot) => {
  try {
    await bot.sendMessage(MESSAGES.loading);
    await bot.sendSticker(STICKERS.loading);
    const { buffer } = await downloadInstagram(url);
    if (checkFileType(buffer) === "image") {
      await bot.sendPhoto(buffer);
    } else await bot.sendVideo(buffer);
  } catch (err) {
    console.log(err.message);
    await bot.sendMessage(MESSAGES.error);
  }
};
