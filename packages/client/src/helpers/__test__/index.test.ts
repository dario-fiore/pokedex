import { zeroPad } from '..';

describe('src/helpers', () => {
  it('zeroPad with 2 leading 0', () => {
    const numberToPad = 1;
    expect(zeroPad(numberToPad, 3)).toBe('001');
  });
});
