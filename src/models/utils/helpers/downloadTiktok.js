import { TiktokDL } from "@tobyg74/tiktok-api-dl";

export const downloadTiktok = async (url) => {
  const { result } = await TiktokDL(url, { version: "v1" });
  const res = await fetch(result.video[0]);
  const blob = await res.blob();
  const buffer = Buffer.from(await blob.arrayBuffer());

  return { buffer };
};
