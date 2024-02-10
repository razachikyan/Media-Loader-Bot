import { MESSAGES, STICKERS } from "../utils/constants.js";
import { checkFileType } from "../utils/helpers/checkFileType.js";
import { downloadTiktok } from "../utils/helpers/downloadTiktok.js";
import env from "../../env.js";

export const loadTiktok = async (url, bot) => {
  try {
    await bot.sendMessage(MESSAGES.loading);
    await bot.sendSticker(STICKERS.loading);
    const { buffer } = await downloadTiktok(url);
    if ((await checkFileType(buffer)) === "image") {
      await bot.sendVideo(buffer, { caption: `Loaded with ${env.BOT_NICK}` });
    } else
      await bot.sendPhoto(buffer, { caption: `Loaded with ${env.BOT_NICK}` });
  } catch (err) {
    console.log(err.message);
    await bot.sendMessage(MESSAGES.error);
  }
};
