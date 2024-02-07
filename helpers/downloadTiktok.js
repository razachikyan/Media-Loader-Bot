import { TiktokDL } from "@tobyg74/tiktok-api-dl";
import { fileTypeFromBuffer } from "file-type";

export const downloadTiktok = async (url) => {
  const { result } = await TiktokDL(url, { version: "v1" });
  const res = await fetch(result.video[0]);
  const blob = await res.blob();
  const buffer = Buffer.from(await blob.arrayBuffer());
  const type = await fileTypeFromBuffer(buffer);

  return { buffer, type };
};
