// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const { hexStripPrefix } = require('./index');

describe('hexStripPrefix', () => {
  it('returns the value as-is when no prefix', () => {
    expect(
      hexStripPrefix('01ab')
    ).toEqual('01ab');
  });

  it('returns an empty string when null value supplied', () => {
    expect(
      hexStripPrefix(null)
    ).toEqual('');
  });

  it('strips the prefix from other strings', () => {
    expect(
      hexStripPrefix('0x1223')
    ).toEqual('1223');
  });
});