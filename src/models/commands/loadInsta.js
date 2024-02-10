import { downloadInstagram } from "../utils/helpers/downloadInstagram.js";
import { checkFileType } from "../utils/helpers/checkFileType.js";
import { MESSAGES, STICKERS } from "../utils/constants.js";
import env from "../../env.js";

export const loadInsta = async (url, bot) => {
  try {
    await bot.sendMessage(MESSAGES.loading);
    await bot.sendSticker(STICKERS.loading);
    const { buffer } = await downloadInstagram(url);
    if ((await checkFileType(buffer)) === "image") {
      await bot.sendPhoto(buffer, { caption: `Loaded with ${env.BOT_NICK}` });
    } else
      await bot.sendVideo(buffer, { caption: `Loaded with ${env.BOT_NICK}` });
  } catch (err) {
    console.log(err.message);
    await bot.sendMessage(MESSAGES.error);
  }
};
