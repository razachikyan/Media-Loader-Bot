import { downloadInstagram } from "../helpers/downloadInstagram.js";
import { BOT_MESSAGES } from "../constants.js";

export const sendInstagram = async (url, bot) => {
  try {
    const { buffer, type } = await downloadInstagram(url);
    if (type.mime.startsWith("image")) await bot.sendPhoto(buffer);
    else await bot.sendVideo(buffer, {}, { contentType: "mp4" });
  } catch (err) {
    console.log(err.message);
    if (err.message.includes("Too Large")) {
      await bot.errorHandler(BOT_MESSAGES.large_file_fail);
    } else {
      await bot.errorHandler(BOT_MESSAGES.fail);
    }
  }
};
