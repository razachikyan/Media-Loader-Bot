import instagramDl from "@sasmeee/igdl";
import { fileTypeFromBuffer } from "file-type";

export const downloadInstagram = async (url) => {
  const [{ download_link }] = await instagramDl(url);
  const res = await fetch(download_link);
  const blob = await res.blob();
  const buffer = Buffer.from(await blob.arrayBuffer());
  const type = await fileTypeFromBuffer(buffer);

  return { buffer, type };
};
