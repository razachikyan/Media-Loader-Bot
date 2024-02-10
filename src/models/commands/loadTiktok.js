import { MESSAGES, STICKERS } from "../utils/constants.js";
import { checkFileType } from "../utils/helpers/checkFileType.js";
import { downloadTiktok } from "../utils/helpers/downloadTiktok.js";

export const loadTiktok = async (url, bot) => {
  try {
    await bot.sendMessage(MESSAGES.loading);
    await bot.sendSticker(STICKERS.loading);
    const { buffer } = await downloadTiktok(url);
    if (checkFileType(buffer) === "image") {
      await bot.sendVideo(buffer);
    } else await bot.sendPhoto(buffer);
  } catch (err) {
    console.log(err.message);
    await bot.sendMessage(MESSAGES.error);
  }
};
