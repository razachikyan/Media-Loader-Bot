import ytdl from "ytdl-core";

export const downloadYoutube = async (url, quality) => {
  const a = ytdl(url, { quality });
  const promise = new Promise((resolve) => {
    const chunks = [];
    a.addListener("data", (chunk) => chunks.push(chunk));
    a.on("end", () => resolve(Buffer.concat(chunks)));
  });
  const buffer = await promise;

  return buffer;
};
