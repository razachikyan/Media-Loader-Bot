import { handleYoutubeError } from "../utils/helpers/handleYoutubeError.js";
import { downloadYoutube } from "../utils/helpers/downloadYoutube.js";
import { MESSAGES, STICKERS } from "../utils/constants.js";
import { message } from "telegram/client/index.js";
import env from "../../env.js";

export const loadYoutube = async (url, bot, quality = "highest") => {
  try {
    await bot.sendMessage(MESSAGES.loading);
    await bot.sendSticker(STICKERS.loading);
    const buffer = await downloadYoutube(url, quality);
    await bot.sendVideo(
      buffer,
      { caption: `Loaded with ${env.BOT_NICK}` },
      { contentType: "mp4" }
    );
  } catch (err) {
    handleYoutubeError(message, () => loadYoutube(url, bot, "lowest"));
    console.log(err.messsage);
    await bot.sendMessage(MESSAGES.error);
  }
};
