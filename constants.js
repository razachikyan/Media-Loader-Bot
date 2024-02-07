export const BOT_MESSAGES = {
  greathing:
    "🤖 Привет, я быстро скачиваю посты и видео из Instagram, TikTok и YouTube.\n\nДля скачивания отправьте ссылку на пост или видео: 🌐",
  fail: "Не получается загрузить файл.",
  loading: "Файл загружается ...",
  large_file_fail: "Файл слишком тяжелый (",
  wrong_link: "Неправильная ссылка. Попробуй еще раз!",
  help: "🤖 Привет, я быстро скачиваю посты и видео из Instagram, TikTok и YouTube.\n\nЧтобы загрузить видео или картинку из instagram, tiktok или youtube, отправьте боту адрес поста или видео.",
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
    "CAACAgIAAxkBAAIB52XDWzmNhaBIWom6u-3BpSHSrz9jAAIZAAOQ_ZoV677Md6Rolsg0BA",
};
