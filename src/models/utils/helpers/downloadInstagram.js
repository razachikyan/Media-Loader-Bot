import instagramDl from "@sasmeee/igdl";

export const downloadInstagram = async (url) => {
  const [{ download_link }] = await instagramDl(url);
  const res = await fetch(download_link);
  const blob = await res.blob();
  const buffer = Buffer.from(await blob.arrayBuffer());

  return { buffer };
};
