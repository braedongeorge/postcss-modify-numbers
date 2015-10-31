# PostCSS Modify Numbers [![Build Status][ci-img]][ci]

[PostCSS] plugin that performs math operations on all numbers with a certain property.

## Installation

```console
$ npm install postcss-modify-numbers
```

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/braedongeorge/postcss-modify-numbers.svg
[ci]:      https://travis-ci.org/braedongeorge/postcss-modify-numbers

```css
/* Input example */
.foo {
    width: 50px;
    height: 30px;
}

.bar {
    width: 100px;
    height: 60px;
}
```

```css
/* Output example */
.foo {
  width: 65px;
  height: 30px;
}

.bar {
    width: 130px;
    height: 60px;
}
```

## Usage

```js
postcss([ require('postcss-modify-numbers')({
    property: "width",
    operation: "multiply",
    number: "1.3"
}])
```

## Options
### Property
What CSS property you would like to affect, currently only supports one.

### Operation
What operation you would like to perform e.g ('add','subtract','divide','multiple')

### Number
The number you would like modify the number by

### Decimals
The number of decimal places to round to (default is 3)

See [PostCSS] docs for examples for your environment.
