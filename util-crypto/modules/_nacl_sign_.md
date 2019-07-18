> # External module: "nacl/sign"

## Index

### Functions

* [naclSign](_nacl_sign_.md#naclsign)

## Functions

###  naclSign

▸ **naclSign**(`message`: `Uint8Array` | string, `__namedParameters`: object): *`Uint8Array`*

*Defined in [nacl/sign.ts:25](https://github.com/polkadot-js/common/blob/cd7aafc/packages/util-crypto/src/nacl/sign.ts#L25)*

**`name`** naclSign

**`summary`** Signs a message using the supplied secretKey

**`description`** 
Returns message signature of `message`, using the `secretKey`.

**`example`** 
<BR>

```javascript
import { naclSign } from '@polkadot/util-crypto';

naclSign([...], [...]); // => [...]
```

**Parameters:**

Name | Type |
------ | ------ |
`message` | `Uint8Array` \| string |
`__namedParameters` | object |

**Returns:** *`Uint8Array`*