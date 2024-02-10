import { fileTypeFromBuffer } from "file-type";

export const checkFileType = async (buffer) => {
  const { mime } = await fileTypeFromBuffer(buffer);
  return mime.startsWith("image") ? "image" : "video";
};
