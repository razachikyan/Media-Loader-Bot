import { BOT_MESSAGES } from "../constants.js";
import { downloadYoutube } from "../helpers/downloadYoutube.js";

export const sendYoutube = async (url, bot, quality = "highest") => {
  try {
    const file = await downloadYoutube(url, quality);
    await bot.sendVideo(file, {}, { contentType: "mp4" });
  } catch (err) {
    if (err.message.includes("Too Large")) {
      if (quality !== "lowest") {
        await sendYoutube(url, bot, "lowest");
      } else {
        console.log(err.message);
        await bot.errorHandler(BOT_MESSAGES.large_file_fail);
      }
    } else {
      console.log(err.message);
      await bot.errorHandler(BOT_MESSAGES.fail);
    }
  }
};
