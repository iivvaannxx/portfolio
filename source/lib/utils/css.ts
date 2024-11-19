/**
 * Converts a style object to a CSS string.
 *
 * @param style - An object where the keys are CSS property names and the values are CSS property values.
 * @returns A string representation of the CSS styles.
 */
export function styleToString(style: Record<string, string>) {
  return Object.entries(style)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
}
