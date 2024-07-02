/**
 * Splits an array into chunks of a specified size.
 *
 * @param array - The array to be split into chunks.
 * @param chunkSize - The size of each chunk.
 * @returns An array of chunks, where each chunk is an array of elements from the original array.
 */
export function splitArrayIntoChunks<T>(array: T[], chunkSize: number) {
  if (chunkSize <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }

  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  return chunks;
}
