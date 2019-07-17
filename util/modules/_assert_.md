> # External module: "assert"

### Index

#### Functions

* [assert](_assert_.md#assert)

## Functions

###  assert

▸ **assert**<**T**>(`test`: `Falsy` | `T`, `message`: string | `MessageFn`, `code`: number, `data?`: string | number): *boolean*

*Defined in [assert.ts:28](https://github.com/polkadot-js/common/blob/6c79462/packages/util/src/assert.ts#L28)*

**`name`** assert

**`summary`** Checks for a valid test, if not ExtError is thrown.

**`description`** 
Checks that `test` is a truthy value. If value is falsy (`null`, `undefined`, `false`, ...), it throws an ExtError with the supplied `message` and an optional `code` and `data`. When `test` passes, `true` is returned.

**`example`** 
<BR>

```javascript
const { assert } from '@polkadot/util';

assert(true, 'True should be true'); // true returned
assert(false, 'False should not be true'); // ExtError thrown
assert(false, () => 'message'); // ExtError with 'message'
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`test` | `Falsy` \| `T` | - |
`message` | string \| `MessageFn` | - |
`code` | number |  ExtError.CODES.ASSERT |
`data?` | string \| number | - |

**Returns:** *boolean*