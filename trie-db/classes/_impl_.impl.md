> # Class: Impl

# @polkadot/trie-db

## Overview

**`name`** Trie

**`summary`** Re-implementation of a Patricia Trie

**`example`** See [Polkadot-JS Common Trie-DB Examples](https://polkadot.js.org/api/common/examples/trie-db/)

## Hierarchy

* [Checkpoint](_checkpoint_.checkpoint.md)

  * **Impl**

## Index

### Constructors

* [constructor](_impl_.impl.md#constructor)

### Properties

* [db](_impl_.impl.md#db)

## Constructors

###  constructor

\+ **new Impl**(`db`: `TxDb`, `rootHash?`: `Uint8Array`, `codec`: `Codec`): *[Impl](_impl_.impl.md)*

*Overrides [Checkpoint](_checkpoint_.checkpoint.md).[constructor](_checkpoint_.checkpoint.md#constructor)*

*Defined in [Impl.ts:43](https://github.com/polkadot-js/common/blob/f0aebfc/packages/trie-db/src/Impl.ts#L43)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`db` | `TxDb` | - |
`rootHash?` | `Uint8Array` | - |
`codec` | `Codec` |  substrateCodec |

**Returns:** *[Impl](_impl_.impl.md)*

## Properties

###  db

• **db**: *`TxDb`*

*Defined in [Impl.ts:39](https://github.com/polkadot-js/common/blob/f0aebfc/packages/trie-db/src/Impl.ts#L39)*