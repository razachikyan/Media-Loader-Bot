import env from "../../env.js";

export const MESSAGES = {
  start:
    "🤖 Привет, я быстро скачиваю посты и видео из Instagram, TikTok и YouTube.\n\nДля скачивания отправьте ссылку на пост или видео: 🌐",
  fail: "Не получается загрузить файл.",
  loading: "Медия файл загружается ...",
  large_file_fail: "Файл слишком тяжелый (",
  incorrect_link: "Неправильная ссылка. Попробуй еще раз!",
  help: "🤖 Привет, я быстро скачиваю посты и видео из Instagram, TikTok и YouTube.\n\nЧтобы загрузить видео или картинку из instagram, tiktok или youtube, отправьте боту адрес поста или видео.",
  ask_subscribe: `Чтобы использовать бот ты должен быть подписан на нас ${env.MY_CHANNEL}`,
  error: "Что то пошло не так. 😵",
};

export const REGEXPS = {
  instagram: /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:\w+\/?)/i,
  tiktok:
    /^(?:https?:\/\/)?(?:www\.)?(?:tiktok\.com\/(?:@\w+\/video\/\d+|v\/\d+\.html)|vt\.tiktok\.com\/\w+\/?)$/i,
  youtube1: "https://www.youtube.com/watch",
  youtube2: "https://youtu.be",
};

export const STICKERS = {
  loading:
    "CAACAgIAAxkBAAOrZcckaYDxkzYQIwKb_y3HwYFClUQAAkIDAAK1cdoGvBJMqHxnoGk0BA",
  start:
    "CAACAgIAAxkBAAOqZcckVDeTY8EFnr4nzVWzVjmR0ykAAicDAAK1cdoGD_Tez6DF3ew0BA",
  incorrect_link:
    "CAACAgIAAxkBAAOuZcckooVrSApko4JpIijZ_CPUl-wAAigDAAK1cdoGkHpKh16VSm40BA",
  help: "CAACAgIAAxkBAAOtZcckk8oh_rTsc8t5-sEw_mmC_ewAAioDAAK1cdoG4UpwRi3ZAAEONAQ",
  fail: "CAACAgIAAxkBAAOxZccsXmOrLYFvBcv32UuYg8mAt38AAjgDAAK1cdoGwvLeWs_qDRU0BA",
  large_file_fail:
    "CAACAgIAAxkBAAOvZccsKY3d0uPQRBru93Szn6K2pS4AAjgDAAK1cdoGwvLeWs_qDRU0BA",
  ask_subscribe:
    "CAACAgIAAxkBAAPhZccw6Ry6IgOwffHErEjIMt3xOnsAAjEDAAK1cdoGop1e4ngmbuY0BA",
};

export const commands = {
  start: "Запустить бот.",
  help: "Комманды.",
};
