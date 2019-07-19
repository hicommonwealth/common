> # External module: "xxhash/xxhash64/asRaw"

## Index

### Functions

* [xxhash64AsRaw](_xxhash_xxhash64_asraw_.md#xxhash64asraw)

## Functions

###  xxhash64AsRaw

▸ **xxhash64AsRaw**(`data`: `Buffer` | `Uint8Array` | string, `seed`: number): *string*

*Defined in [xxhash/xxhash64/asRaw.ts:21](https://github.com/polkadot-js/common/blob/aab3ed5/packages/util-crypto/src/xxhash/xxhash64/asRaw.ts#L21)*

**`name`** xxhash64AsRaw

**`summary`** Creates a xxhash non-prefixed hex from the input.

**`description`** 
From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a non-prefixed hex string.

**`example`** 
<BR>

```javascript
import { xxhash64AsRaw } from '@polkadot/util-crypto';

xxhash64AsRaw('abcd', 0xabcd)); // => e29f70f8b8c96df7
```

**Parameters:**

Name | Type |
------ | ------ |
`data` | `Buffer` \| `Uint8Array` \| string |
`seed` | number |

**Returns:** *string*