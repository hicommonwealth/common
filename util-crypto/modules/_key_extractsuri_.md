> # External module: "key/extractSuri"

## Index

### Interfaces

* [ExtractResult](../interfaces/_key_extractsuri_.extractresult.md)

### Functions

* [keyExtract](_key_extractsuri_.md#keyextract)

## Functions

###  keyExtract

▸ **keyExtract**(`suri`: string): *[ExtractResult](../interfaces/_key_extractsuri_.extractresult.md)*

*Defined in [key/extractSuri.ts:21](https://github.com/polkadot-js/common/blob/9a4938b/packages/util-crypto/src/key/extractSuri.ts#L21)*

**`description`** Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed).

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |

**Returns:** *[ExtractResult](../interfaces/_key_extractsuri_.extractresult.md)*