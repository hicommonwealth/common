> # External module: "bn/toBn"

### Index

#### Functions

* [bnToBn](_bn_tobn_.md#bntobn)

## Functions

###  bnToBn

▸ **bnToBn**(`value?`: `BN` | number | null): *`BN`*

*Defined in [bn/toBn.ts:23](https://github.com/polkadot-js/common/blob/332620d/packages/util/src/bn/toBn.ts#L23)*

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

**Parameters:**

Name | Type |
------ | ------ |
`value?` | `BN` \| number \| null |

**Returns:** *`BN`*