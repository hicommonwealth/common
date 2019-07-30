> # Interface: KeyringPair

## Hierarchy

* **KeyringPair**

## Index

### Properties

* [address](_types_.keyringpair.md#address)
* [decodePkcs8](_types_.keyringpair.md#decodepkcs8)
* [encodePkcs8](_types_.keyringpair.md#encodepkcs8)
* [isLocked](_types_.keyringpair.md#islocked)
* [lock](_types_.keyringpair.md#lock)
* [meta](_types_.keyringpair.md#meta)
* [publicKey](_types_.keyringpair.md#publickey)
* [setMeta](_types_.keyringpair.md#setmeta)
* [type](_types_.keyringpair.md#type)

### Methods

* [sign](_types_.keyringpair.md#sign)
* [toJson](_types_.keyringpair.md#tojson)
* [verify](_types_.keyringpair.md#verify)

## Properties

###  address

• **address**: *string*

*Defined in [types.ts:37](https://github.com/polkadot-js/common/blob/de7e9f8/packages/keyring/src/types.ts#L37)*

___

###  decodePkcs8

• **decodePkcs8**: *function*

*Defined in [types.ts:38](https://github.com/polkadot-js/common/blob/de7e9f8/packages/keyring/src/types.ts#L38)*

#### Type declaration:

▸ (`passphrase?`: undefined | string, `encoded?`: `Uint8Array`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined \| string |
`encoded?` | `Uint8Array` |

___

###  encodePkcs8

• **encodePkcs8**: *function*

*Defined in [types.ts:39](https://github.com/polkadot-js/common/blob/de7e9f8/packages/keyring/src/types.ts#L39)*

#### Type declaration:

▸ (`passphrase?`: undefined | string): *`Uint8Array`*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined \| string |

___

###  isLocked

• **isLocked**: *boolean*

*Defined in [types.ts:41](https://github.com/polkadot-js/common/blob/de7e9f8/packages/keyring/src/types.ts#L41)*

___

###  lock

• **lock**: *function*

*Defined in [types.ts:42](https://github.com/polkadot-js/common/blob/de7e9f8/packages/keyring/src/types.ts#L42)*

#### Type declaration:

▸ (): *void*

___

###  meta

• **meta**: *[KeyringPair$Meta](_types_.keyringpair_meta.md)*

*Defined in [types.ts:40](https://github.com/polkadot-js/common/blob/de7e9f8/packages/keyring/src/types.ts#L40)*

___

###  publicKey

• **publicKey**: *`Uint8Array`*

*Defined in [types.ts:43](https://github.com/polkadot-js/common/blob/de7e9f8/packages/keyring/src/types.ts#L43)*

___

###  setMeta

• **setMeta**: *function*

*Defined in [types.ts:44](https://github.com/polkadot-js/common/blob/de7e9f8/packages/keyring/src/types.ts#L44)*

#### Type declaration:

▸ (`meta`: [KeyringPair$Meta](_types_.keyringpair_meta.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`meta` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |

___

###  type

• **type**: *`KeypairType`*

*Defined in [types.ts:35](https://github.com/polkadot-js/common/blob/de7e9f8/packages/keyring/src/types.ts#L35)*

## Methods

###  sign

▸ **sign**(`message`: `Uint8Array`): *`Uint8Array`*

*Defined in [types.ts:45](https://github.com/polkadot-js/common/blob/de7e9f8/packages/keyring/src/types.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | `Uint8Array` |

**Returns:** *`Uint8Array`*

___

###  toJson

▸ **toJson**(`passphrase?`: undefined | string): *[KeyringPair$Json](_types_.keyringpair_json.md)*

*Defined in [types.ts:46](https://github.com/polkadot-js/common/blob/de7e9f8/packages/keyring/src/types.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined \| string |

**Returns:** *[KeyringPair$Json](_types_.keyringpair_json.md)*

___

###  verify

▸ **verify**(`message`: `Uint8Array`, `signature`: `Uint8Array`): *boolean*

*Defined in [types.ts:47](https://github.com/polkadot-js/common/blob/de7e9f8/packages/keyring/src/types.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | `Uint8Array` |
`signature` | `Uint8Array` |

**Returns:** *boolean*