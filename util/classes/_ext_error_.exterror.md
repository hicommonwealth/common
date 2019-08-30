> # Class: ExtError

**`name`** ExtError

**`summary`** Extension to the basic JS Error.

**`description`** 
The built-in JavaScript Error class is extended by adding a code to allow for Error categorization. In addition to the normal `stack`, `message`, the numeric `code` and `data` (any types) parameters are available on the object.

**`example`** 
<BR>

```javascript
const { ExtError } from '@polkadot/util');

throw new ExtError('some message', ExtError.CODES.METHOD_NOT_FOUND); // => error.code = -32601
```

## Hierarchy

* Error

  * **ExtError**

## Implements

* [ExtErrorInterface](../interfaces/_types_.exterrorinterface.md)

## Index

### Constructors

* [constructor](_ext_error_.exterror.md#constructor)

### Properties

* [code](_ext_error_.exterror.md#code)
* [data](_ext_error_.exterror.md#optional-data)
* [message](_ext_error_.exterror.md#message)
* [name](_ext_error_.exterror.md#name)
* [stack](_ext_error_.exterror.md#stack)
* [Error](_ext_error_.exterror.md#static-error)

### Object literals

* [CODES](_ext_error_.exterror.md#static-codes)

## Constructors

###  constructor

\+ **new ExtError**(`message`: string, `code`: number, `data?`: number | string): *[ExtError](_ext_error_.exterror.md)*

*Defined in [ext/error.ts:42](https://github.com/polkadot-js/common/blob/25fc033/packages/util/src/ext/error.ts#L42)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | "" |
`code` | number |  UNKNOWN |
`data?` | number \| string | - |

**Returns:** *[ExtError](_ext_error_.exterror.md)*

## Properties

###  code

• **code**: *number*

*Implementation of [ExtErrorInterface](../interfaces/_types_.exterrorinterface.md).[code](../interfaces/_types_.exterrorinterface.md#code)*

*Defined in [ext/error.ts:34](https://github.com/polkadot-js/common/blob/25fc033/packages/util/src/ext/error.ts#L34)*

___

### `Optional` data

• **data**? : *number | string*

*Implementation of [ExtErrorInterface](../interfaces/_types_.exterrorinterface.md).[data](../interfaces/_types_.exterrorinterface.md#optional-data)*

*Defined in [ext/error.ts:36](https://github.com/polkadot-js/common/blob/25fc033/packages/util/src/ext/error.ts#L36)*

___

###  message

• **message**: *string*

*Implementation of [ExtErrorInterface](../interfaces/_types_.exterrorinterface.md).[message](../interfaces/_types_.exterrorinterface.md#message)*

*Overrides void*

*Defined in [ext/error.ts:38](https://github.com/polkadot-js/common/blob/25fc033/packages/util/src/ext/error.ts#L38)*

___

###  name

• **name**: *string*

*Overrides void*

*Defined in [ext/error.ts:40](https://github.com/polkadot-js/common/blob/25fc033/packages/util/src/ext/error.ts#L40)*

___

###  stack

• **stack**: *string*

*Implementation of [ExtErrorInterface](../interfaces/_types_.exterrorinterface.md).[stack](../interfaces/_types_.exterrorinterface.md#stack)*

*Overrides void*

*Defined in [ext/error.ts:42](https://github.com/polkadot-js/common/blob/25fc033/packages/util/src/ext/error.ts#L42)*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in /home/travis/build/polkadot-js/common/node_modules/typescript/lib/lib.es5.d.ts:984

## Object literals

### `Static` CODES

### ▪ **CODES**: *object*

*Defined in [ext/error.ts:67](https://github.com/polkadot-js/common/blob/25fc033/packages/util/src/ext/error.ts#L67)*

###  ASSERT

• **ASSERT**: *number* =  -90009

*Defined in [ext/error.ts:68](https://github.com/polkadot-js/common/blob/25fc033/packages/util/src/ext/error.ts#L68)*

###  INVALID_JSONRPC

• **INVALID_JSONRPC**: *number* =  -99998

*Defined in [ext/error.ts:70](https://github.com/polkadot-js/common/blob/25fc033/packages/util/src/ext/error.ts#L70)*

###  METHOD_NOT_FOUND

• **METHOD_NOT_FOUND**: *number* =  -32601

*Defined in [ext/error.ts:71](https://github.com/polkadot-js/common/blob/25fc033/packages/util/src/ext/error.ts#L71)*

###  UNKNOWN

• **UNKNOWN**: *number*

*Defined in [ext/error.ts:69](https://github.com/polkadot-js/common/blob/25fc033/packages/util/src/ext/error.ts#L69)*