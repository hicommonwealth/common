> # External module: "format/si"

## Index

### Interfaces

* [SiDef](../interfaces/_format_si_.sidef.md)

### Variables

* [SI](_format_si_.md#const-si)
* [SI_MID](_format_si_.md#const-si_mid)

### Functions

* [calcSi](_format_si_.md#calcsi)
* [findSi](_format_si_.md#findsi)

## Variables

### `Const` SI

• **SI**: *[SiDef](../interfaces/_format_si_.sidef.md)[]* =  [
  { power: -24, value: 'y', text: 'yocto' },
  { power: -21, value: 'z', text: 'zepto' },
  { power: -18, value: 'a', text: 'atto' },
  { power: -15, value: 'f', text: 'femto' },
  { power: -12, value: 'p', text: 'pico' },
  { power: -9, value: 'n', text: 'nano' },
  { power: -6, value: 'µ', text: 'micro' },
  { power: -3, value: 'm', text: 'milli' },
  { power: 0, value: '-', text: 'Unit' }, // position 8
  { power: 3, value: 'k', text: 'Kilo' },
  { power: 6, value: 'M', text: 'Mega' },
  { power: 9, value: 'G', text: 'Giga' },
  { power: 12, value: 'T', text: 'Tera' },
  { power: 15, value: 'P', text: 'Peta' },
  { power: 18, value: 'E', text: 'Exa' },
  { power: 21, value: 'Z', text: 'Zeta' },
  { power: 24, value: 'Y', text: 'Yotta' }
]

*Defined in [format/si.ts:13](https://github.com/polkadot-js/common/blob/09e0b80/packages/util/src/format/si.ts#L13)*

___

### `Const` SI_MID

• **SI_MID**: *`8`* = 8

*Defined in [format/si.ts:11](https://github.com/polkadot-js/common/blob/09e0b80/packages/util/src/format/si.ts#L11)*

## Functions

###  calcSi

▸ **calcSi**(`text`: string, `decimals`: number): *[SiDef](../interfaces/_format_si_.sidef.md)*

*Defined in [format/si.ts:33](https://github.com/polkadot-js/common/blob/09e0b80/packages/util/src/format/si.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
`decimals` | number |

**Returns:** *[SiDef](../interfaces/_format_si_.sidef.md)*

___

###  findSi

▸ **findSi**(`type`: string): *[SiDef](../interfaces/_format_si_.sidef.md)*

*Defined in [format/si.ts:39](https://github.com/polkadot-js/common/blob/09e0b80/packages/util/src/format/si.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *[SiDef](../interfaces/_format_si_.sidef.md)*