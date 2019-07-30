> # External module: "xxhash/xxhash64/asValue"

## Index

### Functions

* [xxhash64AsValue](_xxhash_xxhash64_asvalue_.md#xxhash64asvalue)

## Functions

###  xxhash64AsValue

▸ **xxhash64AsValue**(`data`: `Buffer` | `Uint8Array` | string, `seed`: number): *number*

*Defined in [xxhash/xxhash64/asValue.ts:22](https://github.com/polkadot-js/common/blob/de7e9f8/packages/util-crypto/src/xxhash/xxhash64/asValue.ts#L22)*

**`name`** xxhash64AsValue

**`summary`** Creates a hex number from the input.

**`description`** 
From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a hex number

**`example`** 
<BR>

```javascript
import { xxhash64AsValue } from '@polkadot/util-crypto';

xxhash64AsValue('abcd', 0xabcd)); // => e29f70f8b8c96df7
```

**Parameters:**

Name | Type |
------ | ------ |
`data` | `Buffer` \| `Uint8Array` \| string |
`seed` | number |

**Returns:** *number*