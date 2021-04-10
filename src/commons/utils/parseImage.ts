async function finishParseImageFile(
  reader: FileReader,
  blob: Blob
): Promise<string> {
  return new Promise(resolve => {
    reader.onloadend = function() {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(blob);
  });
}

/**
 *
 * @param reader A FileReader object
 * @param target The target HTML input element we are going to read file from
 * @returns The first uploaded file received from the the HTML input element
 */
async function parseImageFile(reader: FileReader, blob: Blob) {
  const result = await finishParseImageFile(reader, blob);
  return result;
}

export { parseImageFile };
