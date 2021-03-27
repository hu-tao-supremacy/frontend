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

/**
 *
 * @param reader A FileReader object
 * @param target The target HTML input element we are going to read file from
 * @returns The first uploaded file received from the the HTML input element
 */
async function uploadFile(reader: FileReader, target: HTMLInputElement) {
  const result = await finishUploadFile(reader, target);
  return result;
}

export { uploadFile };
