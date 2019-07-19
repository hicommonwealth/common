> # External module: "is/object"

## Index

### Functions

* [isObject](_is_object_.md#isobject)

## Functions

###  isObject

▸ **isObject**(`value`: any): *boolean*

*Defined in [is/object.ts:26](https://github.com/polkadot-js/common/blob/c7c04bf/packages/util/src/is/object.ts#L26)*

**`name`** isObject

**`summary`** Tests for an `object`.

**`description`** 
Checks to see if the input value is a JavaScript object.

**`example`** 
<BR>

```javascript
import { isObject } from '@polkadot/util';

isObject({}); // => true
isObject('something'); // => false
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*