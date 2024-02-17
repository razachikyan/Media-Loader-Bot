import { loadYoutube } from "./models/commands/loadYoutube.js";
import { loadTiktok } from "./models/commands/loadTiktok.js";
import { loadInsta } from "./models/commands/loadInsta.js";
import { incorrect } from "./models/commands/incorrect.js";
import { getLinkType } from "./models/utils/helpers/getLinkType.js";
import { start } from "./models/commands/start.js";
import { help } from "./models/commands/help.js";
import TelegramApi from "node-telegram-bot-api";
import env from "./env.js";
import { askSubscribe } from "./models/commands/askSubscribe.js";

export class Bot {
  CHAT_ID = null;
  USER_ID = null;
  initilized = false;

  sendMessage = () => {};
  sendSticker = () => {};
  getChatMember = () => {};
  sendPhoto = () => {};
  sendVideo = () => {};

  constructor() {
    this.token = env.BOT_TOKEN ?? "";
    this.bot = new TelegramApi(this.token, { polling: true });
  }

  async _setCommands() {
    await this.bot.setMyCommands([
      { command: "start", description: "Start the bot" },
      { command: "help", description: "Check the bot commands" },
    ]);
  }

  _initilize(chat_id, user_id) {
    this.CHAT_ID = chat_id;
    this.USER_ID = user_id;

    this.sendMessage = this.bot.sendMessage.bind(this.bot, this.CHAT_ID);
    this.sendSticker = this.bot.sendSticker.bind(this.bot, this.CHAT_ID);
    this.getChatMember = this.bot.getChatMember.bind(
      this.bot,
      env.MY_CHANNEL,
      this.USER_ID
    );
    this.sendPhoto = this.bot.sendPhoto.bind(this.bot, this.CHAT_ID);
    this.sendVideo = this.bot.sendVideo.bind(this.bot, this.CHAT_ID);

    return Boolean(this.CHAT_ID && this.USER_ID);
  }

  async _checkUserSubscribed() {
    try {
      const { status } = await this.getChatMember();
      return status !== "left";
    } catch (err) {
      console.log(err.message);
    }
  }

  async _handleCommands() {
    this.bot.on("text", async ({ text, chat, from }) => {
      const linkType = getLinkType(text);
      this.initilized = this._initilize(chat.id, from.id);

      if (text === "/start") await start(this);
      else if (text === "/help") await help(this);

      if (!this.initilized) return;

      const access = await this._checkUserSubscribed();

      if (!access) {
        await askSubscribe(this);
        return;
      }

      if (linkType === "inst") await loadInsta(text, this);
      else if (linkType === "tiktok") await loadTiktok(text, this);
      else if (linkType === "youtube") await loadYoutube(text, this);
      else if (linkType === "incorrect") await incorrect(this);
    });
  }

  async startBot() {
    console.log("\t\t--------------Bot started !---------------");
    await this._setCommands();
    await this._handleCommands();
  }
}
