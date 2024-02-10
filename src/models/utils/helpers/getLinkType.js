import { REGEXPS } from "../constants.js";

export const getLinkType = (link) => {
  try {
    if (REGEXPS.instagram.test(link)) return "inst";
    if (REGEXPS.tiktok.test(link)) return "tiktok";
    if (link.startsWith(REGEXPS.youtube1) || link.startsWith(REGEXPS.youtube2))
      return "youtube";
    return "incorrect";
  } catch (err) {
    console.log(err.message);
    return "incorrect";
  }
};
