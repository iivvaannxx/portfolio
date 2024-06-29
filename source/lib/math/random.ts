/**
 * Generates a random number within the specified range.
 *
 * @param min - The minimum value of the range (inclusive).
 * @param max - The maximum value of the range (exclusive).
 * @returns A random number within the specified range.
 */
export function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
