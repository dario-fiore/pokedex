/**
 * Allow to pad a number with some leading '0'
 *
 * @param x integer to pad
 * @param y number of zeroes to pad
 */
export const zeroPad = (x: number, y: number): string => {
  y = Math.max(y - 1, 0);
  var n = (x / Math.pow(10, y)).toFixed(y);
  return n.replace('.', '');
};
