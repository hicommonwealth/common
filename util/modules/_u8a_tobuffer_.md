> # External module: "u8a/toBuffer"

## Index

### Functions

* [u8aToBuffer](_u8a_tobuffer_.md#u8atobuffer)

## Functions

###  u8aToBuffer

▸ **u8aToBuffer**(`value?`: Uint8Array | null): *Buffer*

*Defined in [u8a/toBuffer.ts:19](https://github.com/polkadot-js/common/blob/22e76c1/packages/util/src/u8a/toBuffer.ts#L19)*

**`name`** u8aToBuffer

**`summary`** Creates a Buffer object from a hex string.

**`description`** 
`null` inputs returns an empty `Buffer` result. `UInt8Array` input values return the actual bytes value converted to a `Buffer`. Anything that is not a `UInt8Array` throws an error.

**`example`** 
<BR>

```javascript
import { u8aToBuffer } from '@polkadot/util';

console.log('Buffer', u8aToBuffer('0x123480001f'));
```

**Parameters:**

Name | Type |
------ | ------ |
`value?` | Uint8Array \| null |

**Returns:** *Buffer*