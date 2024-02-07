import { BOT_MESSAGES } from "../constants.js";
import { downloadTiktok } from "../helpers/downloadTiktok.js";

export const sendTiktok = async (url, bot) => {
  try {
    const { buffer, type } = await downloadTiktok(url);
    if (type.mime.startsWith("image")) await bot.sendPhoto(buffer);
    else {
      await bot.sendVideo(buffer, {}, { contentType: "mp4" });
    }
  } catch (err) {
    console.log(err.message);
    if (err.message.includes("Too Large")) {
      await bot.errorHandler(BOT_MESSAGES.large_file_fail);
    } else {
      await bot.errorHandler(BOT_MESSAGES.fail);
    }
  }
};
