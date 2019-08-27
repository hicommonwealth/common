> # External module: "testing"

## Index

### Functions

* [testKeyring](_testing_.md#testkeyring)

## Functions

###  testKeyring

▸ **testKeyring**(`options`: [KeyringOptions](../interfaces/_types_.keyringoptions.md), `isDerived`: boolean): *[KeyringInstance](../interfaces/_types_.keyringinstance.md)*

*Defined in [testing.ts:80](https://github.com/polkadot-js/common/blob/a8b28a2/packages/keyring/src/testing.ts#L80)*

**`name`** testKeyring

**`summary`** Create an instance of Keyring pre-populated with locked test accounts

**`description`** The test accounts (i.e. alice, bob, dave, eve, ferdie)
are available on the dev chain and each test account is initialised with DOT funds.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [KeyringOptions](../interfaces/_types_.keyringoptions.md) |  {} |
`isDerived` | boolean | true |

**Returns:** *[KeyringInstance](../interfaces/_types_.keyringinstance.md)*