export const handleYoutubeError = (message, largeFileHandle) => {
  const largeFile = message.includes("Too Large");
  if (largeFile) largeFileHandle();
  else console.log(message);
};
