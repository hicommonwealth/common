> # External module: "bn/toBn"

## Index

### Functions

* [bnToBn](_bn_tobn_.md#bntobn)

## Functions

###  bnToBn

▸ **bnToBn**<**ExtToBn**>(`value?`: ExtToBn | BN | string | number | null): *BN*

*Defined in [bn/toBn.ts:29](https://github.com/polkadot-js/common/blob/a8b28a2/packages/util/src/bn/toBn.ts#L29)*

**`name`** bnToBn

**`summary`** Creates a BN value from a BN.js bignumber or number input.

**`description`** 
`null` inputs returns a `0x0` result, BN values returns the value, numnbers returns a BN representation.

**`example`** 
<BR>

```javascript
import BN from 'bn.js';
import { bnToBn } from '@polkadot/util';

bnToBn(0x1234); // => BN(0x1234)
bnToBn(new BN(0x1234)); // => BN(0x1234)
```

**Type parameters:**

▪ **ExtToBn**: *[ToBn](../interfaces/_types_.tobn.md)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | ExtToBn \| BN \| string \| number \| null |

**Returns:** *BN*