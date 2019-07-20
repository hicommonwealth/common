> # External module: "promisify"

## Index

### Interfaces

* [PromisifyFn](../interfaces/_promisify_.promisifyfn.md)

### Functions

* [promisify](_promisify_.md#promisify)

## Functions

###  promisify

▸ **promisify**(`self`: any, `fn`: [PromisifyFn](../interfaces/_promisify_.promisifyfn.md), ...`params`: `ParamType`): *`Promise<any>`*

*Defined in [promisify.ts:35](https://github.com/polkadot-js/common/blob/8fdfd7f/packages/util/src/promisify.ts#L35)*

**`name`** promisify

**`summary`** Wraps an async callback into a `Promise`

**`description`** 
Wraps the supplied async function `fn` that has a standard JS callback `(error: Error, result: any)` into a `Promise`, passing the supplied parameters. When `error` is set, the Promise is rejected, else the Promise resolves with the `result` value.

**`example`** 
<BR>

```javascript
const { promisify } from '@polkadot/util';

await promisify(null, ((a, cb) => cb(null, a), true); // resolves with `true`
await promisify(null, (cb) => cb(new Error('error!'))); // rejects with `error!`
```

**Parameters:**

Name | Type |
------ | ------ |
`self` | any |
`fn` | [PromisifyFn](../interfaces/_promisify_.promisifyfn.md) |
`...params` | `ParamType` |

**Returns:** *`Promise<any>`*