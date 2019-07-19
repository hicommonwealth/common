> # External module: "hex/toNumber"

## Index

### Functions

* [hexToNumber](_hex_tonumber_.md#hextonumber)

## Functions

###  hexToNumber

▸ **hexToNumber**(`value?`: string | null): *number*

*Defined in [hex/toNumber.ts:21](https://github.com/polkadot-js/common/blob/c7c04bf/packages/util/src/hex/toNumber.ts#L21)*

**`name`** hexToNumber

**`summary`** Creates a Number value from a Buffer object.

**`description`** 
`null` inputs returns an NaN result, `hex` values return the actual value as a `Number`.

**`example`** 
<BR>

```javascript
import { hexToNumber } from '@polkadot/util';

hexToNumber('0x1234'); // => 0x1234
```

**Parameters:**

Name | Type |
------ | ------ |
`value?` | string \| null |

**Returns:** *number*