> # External module: "is/hex"

## Index

### Functions

* [isHex](_is_hex_.md#ishex)

## Functions

###  isHex

▸ **isHex**(`value`: any, `bitLength`: number, `ignoreLength`: boolean): *boolean*

*Defined in [is/hex.ts:25](https://github.com/polkadot-js/common/blob/c7c04bf/packages/util/src/is/hex.ts#L25)*

**`name`** isHex

**`summary`** Tests for a hex string.

**`description`** 
Checks to see if the input value is a `0x` prefixed hex string. Optionally (`bitLength` !== -1) checks to see if the bitLength is correct.

**`example`** 
<BR>

```javascript
import { isHex } from '@polkadot/util';

isHex('0x1234'); // => true
isHex('0x1234', 8); // => false
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | any | - |
`bitLength` | number |  -1 |
`ignoreLength` | boolean | false |

**Returns:** *boolean*