async function finishUploadFile(
  reader: FileReader,
  target: HTMLInputElement
): Promise<string> {
  return new Promise(resolve => {
    reader.onloadend = function() {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(target.files?.[0] as File);
  });
}

async function uploadFile(reader: FileReader, target: HTMLInputElement) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const result = await finishUploadFile(reader, target);
  return result;
}

export { uploadFile };
