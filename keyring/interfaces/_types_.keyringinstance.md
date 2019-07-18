> # Interface: KeyringInstance

## Hierarchy

* **KeyringInstance**

## Implemented by

* [Keyring](../classes/_keyring_.keyring.md)

## Index

### Properties

* [pairs](_types_.keyringinstance.md#pairs)
* [publicKeys](_types_.keyringinstance.md#publickeys)
* [type](_types_.keyringinstance.md#type)

### Methods

* [addFromAddress](_types_.keyringinstance.md#addfromaddress)
* [addFromJson](_types_.keyringinstance.md#addfromjson)
* [addFromMnemonic](_types_.keyringinstance.md#addfrommnemonic)
* [addFromSeed](_types_.keyringinstance.md#addfromseed)
* [addFromUri](_types_.keyringinstance.md#addfromuri)
* [addPair](_types_.keyringinstance.md#addpair)
* [createFromUri](_types_.keyringinstance.md#createfromuri)
* [decodeAddress](_types_.keyringinstance.md#decodeaddress)
* [encodeAddress](_types_.keyringinstance.md#encodeaddress)
* [getPair](_types_.keyringinstance.md#getpair)
* [getPairs](_types_.keyringinstance.md#getpairs)
* [getPublicKeys](_types_.keyringinstance.md#getpublickeys)
* [removePair](_types_.keyringinstance.md#removepair)
* [setAddressPrefix](_types_.keyringinstance.md#setaddressprefix)
* [toJson](_types_.keyringinstance.md#tojson)

## Properties

###  pairs

• **pairs**: *[KeyringPair](_types_.keyringpair.md)[]*

*Defined in [types.ts:58](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L58)*

___

###  publicKeys

• **publicKeys**: *`Uint8Array`[]*

*Defined in [types.ts:59](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L59)*

___

###  type

• **type**: *`KeypairType`*

*Defined in [types.ts:60](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L60)*

## Methods

###  addFromAddress

▸ **addFromAddress**(`address`: string | `Uint8Array`, `meta?`: [KeyringPair$Meta](_types_.keyringpair_meta.md), `encoded?`: `Uint8Array` | null, `type?`: `KeypairType`, `ignoreChecksum?`: undefined | false | true): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:67](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |
`meta?` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |
`encoded?` | `Uint8Array` \| null |
`type?` | `KeypairType` |
`ignoreChecksum?` | undefined \| false \| true |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  addFromJson

▸ **addFromJson**(`pair`: [KeyringPair$Json](_types_.keyringpair_json.md), `ignoreChecksum?`: undefined | false | true): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:68](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | [KeyringPair$Json](_types_.keyringpair_json.md) |
`ignoreChecksum?` | undefined \| false \| true |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  addFromMnemonic

▸ **addFromMnemonic**(`mnemonic`: string, `meta?`: [KeyringPair$Meta](_types_.keyringpair_meta.md), `type?`: `KeypairType`): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:69](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`mnemonic` | string |
`meta?` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |
`type?` | `KeypairType` |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  addFromSeed

▸ **addFromSeed**(`seed`: `Uint8Array`, `meta?`: [KeyringPair$Meta](_types_.keyringpair_meta.md), `type?`: `KeypairType`): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:70](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | `Uint8Array` |
`meta?` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |
`type?` | `KeypairType` |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  addFromUri

▸ **addFromUri**(`suri`: string, `meta?`: [KeyringPair$Meta](_types_.keyringpair_meta.md), `type?`: `KeypairType`): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:71](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |
`meta?` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |
`type?` | `KeypairType` |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  addPair

▸ **addPair**(`pair`: [KeyringPair](_types_.keyringpair.md)): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:66](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | [KeyringPair](_types_.keyringpair.md) |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  createFromUri

▸ **createFromUri**(`suri`: string, `meta?`: [KeyringPair$Meta](_types_.keyringpair_meta.md), `type?`: `KeypairType`): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:72](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |
`meta?` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |
`type?` | `KeypairType` |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  decodeAddress

▸ **decodeAddress**(`encoded`: string | `Uint8Array`, `ignoreChecksum?`: undefined | false | true): *`Uint8Array`*

*Defined in [types.ts:62](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`encoded` | string \| `Uint8Array` |
`ignoreChecksum?` | undefined \| false \| true |

**Returns:** *`Uint8Array`*

___

###  encodeAddress

▸ **encodeAddress**(`key`: `Uint8Array` | string): *string*

*Defined in [types.ts:63](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | `Uint8Array` \| string |

**Returns:** *string*

___

###  getPair

▸ **getPair**(`address`: string | `Uint8Array`): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:73](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  getPairs

▸ **getPairs**(): *[KeyringPair](_types_.keyringpair.md)[]*

*Defined in [types.ts:74](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L74)*

**Returns:** *[KeyringPair](_types_.keyringpair.md)[]*

___

###  getPublicKeys

▸ **getPublicKeys**(): *`Uint8Array`[]*

*Defined in [types.ts:75](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L75)*

**Returns:** *`Uint8Array`[]*

___

###  removePair

▸ **removePair**(`address`: string | `Uint8Array`): *void*

*Defined in [types.ts:76](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |

**Returns:** *void*

___

###  setAddressPrefix

▸ **setAddressPrefix**(`prefix`: `Prefix`): *void*

*Defined in [types.ts:64](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`prefix` | `Prefix` |

**Returns:** *void*

___

###  toJson

▸ **toJson**(`address`: string | `Uint8Array`, `passphrase?`: undefined | string): *[KeyringPair$Json](_types_.keyringpair_json.md)*

*Defined in [types.ts:77](https://github.com/polkadot-js/common/blob/cd7aafc/packages/keyring/src/types.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |
`passphrase?` | undefined \| string |

**Returns:** *[KeyringPair$Json](_types_.keyringpair_json.md)*