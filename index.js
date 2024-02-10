import { Bot } from "./src/bot.js";

async function startBot() {
  const loadetBot = new Bot();
  await loadetBot.startBot();
}

startBot();
