// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const { u8aToString } = require('./index');

describe('u8aToString', () => {
  it('decodes to an empty string for undefined', () => {
    expect(
      u8aToString()
    ).toEqual('');
  });

  it('decodes to an empty string for empty buffer', () => {
    expect(
      u8aToString(new Uint8Array([]))
    ).toEqual('');
  });

  it('decodes the buffer correctly', () => {
    expect(
      u8aToString(
        new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0x6f])
      )
    ).toEqual('hello');
  });
});