/**
 * Remaps a value from one range to another range.
 *
 * @param value - The value to be remapped.
 * @param from - The range of the original value.
 * @param to - The range to remap the value to.
 */
export function remapRange(
  value: number,
  from: [number, number],
  to: [number, number],
) {
  const [fromMin, fromMax] = from;
  const [toMin, toMax] = to;

  return ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin) + toMin;
}
